const notas = [7, 8, 9, 10];
const saldos = [100, -50, 200];

const todosPositivos = (arry) => arry.every((num) => num > 0);

console.log(todosPositivos(notas));
console.log(todosPositivos(saldos));
