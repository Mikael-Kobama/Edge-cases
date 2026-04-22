const cartao1 = "1234 5678 9876 5432"; // 16 dígitos
const cartao2 = "4532-1100-2233-8"; // 13 dígitos
const cartao3 = "123 456"; // Inválido

function validarCartao(cartao) {
  const limpaDados = cartao.replace(/\D/g, "");
  if (limpaDados.length < 13 || limpaDados.length > 16)
    return "Número Inválido";

  const alvo = limpaDados.length - 4;
  const dadosAtt = limpaDados.slice(alvo).padStart(limpaDados.length, "*");
  const sobra = dadosAtt.length % 4;
  const parte1 = dadosAtt.slice(0, sobra);
  const parte2 = dadosAtt.slice(sobra).match(/.{4}/g).join(" ");
  const resultado = (parte1 ? parte1 + " " : "") + parte2;

  return resultado;
}

console.log(validarCartao(cartao2));
