# 89-gerenciador-de-cache-multicamada-e-invalidação

![Nível: Expert](https://img.shields.io/badge/Nível-Expert-black?style=flat-square)

### 📝 Descrição

Você deve desenvolver um sistema de gerenciamento de cache de alta performance que simula o comportamento de um CDN (Content Delivery Network). O sistema deve lidar com expiração de tempo (TTL), prioridade de memória e revalidação assíncrona.

### 🛠️ Requisitos Técnicos e Regras de Negócio

1.  **Estrutura de Armazenamento (Map):**
    - Utilize a estrutura `Map()` do JavaScript para armazenar os objetos de cache.
    - Cada entrada deve conter: `valor`, `timestampCriacao`, `acessos` (contador) e `ttl` (Time To Live).

2.  **Lógica de Recuperação de Dados (O Coração do Desafio):**
    - **Cache Hit:** Se o dado existe e está dentro do TTL, retorne-o imediatamente.
    - **Cache Stale (Novo!):** Se o dado expirou por até 2 segundos (margem de tolerância), retorne o dado antigo MAS dispare uma função assíncrona em background para atualizar o cache com o dado novo do banco.
    - **Cache Miss:** Se o dado não existe ou expirou há mais de 2 segundos, aguarde a busca no banco (delay de 1s) e salve no cache.

3.  **Política de Expulsão (Lógica LRU Simples):**
    - O cache tem um limite máximo de **5 itens**.
    - Se o cache estiver cheio e você precisar adicionar um novo, remova o item que foi **menos acessado** (utilize o contador de `acessos`).

4.  **Métricas Avançadas de Saída:**
    - Sua função final deve retornar o dado solicitado e um relatório de performance do cache:
      - `origem`: (DATABASE, CACHE ou STALE_REVALIDATE).
      - `tempoResposta`: 0ms para cache, 1000ms para banco.
      - `estadoCache`: Quantidade de itens atuais no cache e qual item foi expulso (se houver).

### 🚀 Recursos Obrigatórios

- **Promises e Async/Await:** Para simular a latência do banco e a revalidação em background.
- **Closures ou Classes:** Para manter o estado do Cache privado e persistente entre as chamadas.
- **Hof (Higher Order Functions):** Criar uma função que "envolve" a busca original adicionando a camada de cache.
- **Lógica de Ordenação:** Para decidir qual item remover quando o cache lotar.

### 🎯 Objetivo de Reforço

Este desafio consolida tudo o que vimos sobre **objetos, ordenação de arrays e assincronismo**, introduzindo a lógica de **Background Tasks** (fazer algo sem travar o retorno do usuário).
