# 92-validador-de-esquema-e-sanitizador-de-cadastros

![Nível: Legendário+](https://img.shields.io/badge/Nível-Legendário+-black?style=flat-square)

### 📝 Descrição

Você deve criar um motor que recebe uma lista de cadastros de usuários e os valida contra um "Schema" (um objeto de regras). O objetivo é garantir que nenhum dado inconsistente chegue ao final do processo. O código deve ser modular e capaz de lidar com grandes volumes de dados.

### 🛠️ Requisitos Técnicos

1.  **O Schema de Referência:**
    Cada usuário no `dados.json` deve seguir estas regras:
    - `id`: Deve ser uma string única.
    - `nome`: String, mínimo 3 caracteres. Deve ser sanitizada (Remover números e símbolos).
    - `email`: String, deve conter `@` e `.`.
    - `idade`: Number, entre 18 e 100.
    - `perfil`: Deve ser um dos três: "ADMIN", "USER", ou "GUEST".
    - `tags`: Deve ser um Array. Se estiver vazio ou não for array, deve ser corrigido para `["default"]`.

2.  **Motor de Processamento (Repetição e Lógica):**
    - Crie uma classe `SchemaValidator`.
    - Método `validate(user)`: Retorna um objeto `{ valid: boolean, errors: [] }`.
    - Método `sanitize(user)`: Retorna o objeto corrigido (ex: transformar "uSuaRio123" em "Usuario").
    - Método `processAll(users)`: Um loop `async` que processa cada usuário com um delay de 30ms.

3.  **Logs e Relatório Final (Obrigatório > 100 linhas de lógica):**
    O resultado final deve ser um relatório detalhado:
    - `aprovados`: Lista de usuários limpos e validados.
    - `rejeitados`: Lista de usuários que falharam em regras críticas (id, email, idade).
    - `correcoesRealizadas`: Contador de quantas vezes o sistema precisou agir (limpar nomes, adicionar tags default).
    - `estatisticaPorPerfil`: Quantidade de usuários por tipo de perfil.

### 🚀 Recursos a Reforçar

- **Regex Avançado:** Para limpar os nomes e validar emails.
- **Manipulação de Arrays:** `filter`, `reduce`, `every`, `some`.
- **Controle de Fluxo:** `try/catch` para capturar erros inesperados durante a sanitização.
- **Sets:** Para garantir que não existam IDs duplicados no processamento.
