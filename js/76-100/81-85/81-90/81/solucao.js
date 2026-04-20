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
  .filter((p) => p[1] !== null)
  .map((p) => {
    if (Array.isArray(p[1])) return p;
  });

console.log(filtroParametro);
