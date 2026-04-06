const validarSenha = (senha) => {
  const contadorQtd = senha.length >= 8;
  const contadorNum = /[0-9]/.test(senha);
  resultado = "";

  if (contadorQtd && contadorNum) {
    resultado = "Senha boa";
  } else {
    resultado = "Senha ruim";
  }

  return resultado;
};

console.log(validarSenha("Dhuyasa3sasaue"));
