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
