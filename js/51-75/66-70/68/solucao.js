const vendas = [
  { data: "2025-12-01", valor: 100, cat: "TI" },
  { data: "2026-01-15", valor: 250, cat: "TI" },
  { data: "2026-02-10", valor: 500, cat: "Home Office" },
  { data: "2026-03-01", valor: 50, cat: "TI" },
];

const anoAtual = new Date().getFullYear();

const filtro = vendas
  .filter((p) => new Date(p.data).getFullYear() === anoAtual)
  .reduce((acumulador, item) => {
    acumulador[item.cat] = acumulador[item.cat] + item.valor || item.valor;
    return acumulador;
  }, {});

console.log(filtro);
