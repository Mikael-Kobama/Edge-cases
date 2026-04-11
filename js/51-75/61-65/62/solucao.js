const projetos = [
  { id: 1, techs: ["React", "Node"] },
  { id: 2, techs: ["AWS", "React"] },
  { id: 3, techs: ["Java", "Spring", "AWS"] },
];

const listaProjetos = [...new Set(projetos.flatMap((f) => f.techs))];

console.log(listaProjetos);
