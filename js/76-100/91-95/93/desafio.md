# 93-orquestrador-de-mensageria-resiliente-v4

![Nível: Legendário+](https://img.shields.io/badge/Nível-Legendário+-black?style=flat-square)

### 📝 Descrição

Você deve desenvolver um sistema de processamento de mensagens que simula um serviço de mensageria (tipo RabbitMQ ou Kafka). O sistema recebe um lote de tarefas brutas, precisa classificá-las, ordená-las por prioridade e executá-las respeitando um limite de "trabalhadores" simultâneos.

### 🛠️ Requisitos Técnicos (Para 130+ Linhas de Lógica)

1.  **A Classe `MessageBroker`:**
    - Deve possuir um construtor que inicializa: `fila`, `processando`, `concluidos`, `falhas`, `deadLetterQueue` (DLQ) e um `contadorDeRetries`.
    - Deve aceitar um parâmetro `maxConcurrency` (ex: processar no máximo 3 itens por vez).

2.  **Fase 1: Sanitização e Ingestão (Reforço 91/92):**
    - Antes de entrar na fila, cada tarefa deve passar por um método `#sanitizarPayload()`.
    - Use Regex para garantir que o campo `targetIP` seja válido e que o `payload` não contenha caracteres especiais proibidos.
    - Se o dado estiver "sujo", corrija-o. Se estiver quebrado, descarte antes mesmo da fila.

3.  **Fase 2: Priorização Dinâmica (Reforço Arrays):**
    - As tarefas têm prioridades: `CRITICAL` (Peso 3), `URGENT` (Peso 2), `NORMAL` (Peso 1).
    - Sempre que um "trabalhador" ficar livre, ele deve buscar a tarefa de maior peso, **mesmo que ela tenha chegado depois**.

4.  **Fase 3: Execução com Simulação de Falha e Retry:**
    - Método `processTask(task)`:
      - Deve ter um delay randômico entre 50ms e 200ms.
      - **Simulação de Erro:** Se `Math.random() > 0.7`, a tarefa falha.
      - **Política de Retry:** Se falhar, incremente `task.attempts`. Se `attempts < 3`, ela volta para a fila com prioridade aumentada. Se `attempts >= 3`, vai para a `deadLetterQueue`.

5.  **Fase 4: O Monitor de Concorrência (Async Control):**
    - Você deve garantir que o sistema não processe tudo de uma vez. Se o limite for 3, e você tiver 100 itens, o sistema deve manter 3 "promessas" rodando em paralelo o tempo todo até zerar a fila.

6.  **Relatório Analítico de Performance:**
    - Gere um log final com:
      - `throughput`: Mensagens por segundo.
      - `retryRate`: (Total de retries / Total de mensagens).
      - `uptimeSimulado`: Tempo total que o motor ficou rodando.
      - `incidentReport`: Lista detalhada do porquê cada item na DLQ falhou.

### 🚀 Recursos Obrigatórios para Reforço

- **Recursividade:** Para manter o worker buscando novas tarefas.
- **Deep Copy (JSON.parse/stringify):** Para garantir que o retry não use a referência de memória do objeto original.
- **Map/Reduce:** Para gerar as estatísticas finais do relatório.
- **Try/Catch/Finally:** Em cada step do processamento.
