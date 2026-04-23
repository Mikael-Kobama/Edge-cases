function requisicaoMock(id, tempoMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // aqui dentro você verifica o tempoMs
      // e chama resolve ou reject com a mensagem certa
    }, tempoMs);
  });
}
