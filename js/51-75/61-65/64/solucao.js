const logs = [
  "2026-04-06 INFO: User logged in",
  "2026-04-06 ERROR 500: Database connection failed",
  "2026-04-06 WARN: Slow response",
  "2026-04-06 ERROR 404: Asset not found",
];

const separaLogs = logs
  .filter((log) => {
    const padraoErro = /500|404/;

    const resultado = padraoErro.test(log);
    return resultado;
  })
  .map((log) => {
    const separador = log.split(":");
    return separador[1];
  });

console.log(separaLogs);
