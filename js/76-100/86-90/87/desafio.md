# 87-processador-de-lote-assincrono-com-retry

![Nível: Difícil](https://img.shields.io/badge/Nível-Difícil-red?style=flat-square)

### 📝 Descrição

Você precisa processar uma lista de IDs de usuários. Para cada ID, você fará uma chamada assíncrona. O desafio é que alguns IDs são "instáveis" e podem falhar, e você precisa consolidar o resultado final de tudo.

### 🛠️ Requisitos Técnicos

1.  **A Função de Simulação (`fetchUser`):** - Deve receber um `id`.
    - Deve ter um atraso aleatório entre 500ms e 1500ms (use `Math.random()`).
    - Se o ID for **ímpar**, a promessa deve ser resolvida com `{ id, status: "processado" }`.
    - Se o ID for **par**, a promessa deve ser rejeitada com `{ id, status: "erro" }`.
2.  **O Processador (`processarLote`):**
    - Deve receber um array de IDs.
    - Deve usar um loop para disparar as chamadas.
    - **Reforço de Lógica:** Você deve capturar os erros individualmente para que uma falha não pare o processamento dos outros (dica: use `.catch()` dentro do loop ou `Promise.allSettled`).
3.  **Relatório Final:**
    - Ao final de todos os processos, exiba um objeto com:
      - `sucessos`: Array com os IDs que deram certo.
      - `falhas`: Array com os IDs que deram erro.
      - `totalProcessado`: A soma total de IDs enviados.

### 📥 Entrada para teste

```javascript
const listaIds = [1, 2, 3, 4, 5, 6];
// Chame a função processarLote(listaIds)
```
