const a: number = 5;
const b: number = 12;
const c: number = 8;
const d: number = 20;
const e: number = 7;

const arrayDeCinco: number[] = [a, b, c, d, e];

const totalArray: boolean[] = arrayDeCinco.map((p) => p > 10);

console.log(totalArray);
