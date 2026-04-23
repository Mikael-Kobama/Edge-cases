const logBruto =
  "Erro: Falha no acesso ao S3. O bucket s3-prod-logs negou acesso (403). Verifique as permissões de acesso ao S3 e o acesso ao IAM.";

const stopWords = ["o", "ao", "no", "as", "de", "e"];

function reformaString(log) {
  const sanitizaLog = log
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z\s]/g, "")
    .split(" ");

  const filtraPalavras = sanitizaLog.filter((log) => !stopWords.includes(log));

  const contagemFrequencia = filtraPalavras.reduce((acc, att) => {
    if (acc[att]) {
      acc[att] += 1;
    } else {
      acc[att] = 1;
    }
    return acc;
  }, {});

  const entradas = Object.entries(contagemFrequencia);

  const vencedor = entradas.reduce((maior, atual) => {
    const [palavraAtual, freqAtual] = atual;
    const [palavraMaior, freqMaior] = maior;
    if (
      freqAtual > freqMaior ||
      (freqAtual === freqMaior && palavraAtual.length > palavraMaior.length)
    ) {
      return atual;
    }
    return maior;
  });

  return {
    termoPrincipal: vencedor[0],
    frequencia: vencedor[1],
    palavrasDescartadas: stopWords,
  };
}

console.log(reformaString(logBruto));
