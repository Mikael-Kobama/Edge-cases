const estoque = [
  { prod: "SSD", qtd: 5 },
  { prod: "RAM", qtd: 0 },
  { prod: "CPU", qtd: 2 },
];

const estoqueVazio = estoque.find((p) => p.qtd === 0);

console.log(estoqueVazio);
