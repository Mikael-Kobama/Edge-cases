const produtos = [
  { nome: "Teclado", preco: 150 },
  { nome: "Mouse", preco: 85.9 },
];

const inventario = produtos.map(
  (array) =>
    `O produto ${array.nome} possui o preço: ${array.preco.toFixed(2)}`,
);

console.log(inventario);
