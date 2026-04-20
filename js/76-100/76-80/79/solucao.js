const versoes = ["v1.2.0", "v1.10.2", "v1.0.5", "v2.0.0", "v1.2.10"];

const ordemAtt = versoes
  .map((p) => p.replace("v", ""))
  .sort((a, b) => {
    const valorA = a.split(".");
    const valorB = b.split(".");

    const parteA = parseInt(valorA[0]);
    const parteB = parseInt(valorB[0]);
    const majorDiff = parteA - parteB;
    if (majorDiff !== 0) return majorDiff;
    const minorA = parseInt(valorA[1]);
    const minorB = parseInt(valorB[1]);
    const minorDiff = minorA - minorB;
    if (minorDiff !== 0) return minorDiff;
    const patchA = parseInt(valorA[2]);
    const patchB = parseInt(valorB[2]);
    return patchA - patchB;
  });
console.log(ordemAtt);
