type DadosPessoais = { nome: string; idade: number };
type DadosConta = { email: string; senha: string };

type UsuarioCompleto = DadosPessoais & DadosConta;

const mikael: UsuarioCompleto = {
  nome: "Mikael",
  idade: 25,
  email: "k@dev.com",
  senha: "123",
};
