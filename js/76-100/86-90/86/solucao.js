function requisicaoMock(id, tempoMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tempoMs <= 2000) {
        resolve(`Dados do ID ${id} carregados com sucesso`);
      }
      if (tempoMs > 2000) {
        reject(`Erro: Timeout no ID ${id}`);
      }
    }, tempoMs);
  });
}

requisicaoMock(101, 1500)
  .then((mensagem) => console.log(mensagem))
  .catch((erro) => console.log(erro));
requisicaoMock(102, 3000)
  .then((mensagem) => console.log(mensagem))
  .catch((erro) => console.log(erro));
