# 82-calculo-de-estoque-recursivo-pro

![Nível: Difícil](https://img.shields.io/badge/Nível-Difícil-red?style=flat-square)

### 📝 Descrição

Você foi contratado para criar um sistema de inventário para um Marketplace. O estoque é organizado em uma estrutura de "Árvore de Categorias".

Uma categoria pode ter um número de produtos **E** uma lista de `subcategorias`. Cada subcategoria, por sua vez, pode ter seus próprios produtos e outras subcategorias, sem limite de profundidade.

Seu objetivo é criar uma função **recursiva** que percorra toda essa árvore e retorne a **soma total de produtos** de uma categoria pai e todas as suas descendentes.

### 🛠️ Requisitos Técnicos

1.  **Lógica Recursiva:** A função deve chamar a si mesma para processar as subcategorias.
2.  **Caso Base:** A função deve saber parar quando o array de `subcategorias` estiver vazio.
3.  **Acumulação:** Você deve somar os produtos da categoria atual com o resultado da soma das subcategorias.
