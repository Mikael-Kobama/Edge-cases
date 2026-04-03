const numeros = [10, 20, 30, 40];

const numerosSomados = numeros.reduce(
  (acumulador, atual) => acumulador + atual,
  0,
);
