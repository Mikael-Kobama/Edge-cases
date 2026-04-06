const usuarios = [
  { nome: "Mikael", endereco: { cidade: "São Paulo", uf: "SP" } },
  { nome: "Aline", endereco: { cidade: "Curitiba", uf: "PR" } },
];

const cidadeUsuario = usuarios.map((p) => p.endereco.cidade);

console.log(cidadeUsuario);
