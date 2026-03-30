```markdown
# 🌐 Simulação de Chamada de API (Assincronismo)

![Nível: Médio](https://img.shields.io/badge/Nível-Médio-yellow?style=flat-square)
![JS: Async_Await](https://img.shields.io/badge/JS-Async_Await-yellow?style=flat-square)

### 📝 Descrição

Simular o comportamento de uma requisição para um servidor externo (como AWS Lambda ou um endpoint REST), lidando com o tempo de espera (delay) e a resolução da promessa.

### 🛠️ Requisitos Técnicos

- [x] Criar uma `Promise` manual.
- [x] Utilizar `setTimeout` para simular latência de rede.
- [x] Implementar o consumo da promessa usando a sintaxe moderna `async/await`.

### 📤 Exemplo de Fluxo

1. Chamada da função `executar()`.
2. Log: "Buscando...".
3. Aguarda 2 segundos (Simulação).
4. Log: "Dados recuperados da Nuvem!".

---
```
