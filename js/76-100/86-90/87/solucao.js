const listaIds = [1, 2, 3, 4, 5, 6];

function fetchUser(id) {
  const tempo = Math.floor(Math.random() * 1001) + 500;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id % 2 !== 0) {
        resolve({ id, status: "processado" });
      } else {
        reject({ id, status: "erro" });
      }
    }, tempo);
  });
}

function processarLote(ids) {
  const promises = ids.map((id) => fetchUser(id));
  return Promise.allSettled(promises);
}

processarLote(listaIds).then((resultado) => {
  const sucessos = resultado
    .filter((p) => p.status === "fulfilled")
    .map((p) => p.value.id);
  const falhas = resultado
    .filter((p) => p.status === "rejected")
    .map((p) => p.reason.id);

  console.log({
    sucessos,
    falhas,
    totalProcessado: listaIds.length,
  });
});
