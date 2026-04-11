const carrinho = [
  { nome: "Mouse", preco: 50, qtd: 2 },
  { nome: "Teclado", preco: -10, qtd: 1 }, // Inválido
  { nome: "Monitor", preco: 1000, qtd: 0 }, // Inválido
  { nome: "Webcam", preco: 150, qtd: 1 },
];

const filtro = carrinho
  .filter((p) => p.preco > 0 && p.qtd > 0)
  .reduce((acumulador, itemAtual) => {
    const subtotal = itemAtual.preco * itemAtual.qtd;
    const resutado = acumulador + subtotal;
    return resutado;
  }, 0);

console.log(filtro);
