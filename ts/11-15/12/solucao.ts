const s1: string = "TS";
const s2: string = "Logica";
const s3: string = "Repeticao";
const s4: string = "Desafio";
const s5: string = "12";

function concatenarPalavras(
  s1: string,
  s2: string,
  s3: string,
  s4: string,
  s5: string,
): string {
  const listaInicial: string = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5;
  const listaFinal: string = listaInicial.replaceAll(" ", " | ");
  return listaFinal;
}
console.log(concatenarPalavras(s1, s2, s3, s4, s5));
