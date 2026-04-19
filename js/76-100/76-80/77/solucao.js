const logs = [
  { path: "/api/v1/user", latency: "250ms" },
  { path: "/health", latency: "10ms" }, // Deve ser ignorado
  { path: "/api/v1/order", latency: "450ms" },
  { path: "/api/v1/login", latency: "120ms" },
];

const barrado = ["/health"];
const filtroLogs = logs
  .filter((p) => !barrado.some((r) => r === p.path))
  .map((p) => {
    const intMs = Number(p.latency.replace(/\D/g, ""));
    return {
      path: p.path,
      ms: intMs,
    };
  });

const soma = filtroLogs.reduce((acc, item) => {
  acc += item.ms;
  return acc;
}, 0);

const resultado = {
  media: soma / filtroLogs.length,
  status: soma / filtroLogs.length > 300 ? "Alerta" : "Normal",
};

console.log(resultado);
