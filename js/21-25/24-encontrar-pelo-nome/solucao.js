const tecnologias = ["React", "Vue", "Angular"];

const removerUltimo = (lista) => {
  lista.pop();
  return lista;
};

console.log(removerUltimo(tecnologias));
