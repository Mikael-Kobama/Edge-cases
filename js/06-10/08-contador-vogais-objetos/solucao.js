function contarVogais(frase) {
  const contagem = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  const fraseMinuscula = frase.toLowerCase();

  for (let letra of fraseMinuscula) {
    if (contagem.hasOwnProperty(letra)) {
      contagem[letra]++;
    }
  }
  return contagem;
}

console.log(contarVogais("JavaScript é incrivel"));
