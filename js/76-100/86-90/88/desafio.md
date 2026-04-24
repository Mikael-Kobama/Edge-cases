# 88-pipeline-de-dados-assincrono-v3

![Nível: Expert](https://img.shields.io/badge/Nível-Expert-black?style=flat-square)

### 📝 Descrição

Você deve construir um motor de processamento assíncrono para um sistema de logística internacional. Cada pedido deve obrigatoriamente atravessar três estágios de validação em série. Se um estágio falha, o fluxo é interrompido para aquele pedido específico, mas o sistema deve continuar processando os demais.

### 🛠️ Requisitos Técnicos

1.  **Workflow Sequencial (Promises):**
    - `validarEstoque(pedido)`: Delay de 400ms. Falha se `quantidade > 10`.
    - `validarPagamento(pedido)`: Delay de 600ms. Falha se `(quantidade * preco) > 5000`.
    - `processarEnvio(pedido)`: Delay de 300ms. Falha se `categoria === "Perigosos"`.
2.  **Gerenciamento de Estado:** Cada pedido deve retornar um log de "passos concluídos". Se falhar no Pagamento, ele deve dizer que passou pelo Estoque mas parou no Pagamento.
3.  **Relatório de Performance e Negócio:** Ao final, o sistema deve gerar um consolidado com:
    - `faturamentoLiquido`: Soma dos valores dos pedidos que chegaram ao status "CONCLUÍDO".
    - `perdaEstimada`: Soma dos valores dos pedidos que foram "REJEITADOS".
    - `taxaDeSucesso`: Porcentagem de pedidos concluídos vs total.
    - `gargalo`: Identificar qual das 3 etapas teve o maior número de falhas.

### 🚀 Recursos Obrigatórios

- `Async / Await` para o pipeline.
- `Promise.all` ou `Promise.allSettled` para disparar o lote inicial.
- `Try / Catch` granular para identificar a etapa exata da falha.
- Métodos de Array avançados (`reduce`, `filter`, `map`) para o relatório.
