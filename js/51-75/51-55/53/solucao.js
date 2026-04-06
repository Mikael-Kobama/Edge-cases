const precos = [10.5, 100, 2500.45];

const formatador = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const converterPrecos = precos.map((p) => formatador.format(p));

console.log(converterPrecos);
