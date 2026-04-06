const devs = [
  { id: 1, nome: "Mikael", techs: ["React", "AWS", "Node"] },
  { id: 2, nome: "Evelyn", techs: ["Java", "Spring"] },
];

const pesquisaId = (idProcurado) => {
  const devEncontrado = devs.find((dev) => dev.id === idProcurado);

  if (devEncontrado) {
    const listaTechs = [devEncontrado.techs];
    listaTechs.join(", ");
    return devEncontrado;
  } else {
    return "User não encontrado";
  }

  return devEncontrado;
};

console.log(pesquisaId(2));
