const inventario = [
  { nome: "Monitor", qtd: 10 },
  { nome: "Cabo HDMI", qtd: 3 },
  { nome: "Pendrive", qtd: 2 },
];

const criticos = inventario
  .filter((array) => array.qtd <= 5)
  .map(
    (array) =>
      `O produto ${array.nome} possui apenas ${array.qtd} unidades no estoque`,
  );

console.log(criticos);
