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

  #priorizacao() {
    const pesos = { CRITICAL: 3, URGENT: 2, NORMAL: 1 };

    this.fila.sort((a, b) => pesos[b.priority] - pesos[a.priority]);
  }

  async processarTarefa(tarefaFeita) {
    const delay = Math.floor(Math.random() * 151) + 50;
    const copia = JSON.parse(JSON.stringify(tarefaFeita));
    await new Promise((resolve) => setTimeout(resolve, delay));

    if (Math.random() > 0.7) {
      copia.attempts += 1;
      this.contadorDeRetries += 1;
      if (copia.attempts >= 3) {
        this.deadLetterQueue.push(copia);
      } else {
        const escalada = {
          NORMAL: "URGENT",
          URGENT: "CRITICAL",
          CRITICAL: "CRITICAL",
        };
        copia.priority = escalada[copia.priority];
        this.fila.push(copia);
      }
    } else {
      this.concluidos.push(tarefaFeita);
    }
  }

  async worker() {
    if (this.fila.length === 0 || this.processando >= this.maxConcurrency) {
      return;
    }

    this.#priorizacao();
    const tarefaFeita = this.fila.shift();
    this.processando += 1;

    try {
      await this.processarTarefa(tarefaFeita);
    } catch (error) {
      console.log(error);
    } finally {
      this.processando -= 1;
      await this.worker();
    }
  }

  async iniciar() {
    const tempoInicial = Date.now();
    const totalWorkers = Array.from({ length: this.maxConcurrency }, () =>
      this.worker(),
    );
    await Promise.all(totalWorkers);
    return this.gerarRelatorio(tempoInicial);
  }

  gerarRelatorio(tempoInicial) {
    const uptimeSimulado = (Date.now() - tempoInicial) / 1000;
    const throughput = this.concluidos.length / uptimeSimulado;

    const retryRate =
      this.contadorDeRetries /
      (this.concluidos.length + this.deadLetterQueue.length);

    const incidentReport = this.deadLetterQueue.map((user) => {
      return {
        id: user.id,
        priority: user.priority,
        motivo: "Esgotou 3 tentativas",
      };
    });
    return {
      uptimeSimulado,
      throughput,
      retryRate,
      incidentReport,
    };
  }
}

const msgBroker = new MessageBroker(3);
msgBroker.ingerirTarefas(dados);
msgBroker.iniciar().then(console.log);
