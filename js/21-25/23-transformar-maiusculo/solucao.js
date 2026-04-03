const time = [
  { nome: "Mikael", id: 1 },
  { nome: "Junior", id: 2 },
];

const busca = time.find((pessoa) => pessoa.nome === "Mikael");

console.log(busca);
