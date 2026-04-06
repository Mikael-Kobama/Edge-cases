const hoje = new Date();
const assinaturas = [
  { servico: "AWS", vencimento: new Date("2026-01-01") },
  { servico: "Spotify", vencimento: new Date("2026-12-31") },
];

const vencimento = assinaturas.filter((p) => p.vencimento < hoje);

console.log(vencimento);
