const arquivos = ["app.js", "index.js", "config.js"];

const separador = arquivos.every((arq) => arq.endsWith(".js"));

console.log(separador);
