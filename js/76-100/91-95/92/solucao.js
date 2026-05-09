const fs = require("fs");
const dados = JSON.parse(fs.readFileSync("./dados.json", "utf-8"));

class MotorCadastro {
  constructor() {
    this.idUnico = new Set();
    this.aprovados = [];
    this.rejeitados = [];
    this.correcoesRealizadas = 0;
    this.estatisticaPorPerfil = new Map();
  }

  validarConta(usuario) {
    let errors = [];
    if (this.idUnico.has(usuario.id)) {
      errors.push("ID duplicado");
      return { valid: false, errors };
    } else if (!usuario.email.includes("@") || !usuario.email.includes(".")) {
      errors.push("Email Inválido");
      return { valid: false, errors };
    } else if (usuario.idade < 18 || usuario.idade > 100) {
      errors.push("Idade Inválida");
      return { valid: false, errors };
    } else if (!["ADMIN", "USER", "GUEST"].includes(usuario.perfil)) {
      errors.push("Perfil Inválido");
      return { valid: false, errors };
    } else {
      this.idUnico.add(usuario.id);
      return { valid: true, errors: [] };
    }
  }

  sanitizar(usuario) {
    let nomeLimpo = usuario.nome
      .replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
      .replace(/\s\s+/g, " ")
      .trim();

    let userTag = usuario.tags;

    if (!Array.isArray(userTag) || userTag.length === 0) {
      this.correcoesRealizadas += 1;
      userTag = ["default"];
    }

    return {
      ...usuario,
      nome: nomeLimpo,
      tags: userTag,
      perfil: usuario.perfil.toUpperCase(),
    };
  }

  async processarUsuarios(usuario) {
    for (const user of usuario) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      const limpo = this.sanitizar(user);
      const erro = this.validarConta(limpo);
      const contadorAtual = this.estatisticaPorPerfil.get(limpo.perfil) || 0;

      if (erro.valid) {
        this.aprovados.push(limpo);
        this.estatisticaPorPerfil.set(limpo.perfil, contadorAtual + 1);
      } else {
        this.rejeitados.push(limpo);
      }
    }

    return {
      aprovados: this.aprovados,
      rejeitados: this.rejeitados,
      correcoesRealizadas: this.correcoesRealizadas,
      estatisticaPorPerfil: this.estatisticaPorPerfil,
    };
  }
}

const motor = new MotorCadastro();
motor.processarUsuarios(dados).then(console.log);
