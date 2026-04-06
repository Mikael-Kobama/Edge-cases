const carrinho = [
  { item: "Mouse", preco: 30 },
  { item: "Teclado", preco: 120 },
  { item: "Webcam", preco: 200 },
];

const valorTotal = carrinho
  .filter((array) => array.preco > 50)
  .map((array) => array.preco + 10)
  .reduce((acc, atual) => acc + atual, 0);

console.log(valorTotal);
