const calcularDiferencaDias = (dataInicial, dataFinal) => {
  const msPorDia = 1000 * 60 * 60 * 24;
  const data1 = new Date(dataInicial);
  const data2 = new Date(dataFinal);

  const diferencaMs = Math.abs(data2 - data1);

  return Math.ceil(diferencaMs / msPorDia);
};

console.log(
  `Dias de diferença: ${calcularDiferencaDias("2026-03-01", "2026-03-29")}`,
); // 28
