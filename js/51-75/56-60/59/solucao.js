const tarefas = [
  { titulo: "Estudar AWS", feito: true },
  { titulo: "Fazer Cafe", feito: false },
  { titulo: "Commitar Codigo", feito: true },
];

const tarefasConcluidas = tarefas.reduce((acumulador, itemAtual, indice) => {
  const tarefaFeita = itemAtual.feito;

  if (tarefaFeita === true) {
    acumulador.push(itemAtual.titulo);
  }

  return acumulador;
}, []);

console.log(tarefasConcluidas);
