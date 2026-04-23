const parametros = {
  regiao: "sa-east-1",
  servico: "ec2",
  status: "active",
  tags: ["infra", "producao", "node js"],
  versao: null,
  busca: "",
  limite: 10,
};

const filtroParametro = Object.entries(parametros)
  .filter((p) => p[1] !== null && p[1] !== undefined && p[1] !== "")
  .map((p) => {
    if (Array.isArray(p[1])) {
      return p[1].map((valor) => p[0] + "=" + encodeURIComponent(valor));
    } else {
      return p[0] + "=" + encodeURIComponent(p[1]);
    }

    return p;
  })
  .flat()
  .sort()
  .reduce((acc, att) => {
    return acc + "&" + att;
  });
const resultado = "?" + filtroParametro;

console.log(resultado);
