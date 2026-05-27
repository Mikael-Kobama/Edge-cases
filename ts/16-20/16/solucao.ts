const listaA: number[] = [1, 2, 3];
const listaB: number[] = [4, 5, 6];

function someArray(a: number[], b: number[]): number[] {
  return [...a, ...b];
}

console.log(someArray(listaA, listaB));
