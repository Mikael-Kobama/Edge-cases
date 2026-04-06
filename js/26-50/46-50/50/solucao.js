const faturasDolar = [80, 150, 200, 50, 300];

const faturamento = faturasDolar
  .filter((p) => p >= 100)
  .map((p) => p * 5)
  .reduce((p, q) => p + q, 0);

console.log(faturamento);
