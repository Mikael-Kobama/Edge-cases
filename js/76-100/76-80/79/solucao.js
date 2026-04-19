const versoes = ["v1.2.0", "v1.10.2", "v1.0.5", "v2.0.0", "v1.2.10"];

const ordemAtt = versoes.reduce((acc, att) => {
  const apenasNumeros = versoes.map((p) => {
    p.replace(/\D/g, "");
  });
  const listaOrdem = [];

  att;
}, []);

console.log(ordemAtt);
