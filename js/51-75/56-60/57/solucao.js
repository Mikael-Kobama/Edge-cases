const produtos = [
  { nome: "Teclado", preco: 150 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 900 },
  { nome: "Cabo", preco: 120 },
];

const filtroPreco = produtos.filter((p) => p.preco > 100);
const filtroOrdenado = [...filtroPreco].sort((a, b) => a.preco - b.preco);

console.log(filtroOrdenado);
