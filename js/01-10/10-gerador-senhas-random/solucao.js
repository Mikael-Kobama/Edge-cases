function gerarSenha(tamanho) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#";
  let senha = "";

  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * chars.length);

    senha += chars[indice];
  }
  return senha;
}

console.log(gerarSenha(12));
