const fs = require("fs");
const dados = JSON.parse(fs.readFileSync("./dados.json", "utf-8"));

class MessageBroker {
  constructor(maxConcurrency) {
    this.fila = [];
    this.processando = 0;
    this.concluidos = [];
    this.falhas = [];
    this.deadLetterQueue = [];
    this.contadorDeRetries = 0;
    this.maxConcurrency = maxConcurrency;
  }

  #sanitizarPayload(tarefa) {
    const regex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    if (!regex.test(tarefa.targetIP)) {
      return null;
    } else {
      return { ...tarefa, payload: tarefa.payload.replace(/[<>{};']/g, "") };
    }
  }

  ingerirTarefas(tarefa) {
    for (const item of tarefa) {
      const payloadLimpo = this.#sanitizarPayload(item);

      if (payloadLimpo !== null) {
        this.fila.push({ ...payloadLimpo, attempts: 0 });
      }
    }
  }

  priorizacao(tarefa) {
    const pesos = { CRITICAL: 3, URGENT: 2, NORMAL: 1 };

    this.fila.sort(tarefa => )
  }
}
