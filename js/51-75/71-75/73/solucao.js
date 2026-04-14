const depositos = [
  {
    filial: "SP",
    produtos: [
      { nome: "Cabo", qtd: 5 },
      { nome: "Mouse", qtd: 20 },
    ],
  },
  {
    filial: "RJ",
    produtos: [
      { nome: "Cabo", qtd: 3 },
      { nome: "Teclado", qtd: 2 },
    ],
  },
];

const novaLista = depositos
  .flatMap((p) => p.produtos)
  .filter((p) => p.qtd < 10)
  .reduce((acc, atual) => {
    const jaExiste = acc.find((item) => item.nome === atual.nome);

    if (jaExiste) {
      jaExiste.qtd += atual.qtd;
    } else {
      acc.push({ nome: atual.nome, qtd: atual.qtd });
    }

    return acc;
  }, []);

console.log(novaLista);
