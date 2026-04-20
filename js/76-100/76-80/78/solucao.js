const tarefas = [
  { titulo: "Corrigir Login", tags: ["bug", "ui"] },
  { titulo: "Erro S3", tags: ["bug", "aws"] },
  { titulo: "Login Social", tags: ["feat"] },
];

const indiceRemissivo = tarefas.reduce((acc, att) => {
  att.tags.forEach((tag) => {
    acc[tag] ? acc[tag].push(att.titulo) : (acc[tag] = [att.titulo]);
  });
  return acc;
}, {});

console.log(indiceRemissivo);

const final = {
  bug: ["Corrigir Login", "Erro S3"],
  ui: ["Corrigir Login"],
  aws: ["Erro S3"],
  feat: ["Login Social"],
};
