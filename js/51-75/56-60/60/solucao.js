const funcionarios = [
  { nome: "Mikael", setor: "TI", salario: 5000 },
  { nome: "Evelyn", setor: "TI", salario: 6000 },
  { nome: "Lucas", setor: "RH", salario: 3000 },
  { nome: "Ana", setor: "TI", salario: 4500 },
];

const folhaSalarial = funcionarios
  .filter((p) => p.setor === "TI")
  .map((f) => f.salario * 1.1)
  .reduce((acumulador, itemAtual) => {
    const total = acumulador + itemAtual;

    return total;
  }, 0);

console.log(folhaSalarial.toFixed(2));
