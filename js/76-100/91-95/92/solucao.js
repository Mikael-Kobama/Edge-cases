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
      this.rejeitados.push(usuario.id);
      errors.push("ID duplicado");
      return { valid: false, errors };
    } else if (!usuario.email.includes("@") || !usuario.email.includes(".")) {
      this.rejeitados.push(usuario.id);
      errors.push("Email Inválido");
      return { valid: false, errors };
    } else if (usuario.idade < 18 || usuario.idade > 100) {
      this.rejeitados.push(usuario.id);
      errors.push("Idade Inválida");
      return { valid: false, errors };
    } else if (!["ADMIN", "USER", "GUEST"].includes(usuario.perfil)) {
      this.rejeitados.push(usuario.id);
      errors.push("Perfil Inválido");
      return { valid: false, errors };
    } else {
      return { valid: true, errors: [] };
    }
  }

  sanitizar(usuario) {
    let nomeLimpo = usuario.nome
      .replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
      .replace(/\s\s+/g, " ")
      .trim();

    let userTag = usuario.tag;

    if (!Array.isArray(userTag) || userTag.length === 0) {
      userTag = ["default"];
    }

    return {
      ...usuario,
      nome: nomeLimpo,
      tag: userTag,
      perfil: usuario.perfil.toUpperCase(),
    };
  }

  async processarUsuarios(usuario) {
    const resultadosProcessados = usuario.map(async (user) => {
      await new Promise((resolve) => setTimeout(resolve, 30));
      const limpo = this.sanitizar(user);
      const erro = this.validarConta(limpo);

      return { ...limpo, erro };
    });

    const resultadoFinal = (
      await Promise.allSettled(resultadosProcessados)
    ).map((user) => {
      const valoresUsuarios = user.value;
      if (valoresUsuarios.erro.valid) {
        this.aprovados.push(valoresUsuarios);
      } else {
        this.rejeitados.push(valoresUsuarios);
      }
    });
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
