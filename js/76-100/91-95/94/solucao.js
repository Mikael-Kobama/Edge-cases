const fs = require("fs");
const dados = JSON.parse(fs.readFileSync("./dados.json", "utf-8"));

class IntegrityError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "Integrity Error";
  }
}

class TaxationError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "Taxation Error";
  }
}

class SupplyChain {
  constructor() {
    this.fila = [];
    this.quarentena = [];
    this.processados = [];
    this.timeline = [];
    this.idVistos = new Set();
    this.hooks = { onBefore: [], onAfter: [] };
    this.taxaCambio = 5;
    this.correcoesRealizadas = 0;
    this.matrizTaxas = new Map([
      ["BR-BR", 0.05], // exemplo: 5%
      ["BR-PT", 0.12], // exemplo: 12%
      ["US-BR", 0.15], // exemplo: 15%
      ["PT-PT", 0.08], // exemplo: 8%
    ]);
  }

  #verifyIntegrity(data) {
    const numerosId = data.id.replace(/\D/g, "");
    const pesoNumerico = Math.floor(parseFloat(data.weight));
    const numeroPeso = pesoNumerico.toString();

    const hashCalculo = numerosId + numeroPeso;

    try {
      if (hashCalculo !== data.hash) {
        throw new IntegrityError("Hash inválido no registro " + data.id);
      }
    } catch (error) {
      this.quarentena.push(data);
      this.timeline.push("Erro na integridade no ID " + data.id);
    }
  }

  #normalizeWeight(weight) {
    const pesoTxt = weight.toString().trim();
    const valorNumerico = parseFloat(pesoTxt.replace(/[^\d.]/g, ""));

    let valorConvertido = valorNumerico;

    if (pesoTxt.includes("g") && !pesoTxt.includes("kg")) {
      valorConvertido = valorNumerico / 1000;
    } else if (pesoTxt.includes("lb") || pesoTxt.includes("lbs")) {
      valorConvertido = valorNumerico * 0.45359237;
    } else if (pesoTxt.includes("ton") || pesoTxt.includes("t")) {
      valorConvertido = valorNumerico * 1000;
    } else if (pesoTxt.includes("oz")) {
      valorConvertido = valorNumerico * 0.02834952;
    }

    const valorString = valorConvertido.toString() + "kg";

    return valorString;
  }

  #applyTaxMatrix(data) {
    const ultimosDoisOrigem = data.origin.slice(-2);
    const ultimosDoiDestino = data.destination.slice(-2);

    const totalTrajeto = ultimosDoisOrigem + "-" + ultimosDoiDestino;

    let taxaFinal = this.matrizTaxas.get(totalTrajeto);

    if (taxaFinal === undefined) {
      taxaFinal = 0.1;
    }

    const resultado = data.value * taxaFinal;

    return {
      ...data,
      taxaAplicada: taxaFinal,
      valorFinal: data.value + resultado,
    };
  }

  #detectAnomalies(data) {
    let taxaCubagem = 0;
    const valorPesoInt = parseFloat(this.#normalizeWeight(data.weight));

    const valorVolumetrico = data.volume * 300;

    if (valorVolumetrico > valorPesoInt) {
      taxaCubagem += data.value * 0.2;
      this.timeline.push("Anomalia de cubagem detectada no ID " + data.id);
    } else {
      taxaCubagem = 0;
    }

    const valorFinal = data.value + taxaCubagem;

    return { ...data, Taxa: taxaCubagem, valorFinal };
  }

  #formatInternational(data) {
    const verificaImportacao = data.destination?.endsWith(", BR");
    const verificaExportacao = data.origin?.endsWith(", BR");
  }
}
