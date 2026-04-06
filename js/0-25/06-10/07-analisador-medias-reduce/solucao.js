const notas = [8.5, 7.0, 5.5, 9.0, 6.0];

const soma = notas.reduce((acumulador, notaAtual) => {
  return acumulador + notaAtual;
}, 0);

const status = meedia >= 7 ? "Aprovado" : "Reprovado";

console.log(`Média: ${media.toFixed(1)} - Status: ${status}`);
