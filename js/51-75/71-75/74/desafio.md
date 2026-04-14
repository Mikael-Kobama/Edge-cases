# 74-higienizacao-de-payload-sensivel

![Nível: Difícil](https://img.shields.io/badge/Nível-Difícil-red?style=flat-square)

### 📝 Descrição

Simule um middleware de segurança:

1. Receba uma lista de objetos de usuários vindos do banco.
2. **Reforço:** Se o usuário não tiver e-mail, ele deve ser removido da lista.
3. Mascare o e-mail: `mikael@gmail.com` -> `mik***@gmail.com`.
4. Remova a propriedade `password` e `secretKey`.

### 🛠️ Requisitos Técnicos

- [x] Desestruturação de objeto (`rest operator`).
- [x] Manipulação de string com `.split()` e `.slice()`.
