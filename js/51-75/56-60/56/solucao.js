const nomes = ["mikael", "aline", "junior"];

const InicialMaiuscula = nomes.map((nome, index) => {
  const id = index + 1;
  const nomeUser = nome.charAt(0).toUpperCase() + nome.slice(1);

  const userFinal = { id, nomeUser };
  return userFinal;
});

console.log(InicialMaiuscula);
