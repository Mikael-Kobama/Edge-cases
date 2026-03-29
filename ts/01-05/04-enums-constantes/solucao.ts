enum Prioridade {
  Baixa = "BAIXA",
  Media = "MEDIA",
  Alta = "ALTA",
}

function verificarPrioridade(nivel: Prioridade): void {
  if (nivel === Prioridade.Alta) {
    console.log("ALERTA: Ação urgente necessária!");
  } else {
    console.log(`Prioridade definida como: ${nivel}`);
  }
}

verificarPrioridade(Prioridade.Alta);
