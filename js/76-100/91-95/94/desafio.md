# 94-engine-de-processamento-transacional-e-resiliencia-v6

![Nível: Legendário++](https://img.shields.io/badge/Nível-Legendário%2B%2B-red?style=flat-square)

### 📝 Descrição

Você vai construir o core de um **Integrador de Supply Chain**. O sistema deve consumir dados brutos de logística, mas com um nível de rigor bancário. Não basta converter unidades; você deve garantir que cada transação seja atômica, validada por somas de verificação (Checksum) e enriquecida com dados externos simulados.

### 🛠️ Novos Requisitos Técnicos (Rumo às 250+ Linhas)

1.  **Validação de Integridade (Checksum Simulado):**
    - Cada registro possui um campo `hash`. Você deve criar um método `#verifyIntegrity(data)` que gera um hash simples (ex: somar valores de ID e Peso) e compara com o recebido. Se divergir, o dado foi "corrompido" e vai para `quarentena`.

2.  **Gerenciador de Estado Transacional:**
    - Implemente o conceito de **Rollback**. Se durante o processamento de um lote de 5 itens (concorrência), UM item falhar de forma crítica, você deve marcar todo aquele lote como "não-confiável" e registrar o log de erro atômico.

3.  **Pipeline de Enriquecimento Dinâmico (Reforço Avançado):**
    Além de sanitizar e normalizar (KM/KG), você deve:
    - `#applyTaxMatrix()`: Criar um `Map` complexo de taxas baseado na UF de origem e destino.
    - `#detectAnomalies()`: Cruzar peso/volume. Se o peso for baixo e o volume alto (ex: 1kg em 2m³), aplicar taxa de cubagem.
    - `#formatInternational()`: Se o destino for fora do Brasil (detectado via Regex no campo `address`), converter o valor final de BRL para USD (simule uma taxa de câmbio).

4.  **Sistema de Hooks (Novo):**
    - Implemente métodos `onBeforeProcess` e `onAfterProcess` que podem ser "assinados" para disparar alertas sempre que uma entrega de alto valor (> R$ 5.000) for detectada.

5.  **Relatório de Auditoria Forense:**
    O relatório final não é apenas estatístico, deve ser uma trilha de auditoria:
    - `timeline`: Array de strings descrevendo cada passo do motor (ex: "14:00 - Iniciando Lote 1", "14:00 - Erro de Checksum no ID 45").
    - `efficiencyIndex`: Cálculo de ROI (Receita / Tempo de Processamento).
    - `dataHealthScore`: Porcentagem de dados que chegaram limpos vs. dados que precisaram de correção.

### 🚀 Tecnologias e Padrões para Masterizar

- **Bitwise Operators ou Reduced Hashes:** Para a lógica de integridade.
- **Async/Await com Promise.allSettled:** Para gerenciar os lotes sem travar o event loop.
- **Deep Object Merging:** Para enriquecer o objeto original com as novas propriedades calculadas sem perder o rastro do dado bruto.
- **Tratamento de Erros Customizados:** Crie classes de erro como `IntegrityError` ou `TaxationError`.

### 🎯 O Desafio de Extensão (A Prova de Fogo)

O motor deve ser capaz de detectar **IDs Duplicados em tempo real** usando um `Set` persistente, mas, se o ID for duplicado e o timestamp for diferente, ele deve tratar como uma **"Atualização de Status"** e não como um erro, fundindo os dados (Merge).
