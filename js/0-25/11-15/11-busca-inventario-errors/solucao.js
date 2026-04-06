const produtos = [
  { id: 1, nome: "Teclado", preco: 150 },
  { id: 2, nome: "Mouse", preco: 80 },
];

function buscarProduto(nome) {
  try {
    const resultado = produtos.find(
      (p) => p.nome.toLowerCase() === nome.toLowerCase(),
    );

    if (!resultado) {
      throw new Error(`Produto "${nome}" não encontrado no estoque.`);
    }

    return resultado;
  } catch (erro) {
    return { erro: erro.message };
  }
}

console.log(buscarProduto("Monitor"));
