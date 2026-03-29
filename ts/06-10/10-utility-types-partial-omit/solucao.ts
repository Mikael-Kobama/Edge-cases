interface Pessoa {
  id: number;
  nome: string;
  cpf: string;
}

function atualizarPessoas(dados: Partial<Pessoa>) {
  console.log(dados.nome);
}

type CriarPessoaDTO = {
  nome: "Pedro";
  cpf: "123.456.789-0";
};
