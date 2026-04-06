const usuarios = [
  { nome: "Mikael", ativo: true },
  { nome: "Fulano", ativo: false },
  { nome: "Dev Cloud", ativo: true },
];

const filtro = usuarios.filter((indice) => indice.ativo);

console.log(filtro);
