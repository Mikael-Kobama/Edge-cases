# 95-enterprise-banking-core-cqrs-v8

![Nível: Arquiteto de Sistemas Divindade](https://img.shields.io/badge/Nível-Arquiteto%20Divindade-purple?style=for-the-badge)

### 📝 Descrição

Você irá construir o core transacional de um Banco Digital Global operando sob os padrões arquiteturais de **Event Sourcing** (gravação imutável de eventos de estado) e **CQRS** (Command Query Responsibility Segregation).

O sistema deve ingerir lotes de transações multi-moeda, tratá-los através de uma esteira de validação de 8 etapas, gerenciar um livro-caixa atômico com suporte a reversão completa (Rollback) por bloco, e computar relatórios de auditoria forense em tempo real.

---

### 🧱 A Arquitetura Obrigatória: As 8 Classes

Para alcançar o tamanho e complexidade exigidos, divida o sistema nas seguintes estruturas:

#### 1. `class CustomException extends Error` (Camada de Exceções Customizadas)

Você deve criar classes de erro isoladas estendendo o objeto global do JavaScript para rastrear falhas com precisão:

- `DatabaseConnectionException` (Falhas de infraestrutura simulada)
- `EncryptionValidationException` (Assinatura digital corrompida ou alterada)
- `PayloadSecurityException` (Tentativas de injeção ou dados maliciosos)
- `FinancialLiquidityException` (Saldo insuficiente no Ledger)
- `FraudDetectionException` (Bloqueios preventivos pelo motor de risco)

#### 2. `class DataSanitizer` (Estágio 1: Segurança de Entrada)

- **Responsabilidade:** Higienizar strings brutas e mascarar dados em conformidade com leis de proteção de dados.
- **Métodos:**
  - `cleanInputs(event)`: Usa Regex complexas para identificar e expurgar tags `<script>`, comandos SQL (`SELECT`, `DROP`, `--`) de campos de texto.
  - `maskCreditCard(cardNumber)`: Se houver cartão, preserva apenas os 4 primeiros e 4 últimos dígitos, trocando o miolo por `XXXX`.

#### 3. `class CryptographicValidator` (Estágio 2: Integridade de Dados)

- **Responsabilidade:** Garantir que o evento não foi adulterado no trânsito de rede.
- **Métodos:**
  - `calculateHMAC(event)`: Cria uma string de verificação única baseada no conteúdo do bloco (ex: concatenar `eventId + accountId + amount` e gerar um hash numérico por deslocamento de bits ou criptografia simples).
  - `verifyIntegrity(event)`: Valida se o hash enviado bate com o calculado. Se falhar, lança `EncryptionValidationException`.

#### 4. `class AccountLedger` (Estágio 3 e 4: Estado Contábil e Mutação)

- **Responsabilidade:** Controlar as contas, saldos e moedas nativas (BRL, USD, EUR).
- **Métodos:**
  - `getAccount(accountId)`: Retorna um clone imutável do estado da conta.
  - `executeDebit(accountId, amount, currency)` / `executeCredit(accountId, amount, currency)`: Realiza a mutação de saldo aplicando taxas administrativas de manutenção dinâmicas. Lança `FinancialLiquidityException` se estourar o limite de crédito.

#### 5. `class CurrencyConverter` (Estágio 5: Câmbio Dinâmico e Arbitragem)

- **Responsabilidade:** Unificar valores operacionais para indexação centralizada em USD.
- **Métodos:**
  - `convert(amount, fromCurrency, toCurrency)`: Aplica cotações flutuantes armazenadas em um `Map` interno baseado em horários de pico.
  - `calculateSpread(amount)`: Deduz uma taxa de spread de 2.5% em transações internacionais.

#### 6. `class RiskMatrixEngine` (Estágio 6: Motor de Prevenção a Fraudes)

- **Responsabilidade:** Avaliar comportamento transacional baseado em histórico de curto prazo.
- **Métodos:**
  - `evaluateRiskProfile(currentEvent, historyLog)`: Aplica três regras simultâneas:
    1. _Velocity Check:_ Bloqueia mais de 3 requisições originadas em menos de 10 segundos.
    2. _Location Paradox:_ Verifica a distância geográfica baseada em strings de localização em períodos curtos (ex: São Paulo -> Paris em 5 minutos).
    3. _Liquidity Spike:_ Transações que consomem mais de 85% do patrimônio líquido da conta de uma única vez.

#### 7. `class TransactionalOrchestrator` (Estágio 7: Gerenciador de Lotes e Concorrência)

- **Responsabilidade:** O cérebro do sistema. Coordena os lotes (chunks) assíncronos de processamento.
- **Métodos:**
  - `processBatch(eventsList, concurrencyLimit)`: Divide a lista em blocos de tamanho fixo, rodando promessas simultâneas limitadas via `Promise.allSettled()`.
  - `rollbackBatch(batchId, historySnapshot)`: Se um único evento crítico falhar em um lote transacional, restaura o estado físico anterior de todas as contas afetadas no lote atual através de um snapshot profundo (`structuredClone`).
  - _Hooks Disponíveis:_ `beforeBatchStart`, `onItemSuccess`, `onItemFailure`, `afterBatchComplete`.

#### 8. `class ForensicAuditor` (Estágio 8: Consolidação Funcional de Relatórios)

- **Responsabilidade:** Análise contábil forense pós-processamento usando programação puramente funcional.
- **Métodos:**
  - `generateAuditReport(successLogs, failureLogs)`: Utiliza encadeamentos massivos de `.reduce()`, `.filter()` e `.map()` para retornar:
    - Volume financeiro total consolidado líquido em USD.
    - Mapa de densidade de fraudes por país.
    - Data Health Index (porcentagem de payloads que sofreram tentativas de injeção de código nocivo).
    - Mapeamento detalhado da causa raiz de cada falha.

---

### ⛓️ A Esteira de Processamento de 8 Etapas

Seu pipeline deve invocar os métodos das classes na seguinte ordem exata para cada transação:

1. **Ingestão:** Recebimento e clonagem profunda do evento bruto.
2. **Sanitização:** Limpeza contra SQLi/XSS e mascaramento de cartões de crédito.
3. **Validação Criptográfica:** Verificação do Checksum/HMAC de segurança.
4. **Câmbio & Spread:** Conversão de moedas e aplicação de taxas internacionais se aplicável.
5. **Análise Antifraude:** Cruzamento com o histórico comportamental de eventos passados.
6. **Validação Contábil:** Checagem de fundos e aplicação de travas de segurança financeiras.
7. **Mutação Atômica:** Atualização temporária dos saldos das contas do lote em memória.
8. **Consolidação/Persistência:** Emissão do evento processado para o log imutável final.

---

### 🚀 Desafios Extra de Complexidade para Garantir as 400+ Linhas

- **Persistência Incremental por Amostragem:** A cada 5 transações finalizadas com sucesso, o orquestrador deve gerar um dump formatado em tela simulando gravação em disco (`[DISC PERSISTENCE CHUNK] Commit executado com sucesso para o bloco X`).
- **Estados de Transição do Orquestrador:** Utilize propriedades privadas com símbolos ou sintaxe nativa (`#`) para gerenciar logs internos do sistema de rastreabilidade (Audit Trail), garantindo que mensagens de depuração ricos em detalhes preencham o console a cada ciclo.
