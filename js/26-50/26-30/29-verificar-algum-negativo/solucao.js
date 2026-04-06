const transacoes = [10.5, 20.0, -5.0, 50.0];

const regularidade = (arry) => arry.some((num) => num < 0);

console.log(regularidade(transacoes));
