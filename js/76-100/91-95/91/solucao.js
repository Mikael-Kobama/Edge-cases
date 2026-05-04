const fs = require("fs");
const dados = JSON.parse(fs.readFileSync("./dados.json", "utf-8"));

class ETLMotor {
  constructor() {
    this.historicoPorCategoria = new Map();
    this.transacoesProcessadas = [];
    this.transacoesSuspeitas = [];
  }

  padronizarTexto(transacao) {
    const filtroDescricao = transacao.desc
      .trim()
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    return { ...transacao, descricao: filtroDescricao };
  }

  validarMoeda(transacao) {
    if (typeof transacao.valor === "number") {
      return transacao;
    }
    if (typeof transacao.valor === "string") {
      let stringLimpa = transacao.valor
        .replace(/[^0-9.-]/g, "")
        .replace(",", ".");
      let numero = parseFloat(stringLimpa);
      return { ...transacao, valor: numero };
    } else {
      return transacao;
    }
  }

  categorizar(transacao) {
    const transacaoCategorizado = transacao.tipo
      .trim()
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    return { ...transacao, tipo: transacaoCategorizado };
  }

  verificarFraude(transacao) {
    const categoriaHistorico =
      this.historicoPorCategoria.get(transacao.tipo) || [];

    const somatorioHistorico = [...categoriaHistorico].reduce(
      (valorAcc, valorAtt) => {
        valorAcc += valorAtt;
        return valorAcc;
      },
      0,
    );

    const mediaHistorico = somatorioHistorico / [...categoriaHistorico].length;
    this.historicoPorCategoria.set(transacao.tipo, [
      ...categoriaHistorico,
      transacao.valor,
    ]);

    if (categoriaHistorico.length === 0) {
      return transacao;
    }
    if (transacao.valor > mediaHistorico * 10) {
      this.transacoesSuspeitas.push(transacao.id);
      return { ...transacao, fraude: true };
    } else {
      return { ...transacao, fraude: false };
    }
  }

  async processarTransacao(transacao) {
    const etapas = [
      this.padronizarTexto,
      this.validarMoeda,
      this.categorizar,
      this.verificarFraude,
    ];

    return etapas.reduce(async (transacoes, etapa) => {
      const transacaoProcessada = await transacoes;
      await new Promise((resolve) => setTimeout(resolve, 50));
      return etapa.call(this, transacaoProcessada);
    }, Promise.resolve(transacao));
  }

  async processarLote(transacao) {
    const transacoesProcessadas = transacao.map((transacao) =>
      this.processarTransacao(transacao),
    );
    const resultado = await Promise.allSettled(transacoesProcessadas);
    return resultado;
  }

  gerarRelatorio(transacao) {
    const transacoesExtraidas = transacao
      .map((p) => p.value)
      .filter((t) => t !== undefined);

    const totalProcessado = transacao.length;

    const somaPorCategoria = transacoesExtraidas.reduce((acc, att) => {
      acc[att.tipo] = (acc[att.tipo] || 0) + att.valor;
      return acc;
    }, {});

    const maiorGasto = transacoesExtraidas.reduce(
      (acc, att) => (att.valor > acc.valor ? att : acc),
      transacoesExtraidas[0],
    );

    const transacoesSuspeitas = this.transacoesSuspeitas;

    return {
      totalProcessado,
      somaPorCategoria,
      maiorGasto,
      transacoesSuspeitas,
    };
  }
}

const motor = new ETLMotor();
motor
  .processarLote(dados)
  .then((transacao) => motor.gerarRelatorio(transacao))
  .then(console.log);
