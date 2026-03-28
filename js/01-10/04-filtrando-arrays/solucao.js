const idades = [12, 18, 22, 10, 30, 15, 65, 17];

const maioresDeIdade = idades.filter((idade) => idade >= 18);

console.log("Idades filtradas:", maioresDeIdade);
console.log("Quantidade de adultos:", maioresDeIdade.length);
