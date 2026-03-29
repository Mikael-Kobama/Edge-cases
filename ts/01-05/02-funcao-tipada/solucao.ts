function calcularArea(raio: number): number {
  const pi = Math.PI;
  return pi * (raio * raio);
}

const area = calcularArea(5);
console.log(`A área do círculo é: ${area.toFixed(2)}`);
