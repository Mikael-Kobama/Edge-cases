const estoqueGeral = {
  nome: "Eletrônicos",
  produtos: 10,
  subcategorias: [
    {
      nome: "Celulares",
      produtos: 5,
      subcategorias: [
        { nome: "Android", produtos: 12, subcategorias: [] },
        { nome: "iOS", produtos: 8, subcategorias: [] },
      ],
    },
    {
      nome: "Computadores",
      produtos: 2,
      subcategorias: [
        { nome: "Laptops", produtos: 10, subcategorias: [] },
        { nome: "Desktops", produtos: 3, subcategorias: [] },
      ],
    },
  ],
};

function somarProdutos(categoria) {
  if (categoria.subcategorias.length === 0) {
    return categoria.produtos;
  } else {
    return categoria.subcategorias.reduce((acc, att) => {
      return acc + somarProdutos(att);
    }, categoria.produtos);
  }
}

console.log(somarProdutos(estoqueGeral));
