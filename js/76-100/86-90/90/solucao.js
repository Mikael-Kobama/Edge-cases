const logEventos = [
  {
    id: "srv-01",
    ip: "192.168.0.1",
    cpu: 45,
    memoria: 30,
    msg: "System OK",
    timestamp: 1714182000,
  },
  {
    id: "srv-02",
    ip: "192.168.0.2",
    cpu: 88,
    memoria: 75,
    msg: "High load detected",
    timestamp: 1714182005,
  },
  {
    id: "srv-03",
    ip: "192.168.0.3",
    cpu: 95,
    memoria: 85,
    msg: "Critical threshold",
    timestamp: 1714182010,
  },
  {
    id: "srv-01",
    ip: "192.168.0.1",
    cpu: 40,
    memoria: 28,
    msg: "Timeout on request",
    timestamp: 1714182015,
  },
  {
    id: "srv-04",
    ip: "192.168.0.4",
    cpu: 12,
    memoria: 10,
    msg: "Idle",
    timestamp: 1714182020,
  },
  {
    id: "srv-01",
    ip: "192.168.0.1",
    cpu: 42,
    memoria: 30,
    msg: "Timeout on request",
    timestamp: 1714182025,
  },
  {
    id: "srv-01",
    ip: "192.168.0.1",
    cpu: 44,
    memoria: 31,
    msg: "Timeout on request",
    timestamp: 1714182030,
  },
  {
    id: "srv-01",
    ip: "192.168.0.1",
    cpu: 41,
    memoria: 29,
    msg: "Timeout on request",
    timestamp: 1714182035,
  },
  {
    id: "srv-01",
    ip: "192.168.0.1",
    cpu: 40,
    memoria: 30,
    msg: "Timeout on request",
    timestamp: 1714182040,
  },
  {
    id: "srv-01",
    ip: "192.168.0.1",
    cpu: 39,
    memoria: 30,
    msg: "Timeout on request",
    timestamp: 1714182045,
  }, // Deve ser suprimido
  {
    id: "srv-05",
    ip: "10.0.0.50",
    cpu: 92,
    memoria: 82,
    msg: "Database connection failed",
    timestamp: 1714182050,
  },
  {
    id: "srv-05",
    ip: "10.0.0.50",
    cpu: 91,
    memoria: 81,
    msg: "Database connection failed",
    timestamp: 1714182055,
  },
  {
    id: "srv-02",
    ip: "192.168.0.2",
    cpu: 50,
    memoria: 45,
    msg: "System OK",
    timestamp: 1714182060,
  },
  {
    id: "srv-06",
    ip: "10.0.0.60",
    cpu: 15,
    memoria: 20,
    msg: "User login success",
    timestamp: 1714182065,
  },
  {
    id: "srv-07",
    ip: "10.0.0.70",
    cpu: 98,
    memoria: 90,
    msg: "Kernel panic",
    timestamp: 1714182070,
  },
  {
    id: "srv-03",
    ip: "192.168.0.3",
    cpu: 96,
    memoria: 88,
    msg: "Heat warning",
    timestamp: 1714182075,
  },
  {
    id: "srv-08",
    ip: "10.0.0.80",
    cpu: 30,
    memoria: 25,
    msg: "Sync complete",
    timestamp: 1714182080,
  },
  {
    id: "srv-09",
    ip: "10.0.0.90",
    cpu: 5,
    memoria: 5,
    msg: "Cold standby",
    timestamp: 1714182085,
  },
  {
    id: "srv-10",
    ip: "10.0.0.100",
    cpu: 60,
    memoria: 55,
    msg: "Backup started",
    timestamp: 1714182090,
  },
  {
    id: "srv-05",
    ip: "10.0.0.50",
    cpu: 89,
    memoria: 78,
    msg: "Database connection failed",
    timestamp: 1714182095,
  },
  {
    id: "srv-05",
    ip: "10.0.0.50",
    cpu: 88,
    memoria: 77,
    msg: "Database connection failed",
    timestamp: 1714182100,
  },
  {
    id: "srv-05",
    ip: "10.0.0.50",
    cpu: 87,
    memoria: 76,
    msg: "Database connection failed",
    timestamp: 1714182105,
  }, // Deve ser suprimido
  {
    id: "srv-11",
    ip: "172.16.0.11",
    cpu: 22,
    memoria: 18,
    msg: "API ping",
    timestamp: 1714182110,
  },
  {
    id: "srv-12",
    ip: "172.16.0.12",
    cpu: 99,
    memoria: 95,
    msg: "Out of memory",
    timestamp: 1714182115,
  },
  {
    id: "srv-13",
    ip: "172.16.0.13",
    cpu: 45,
    memoria: 40,
    msg: "System OK",
    timestamp: 1714182120,
  },
  {
    id: "srv-14",
    ip: "172.16.0.14",
    cpu: 55,
    memoria: 50,
    msg: "Disk cleanup",
    timestamp: 1714182125,
  },
  {
    id: "srv-15",
    ip: "172.16.0.15",
    cpu: 10,
    memoria: 12,
    msg: "System OK",
    timestamp: 1714182130,
  },
  {
    id: "srv-12",
    ip: "172.16.0.12",
    cpu: 98,
    memoria: 96,
    msg: "Out of memory",
    timestamp: 1714182135,
  },
  {
    id: "srv-07",
    ip: "10.0.0.70",
    cpu: 97,
    memoria: 92,
    msg: "Kernel panic",
    timestamp: 1714182140,
  },
  {
    id: "srv-16",
    ip: "172.16.0.16",
    cpu: 33,
    memoria: 30,
    msg: "Update pending",
    timestamp: 1714182145,
  },
  {
    id: "srv-17",
    ip: "172.16.0.17",
    cpu: 44,
    memoria: 41,
    msg: "System OK",
    timestamp: 1714182150,
  },
  {
    id: "srv-18",
    ip: "172.16.0.18",
    cpu: 91,
    memoria: 85,
    msg: "High traffic",
    timestamp: 1714182155,
  },
  {
    id: "srv-19",
    ip: "172.16.0.19",
    cpu: 25,
    memoria: 22,
    msg: "System OK",
    timestamp: 1714182160,
  },
  {
    id: "srv-20",
    ip: "172.16.0.20",
    cpu: 95,
    memoria: 89,
    msg: "Timeout on db",
    timestamp: 1714182165,
  },
  {
    id: "srv-20",
    ip: "172.16.0.20",
    cpu: 94,
    memoria: 88,
    msg: "Timeout on db",
    timestamp: 1714182170,
  },
  {
    id: "srv-20",
    ip: "172.16.0.20",
    cpu: 93,
    memoria: 87,
    msg: "Timeout on db",
    timestamp: 1714182175,
  },
  {
    id: "srv-20",
    ip: "172.16.0.20",
    cpu: 92,
    memoria: 86,
    msg: "Timeout on db",
    timestamp: 1714182180,
  },
  {
    id: "srv-20",
    ip: "172.16.0.20",
    cpu: 91,
    memoria: 85,
    msg: "Timeout on db",
    timestamp: 1714182185,
  },
  {
    id: "srv-20",
    ip: "172.16.0.20",
    cpu: 90,
    memoria: 84,
    msg: "Timeout on db",
    timestamp: 1714182190,
  }, // Suprimido
  {
    id: "srv-21",
    ip: "172.16.0.21",
    cpu: 12,
    memoria: 10,
    msg: "System OK",
    timestamp: 1714182195,
  },
  {
    id: "srv-22",
    ip: "172.16.0.22",
    cpu: 48,
    memoria: 42,
    msg: "System OK",
    timestamp: 1714182200,
  },
  {
    id: "srv-23",
    ip: "172.16.0.23",
    cpu: 65,
    memoria: 60,
    msg: "Heavy query",
    timestamp: 1714182205,
  },
  {
    id: "srv-24",
    ip: "172.16.0.24",
    cpu: 96,
    memoria: 92,
    msg: "CPU Spike",
    timestamp: 1714182210,
  },
  {
    id: "srv-25",
    ip: "172.16.0.25",
    cpu: 30,
    memoria: 28,
    msg: "System OK",
    timestamp: 1714182215,
  },
  {
    id: "srv-26",
    ip: "172.16.0.26",
    cpu: 8,
    memoria: 8,
    msg: "System OK",
    timestamp: 1714182220,
  },
  {
    id: "srv-27",
    ip: "172.16.0.27",
    cpu: 92,
    memoria: 81,
    msg: "Timeout on auth",
    timestamp: 1714182225,
  },
  {
    id: "srv-28",
    ip: "172.16.0.28",
    cpu: 50,
    memoria: 48,
    msg: "System OK",
    timestamp: 1714182230,
  },
  {
    id: "srv-29",
    ip: "172.16.0.29",
    cpu: 15,
    memoria: 14,
    msg: "System OK",
    timestamp: 1714182235,
  },
  {
    id: "srv-30",
    ip: "172.16.0.30",
    cpu: 99,
    memoria: 99,
    msg: "Critical failure",
    timestamp: 1714182240,
  },
  {
    id: "srv-01",
    ip: "192.168.0.1",
    cpu: 35,
    memoria: 25,
    msg: "System OK",
    timestamp: 1714182245,
  },
];

class ClusterMonitor {
  constructor() {
    this.servidoresCriticos = new Set();
    this.cacheAlertas = new Map();
    this.limiteSuppressed = 5;
    this.alertasSuprimidos = 0;
  }

  sanitizar(log) {
    return {
      ...log,
      timestamp: new Date(log.timestamp * 1000).toLocaleString("pt-BR"),
    };
  }

  analisarCarga(log) {
    if (log.cpu > 90 && log.memoria > 80) {
      this.servidoresCriticos.add(log.id);
      return { ...log, status: "CRITICAL" };
    } else if (log.msg === "Timeout") {
      return { ...log, status: "ERROR" };
    } else {
      return log;
    }
  }
  verificarErros(log) {
    if (log.msg.includes("Timeout")) {
      const contadorAtual = this.cacheAlertas.get(log.id) || 0;
      const novoContador = contadorAtual + 1;
      this.cacheAlertas.set(log.id, novoContador);
      if (novoContador >= 5) {
        this.alertasSuprimidos += 1;
        return { ...log, status: "SUPPRESSED" };
      } else {
        return { ...log, status: "ERROR" };
      }
    } else {
      return log;
    }
  }

  async processarLog(log) {
    const etapas = [this.sanitizar, this.analisarCarga, this.verificarErros];
    return etapas.reduce(async (logAcumulado, etapa) => {
      const dadoProcessado = await logAcumulado;
      return etapa.call(this, dadoProcessado);
    }, Promise.resolve(log));
  }

  async processarLote(log) {
    const logsProcessados = log.map((log) => this.processarLog(log));
    const resultado = await Promise.allSettled(logsProcessados);
    return resultado;
  }

  gerarRelatorio(resultados) {
    const logs = resultados.map((p) => p.value);

    const logsOnline = logs.filter(
      (log) =>
        log.status !== "CRITICAL" &&
        log.status !== "ERROR" &&
        log.status !== "SUPPRESSED",
    );
    const logsCriticos = logs.filter((log) => log.status === "CRITICAL");
    const logsErro = logs.filter((log) => log.status === "ERROR");
    const logsSuprimidos = logs.filter((log) => log.status === "SUPPRESSED");

    const uptimeGeral = (logsOnline.length / logs.length) * 100;

    const mapaDeErros = logsErro.reduce((logAcc, logAtt) => {
      logAcc[logAtt.msg] = (logAcc[logAtt.msg] || 0) + 1;
      return logAcc;
    }, {});

    const servidoresCriticos = [...this.servidoresCriticos].map((id) => {
      const resultadoLog = logs.find((log) => log.id === id);
      return { id, ip: resultadoLog.ip };
    });

    const economiaProcessamento = this.alertasSuprimidos;

    return {
      uptimeGeral,
      mapaDeErros,
      servidoresCriticos,
      economiaProcessamento,
      logsCriticos,
      logsErro,
      logsSuprimidos,
    };
  }
}

const cluster = new ClusterMonitor();
cluster
  .processarLote(logEventos)
  .then((resultado) => cluster.gerarRelatorio(resultado))
  .then(console.log);
