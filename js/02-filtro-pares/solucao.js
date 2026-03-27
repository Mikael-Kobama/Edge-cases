function filtrarPares(numeros) {
  return numeros.filter((num) => num % 2 === 0);
}

const lista = [10, 15, 20, 25, 30];
console.log(filtrarPares(lista));
