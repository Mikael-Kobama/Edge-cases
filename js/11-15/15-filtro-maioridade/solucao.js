const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "Bia", idade: 15 },
];

const adultos = pessoas
  .filter(({ idade }) => idade >= 18)
  .map(({ map }) => nome);

console.log(adultos);
