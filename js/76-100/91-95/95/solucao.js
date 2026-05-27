const fs = require("fs").promises;
const path = require("path");

class DatabaseRepository {
  constructor() {
    this.filePath = path.resolve(__dirname, "dados.json");
  }

  async findAll() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));

      const data = await fs.readFile(this.filePath, "utf-8");

      return JSON.parse(data);
    } catch (error) {
      throw new Error(`Erro ao conectar ao Banco de Dados: ${error.message}`);
    }
  }
}

class CustomException extends Error {
  constructor(message, code) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.timestamp = new Date().toISOString();
  }
}

class DatabaseConnectionException extends CustomException {
  constructor(message) {
    super(message, "DB_CONN_ERR");
  }
}

class EncryptionValidationException extends CustomException {
  constructor(message) {
    super(message, "ENCRYPT_VALID_ERR");
  }
}

class PayloadSecurityException extends CustomException {
  constructor(message) {
    super(message, "PAYLOAD_SEC_ERR");
  }
}

class FinancialLiquidityException extends CustomException {
  constructor(message) {
    super(message, "FIN_LIQUIDITY_ERR");
  }
}

class FraudDetectionException extends CustomException {
  constructor(message) {
    super(message, "FRAUD_ERR");
  }
}

class CurrencyConversionException extends CustomException {
  constructor(message) {
    super(message, "CURRENCY_CONV_ERR");
  }
}

class DataSanitizer {
  cleanInputs(event) {
    const sanitized = structuredClone(event);

    for (const key in sanitized) {
      const value = sanitized[key];

      if (typeof value === "string") {
        sanitized[key] = sanitized[key]
          .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "[XSS_REMOVED]")
          .replace(
            /(\bSELECT\b|\bDROP\b|\bINSERT\b|\bDELETE\b|--|;)/gi,
            "[SQLI_REMOVED]",
          );
      }

      if (sanitized[key] !== value) {
        sanitized._injectionDetected = true;
      }
    }

    return sanitized;
  }

  maskCreditCard(cardNumber) {
    return cardNumber.replace(/(\d{4})\d{8}(\d{4})/, "$1XXXXXXXX$2");
  }
}

class CryptographicValidator {
  calculateHMAC(event) {
    const calculateHash =
      event.eventId.split("-")[1] +
      "-" +
      event.accountId +
      "-" +
      event.amount.toString();

    return calculateHash;
  }
  verifyIntegrity(event) {
    const idHad = event.hash;

    const hashResult = this.calculateHMAC(event);

    if (idHad !== hashResult) {
      throw new EncryptionValidationException(
        "Hash possui alguma invalidação: " + event.eventId,
      );
    } else {
      return event;
    }
  }
}

class CurrencyConverter {
  constructor() {
    this.regions = new Map([
      ["BRL→USD", 0.2],
      ["BRL→EUR", 0.18],
      ["USD→BRL", 5.0],
      ["USD→EUR", 0.92],
      ["EUR→BRL", 5.5],
      ["EUR→USD", 1.08],
    ]);
  }

  convert(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) {
      return amount;
    }

    const currencyDestiantion = fromCurrency + "→" + toCurrency;

    let totalDestination = this.regions.get(currencyDestiantion);

    if (!totalDestination) {
      throw new CurrencyConversionException(
        `Par de moedas não suportado: ${currencyDestiantion}`,
      );
    }

    const valorFinal = totalDestination * amount;

    return valorFinal;
  }

  calculateSpread(amount) {
    const valorDefict = amount * 0.025;
    const total = amount - valorDefict;

    return total;
  }
}

class RiskMatrixEngine {
  evaluateRiskProfile(currentEvent, historyLog) {
    const filtertime = historyLog.filter(
      (event) =>
        event.accountId === currentEvent.accountId &&
        event.timestamp > currentEvent.timestamp - 10,
    );

    if (filtertime.length > 3) {
      throw new FraudDetectionException(
        "Erro De validacação " + currentEvent.accountId,
      );
    }

    const recentTransactions = historyLog.filter(
      (event) =>
        event.accountId === currentEvent.accountId &&
        event.timestamp > currentEvent.timestamp - 300,
    );

    if (
      recentTransactions.some(
        (event) => event.location !== currentEvent.location,
      )
    ) {
      throw new FraudDetectionException(
        "Erro De validacação " + currentEvent.accountId,
      );
    }

    const amountId = currentEvent.amount;

    if (amountId > currentEvent.accountBalance * 0.85) {
      throw new FraudDetectionException(
        "Erro De validacação " + currentEvent.accountId,
      );
    }
  }
}

class AccountLedger {
  constructor() {
    this.accounts = new Map([
      ["ACC-01", { balance: 50000, currency: "BRL", creditLimit: -5000 }],
      ["ACC-02", { balance: 30000, currency: "USD", creditLimit: -3000 }],
      ["ACC-03", { balance: 100000, currency: "EUR", creditLimit: -10000 }],
      ["ACC-04", { balance: 2000, currency: "BRL", creditLimit: -500 }],
      ["ACC-05", { balance: 5000, currency: "EUR", creditLimit: -1000 }],
    ]);
  }

  getAccount(accountId) {
    let getAcount = this.accounts.get(accountId);

    if (getAcount === undefined) {
      throw new DatabaseConnectionException(
        `Conta não encontrada: ${accountId}`,
      );
    } else {
      return structuredClone(getAcount);
    }
  }

  executeDebit(accountId, amount, currenncy) {
    const account = this.accounts.get(accountId);

    if (account?.balance - amount < account?.creditLimit) {
      throw new FinancialLiquidityException(
        `Saldo insuficiente na conta: ${accountId}`,
      );
    }
    return (account.balance = account.balance - amount);
  }

  executeCredit(accountId, amount, currenncy) {
    const account = this.accounts.get(accountId);

    if (account?.balance - amount < account?.creditLimit) {
      throw new FinancialLiquidityException(
        `Saldo insuficiente na conta: ${accountId}`,
      );
    }
    return (account.balance = account.balance + amount);
  }
}

class TransactionalOrchestrator {
  #auditLog = [];
  #successCount = 0;
  constructor() {
    this.dataSanitizer = new DataSanitizer();
    this.cryptogaphicValidator = new CryptographicValidator();
    this.currencyConverter = new CurrencyConverter();
    this.riskMatrizEngine = new RiskMatrixEngine();
    this.accountLedger = new AccountLedger();
    this.#auditLog = [];
    this.#successCount = 0;
  }

  async processBatch(event, concurrencyLimit) {
    const successLogs = [];
    const failureLogs = [];

    for (let i = 0; i < event.length; i += concurrencyLimit) {
      const batch = event.slice(i, i + concurrencyLimit);
      const replica = new Map(this.accountLedger.accounts);
      console.log(
        `[BATCH START] Iniciando lote ${i / concurrencyLimit + 1} com ${batch.length} transações`,
      );

      const batchPromises = batch.map(async (p) => this.#processEvent(p));

      const results = await Promise.allSettled(batchPromises);

      for (const result of results) {
        if (result.status === "fulfilled") {
          successLogs.push(result.value);
          this.#successCount++;
          console.log(`[SUCCESS] Transação processada`);
        } else {
          failureLogs.push(result);
          console.log(`[FAILURE] Erro: ${result.reason.message}`);
        }
        if (this.#successCount % 5 === 0) {
          console.log(
            `[DISC PERSISTENCE CHUNK] Commit executado com sucesso para o bloco ${this.#successCount / 5}`,
          );
        }
      }

      const hasFailed = results.some((r) => r.status === "rejected");

      if (hasFailed) {
        this.rollbackBatch(i / concurrencyLimit + 1, replica);
      }

      console.log(
        `[BATCH FINISH] Finalizando lote ${i / concurrencyLimit + 1} com ${batch.length} transações`,
      );
    }

    return { successLogs, failureLogs };
  }

  async #processEvent(event) {
    const cloned = structuredClone(event);

    const cloneSanitized = this.dataSanitizer.cleanInputs(cloned);
    const verified = this.cryptogaphicValidator.verifyIntegrity(cloneSanitized);

    if (verified.currency !== "USD") {
      let amount = verified.amount;
      const convertVerified = this.currencyConverter.convert(
        verified.amount,
        verified.currency,
        "USD",
      );
      verified.amount = this.currencyConverter.calculateSpread(convertVerified);
    }

    const riskAudit = this.riskMatrizEngine.evaluateRiskProfile(
      verified,
      this.#auditLog,
    );

    if (verified.type === "DEPOSIT") {
      this.accountLedger.executeCredit(
        verified.accountId,
        verified.amount,
        verified.currency,
      );
    }
    if (verified.type === "WITHDRAW" || verified.type === "TRANSFER") {
      this.accountLedger.executeDebit(
        verified.accountId,
        verified.amount,
        verified.currency,
      );
    }

    this.#auditLog.push(verified);
    return verified;
  }

  rollbackBatch(batchId, snapshot) {
    this.accountLedger.accounts = snapshot;

    console.log(`[ROLLBACK] Lote ${batchId} revertido com sucesso`);
  }
}

class ForensicAuditor {
  generateAuditReport(successLogs, failureLogs) {
    const sumFinal = successLogs.reduce((acc, att) => {
      return acc + att.amount;
    }, 0);

    const failureLocations = failureLogs.filter(
      (f) => f.reason.code === "FRAUD_ERR",
    );

    const dataHealth = successLogs.filter((p) => p._injectionDetected === true);
    const dataHealthIndexTotal =
      (dataHealth.length / (successLogs.length + failureLogs.length)) * 100;

    const failureResume = failureLogs.map((q) => {
      return {
        name: q.reason.name,
        code: q.reason.code,
        message: q.reason.message,
      };
    });

    return {
      totalVolumeUSD: sumFinal,
      fraudMapByCountry: failureLocations,
      dataHealthIndex: dataHealthIndexTotal,
      failureRootCause: failureResume,
    };
  }
}

async function main() {
  const db = new DatabaseRepository();
  const allEvents = await db.findAll();

  const transactionalOrchestratorFunction = new TransactionalOrchestrator();

  const { successLogs, failureLogs } =
    await transactionalOrchestratorFunction.processBatch(allEvents, 5);

  const auditor = new ForensicAuditor();

  const finalReport = auditor.generateAuditReport(successLogs, failureLogs);
  console.log(finalReport);

  return finalReport;
}

main();
