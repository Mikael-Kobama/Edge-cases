const usuarios = [
  { id: 1, nome: "Mikael" },
  { id: 2, nome: "Dev" },
];

const buscarId = (lista, id) => lista.find((u) => u.id === id);

console.log(buscarId(usuarios, 1));
