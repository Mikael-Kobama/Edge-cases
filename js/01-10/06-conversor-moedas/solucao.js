const taxas = {
  USD: 0.2,
  EUR: 0.18,
  GBP: 0.15,
};

function converterMoeda(valorBRL, moedaDestino) {
  const taxa = taxas[moedaDestino.toUpperCase()];

  if (!taxa) {
    return "Moeda não suportada";
  }

  const convertido = valorBRL * taxa;
  return convertido.toLocaleString("pt-BR", {
    style: "currency",
    currency: moedaDestino,
  });
}

console.log(converterMoeda(100, "USD"));
console.log(converterMoeda(250, "EUR"));
