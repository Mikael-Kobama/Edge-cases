function retornarPrimeiro<T>(lista: T[]): T {
  return lista[0];
}

const primeiroNome = retornarPrimeiro<string>(["Ana", "Bia"]);
const primeiroId = retornarPrimeiro<number>([10, 20]);

console.log(primeiroNome.toLowerCase());
console.log(primeiroId);
