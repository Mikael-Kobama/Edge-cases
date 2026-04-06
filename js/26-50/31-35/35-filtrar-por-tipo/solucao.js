const mix = ["Mikael", 25, "SP", 1999];

const retornaNumero = (array) =>
  array.filter((tipo) => typeof tipo === "number");

console.log(retornaNumero(mix));
