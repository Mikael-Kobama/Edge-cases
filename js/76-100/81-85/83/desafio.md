# 83-validador-de-agenda-inteligente

![Nível: Difícil](https://img.shields.io/badge/Nível-Difícil-red?style=flat-square)

### 📝 Descrição

Você está desenvolvendo o backend de um sistema de reserva de salas de reunião. Sua missão é criar uma função que valide se um novo pedido de reserva pode ser aceito ou se ele conflita com reuniões já existentes.

### 🛠️ Requisitos Técnicos

1.  **Detecção de Conflito:** Um conflito ocorre se o `inicio` da nova reunião for antes do `fim` de uma existente **E** o `fim` da nova for depois do `inicio` da existente.
2.  **Horário Comercial:** A reserva só é válida se estiver dentro do horário comercial (das 08:00 às 18:00).
3.  **Validação de Dados:** O `fim` da reunião deve ser obrigatoriamente maior que o `inicio`.
4.  **Resultado:** A função deve retornar um objeto:
    - Se houver erro de horário/lógica: `{ status: "erro", mensagem: "Causa do erro" }`
    - Se houver conflito: `{ status: "conflito", mensagem: "Horário ocupado" }`
    - Se estiver livre: `{ status: "sucesso", mensagem: "Reserva confirmada" }`
