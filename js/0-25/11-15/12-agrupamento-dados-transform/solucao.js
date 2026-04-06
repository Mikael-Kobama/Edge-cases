const colaboradores = [
  { nome: "Ana", setor: "TI" },
  { nome: "Bruno", setor: "RH" },
  { nome: "Carla", setor: "TI" },
];

const porSetor = colaboradores.reduce((agrupador, pessoa) => {
  if (!agrupador[pessoa.setor]) {
    agrupador[pessoa.setor] = [];
  }

  agrupador[pessoa.setor].push(pessoa.nome);

  return agrupador;
}, {});

console.log(porSetor);
