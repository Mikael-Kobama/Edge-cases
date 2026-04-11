# 65-deep-clone-e-sanitizacao

![Nível: Difícil](https://img.shields.io/badge/Nível-Difícil-red?style=flat-square)

### 📝 Descrição

Receba um objeto complexo de configuração e crie uma cópia profunda (deep clone). Na cópia, remova todas as propriedades que tenham valor `null` ou `undefined`.

### 🛠️ Requisitos Técnicos

- [x] Utilizar `JSON.parse(JSON.stringify())` ou `structuredClone()`.
- [x] Utilizar `Object.fromEntries()` e `Object.entries()` para filtrar o objeto.
