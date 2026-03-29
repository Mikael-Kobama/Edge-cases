const ePalindromo = (texto) => {
  const original = texto.toLowerCase().replace(/\s/g, "");

  const invertido = original.split("").reverse().join("");

  return original === invertido;
};
