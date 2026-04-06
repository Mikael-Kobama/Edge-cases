const arquivos = ["foto.jpg", "relatorio.pdf", "perfil.png", "script.js"];

const separador = arquivos.reduce(
  (acc, arquivo) => {
    if (arquivo.endsWith(".jpg") || arquivo.endsWith(".png")) {
      acc.imagens.push(arquivo);
    } else {
      acc.outros.push(arquivo);
    }
    return acc;
  },
  { imagens: [], outros: [] },
);

console.log(separador);
