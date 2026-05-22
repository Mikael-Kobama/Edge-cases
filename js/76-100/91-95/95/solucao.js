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
