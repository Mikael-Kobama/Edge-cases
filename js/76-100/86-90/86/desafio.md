# 86-simulador-de-promessa-com-timeout

![Nível: Médio+](https://img.shields.io/badge/Nível-Médio+-orange?style=flat-square)

### 📝 Descrição

Na AWS, muitos serviços têm um "Timeout" (tempo limite). Se a resposta não vier a tempo, o processo é cancelado. Sua missão é criar um simulador de requisição assíncrona.

### 🛠️ Requisitos Técnicos

1.  **A Função Principal:** Crie uma função chamada `requisicaoMock` que recebe um `id` e um `tempoMs`.
2.  **A Promessa:** Esta função deve retornar uma `Promise`.
    - Se o `tempoMs` for menor ou igual a 2000 (2 segundos), a Promise deve ser resolvida com a mensagem: `"Dados do ID [id] carregados com sucesso"`.
    - Se o `tempoMs` for maior que 2000, a Promise deve ser rejeitada com: `"Erro: Timeout no ID [id]"`.
3.  **Simulação de Atraso:** Use `setTimeout` dentro da Promise para simular a espera pelo tempo passado.
4.  **Consumo:** Chame a função duas vezes (uma para sucesso e uma para erro) e use `.then()` e `.catch()` ou `try/catch` para exibir os resultados no console.

### 📥 Entrada para teste

```javascript
// Teste 1: Sucesso
requisicaoMock(101, 1500);

// Teste 2: Erro (Timeout)
requisicaoMock(102, 3000);
```
