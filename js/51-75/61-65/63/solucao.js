const equipe = [
  { nome: "Mikael", setor: "TI", salario: 5000 },
  { nome: "Ana", setor: "RH", salario: 4000 },
  { nome: "Lucas", setor: "TI", salario: 7000 },
  { nome: "Evelyn", setor: "RH", salario: 4500 },
];

const separador = equipe.sort((a, b) => {
  const itemA = a.setor || a.salario;
  const itemB = b.setor || b.salario;

  return itemA.localeCompare(itemB);
});

console.log(separador);
