const n1: number = 10;
const n2: number = 5;
const n3: number = 2;
const n4: number = 2;
const n5: number = 1;

function multiplicador(
  n1: number,
  n2: number,
  n3: number,
  n4: number,
  n5: number,
): number {
  const soma1: number = n1 + n2;
  const soma2: number = n2 + n4 + n5;

  return soma1 * soma2;
}

console.log(multiplicador(n1, n2, n3, n4, n5));
