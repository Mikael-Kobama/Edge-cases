const fluxoRequisicoes = [
  { id: "user_1", tempoAposAnterior: 0 },
  { id: "user_2", tempoAposAnterior: 100 },
  { id: "user_3", tempoAposAnterior: 100 },
  { id: "user_4", tempoAposAnterior: 100 },
  { id: "user_5", tempoAposAnterior: 100 },
  { id: "user_1", tempoAposAnterior: 200 },
  { id: "user_1", tempoAposAnterior: 100 },
  { id: "user_3", tempoAposAnterior: 100 },
  { id: "user_5", tempoAposAnterior: 100 },
  { id: "user_6", tempoAposAnterior: 500 },
  { id: "user_1", tempoAposAnterior: 5500 },
  { id: "user_1", tempoAposAnterior: 100 },
  { id: "user_3", tempoAposAnterior: 8000 },
  { id: "user_6", tempoAposAnterior: 100 },
  { id: "user_7", tempoAposAnterior: 100 },
  { id: "user_8", tempoAposAnterior: 100 },
  { id: "user_9", tempoAposAnterior: 100 },
  { id: "user_10", tempoAposAnterior: 100 },
  { id: "user_1", tempoAposAnterior: 100 },
  { id: "user_1", tempoAposAnterior: 0 },
  { id: "user_5", tempoAposAnterior: 0 },
  { id: "user_11", tempoAposAnterior: 1000 },
  { id: "user_12", tempoAposAnterior: 0 },
  { id: "user_3", tempoAposAnterior: 500 },
];

async function buscarNoBanco(chave) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ chave, valor: `dado_do_banco_${chave}` });
    }, 1000);
  });
}

class Cache {
  constructor() {
    this.dados = new Map();
    this.limite = 5;
  }

  salvar(chave, valor, ttl) {
    const timestampCriacao = Date.now();
    const acessos = 0;
    if (this.dados.size >= this.limite) {
      this.expulsar();
    }
    this.dados.set(chave, { valor, timestampCriacao, acessos, ttl });
  }

  expulsar() {
    const listaDados = [...this.dados.entries()];
    const menorAcesso = listaDados.reduce((acc, att) => {
      return acc[1].acessos < att[1].acessos ? acc : att;
    });
    this.dados.delete(menorAcesso[0]);
  }

  async buscar(chave) {
    if (this.dados.has(chave)) {
      const item = this.dados.get(chave);
      let idade = Date.now() - item.timestampCriacao;
      if (idade <= item.ttl) {
        return {
          valor: item.valor,
          origem: "CACHE",
          tempoResposta: 0,
          estadoCache: {
            itens: this.dados.size,
          },
        };
      } else if (idade <= item.ttl + 2000) {
        buscarNoBanco(chave).then((resultado) => {
          this.salvar(chave, resultado.valor, item.ttl);
        });
        return {
          valor: item.valor,
          origem: "STALE REVALIDATE",
          tempoResposta: 0,
          estadoCache: {
            itens: this.dados.size,
          },
        };
      } else {
        const dados = await buscarNoBanco(chave);
        this.salvar(chave, dados.valor, item.ttl);
        return {
          valor: dados.valor,
          origem: "DATABASE",
          tempoResposta: 1000,
          estadoCache: {
            itens: this.dados.size,
          },
        };
      }
    } else {
      const dados = await buscarNoBanco(chave);
      this.salvar(chave, dados.valor, 1000);
      return {
        valor: dados.valor,
        origem: "DATABASE",
        tempoResposta: 1000,
        estadoCache: {
          itens: this.dados.size,
        },
      };
    }
  }
}

const cache = new Cache();
cache.buscar("user_1").then(console.log);
