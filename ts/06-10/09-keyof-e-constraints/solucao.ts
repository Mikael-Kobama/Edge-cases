interface Produto {
  nome: string;
  preco: number;
}

function obterValor(item: Produto, chave: keyof Produto) {
  return item[chave];
}

const p: Produto = { nome: "Mouse", preco: 50 };

console.log(obterValor(p, "nome"));
