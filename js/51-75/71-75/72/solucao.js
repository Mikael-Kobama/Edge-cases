const vendedores = [
  { nome: "Mikael", vendas: [500, 1200, 300, 800] }, // 4 vendas
  { nome: "Aline", vendas: [900, 100] }, // 2 vendas
];

const comissao = vendedores.map((p) => {
  let taxaComissao = p.vendas.map((q) => {
    let vendasTotais = 0;
    let taxa = 0;
    if (q <= 1000) {
      taxa = q * 0.05;
      vendasTotais = q + taxa;
    } else if (q > 1000) {
      taxa = q * 0.1;
      vendasTotais = q + taxa;
    }
    return taxa;
  });

  const totalComissao = taxaComissao.reduce((acc, atual) => {
    return (acc = acc + atual);
  }, 0);

  const bonus = p.vendas.length > 3 ? totalComissao + 50 : totalComissao + 0;

  const resultado = { Nome: p.nome, VendasTotais: bonus };
  return resultado;
});

console.log(comissao);
