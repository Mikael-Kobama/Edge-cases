# 71-gerador-de-slugs-com-validacao

![Nível: Médio+](https://img.shields.io/badge/Nível-Médio+-orange?style=flat-square)

### 📝 Descrição

Crie um sistema que receba títulos de posts e gere "slugs" para URLs.

1. Remova espaços inúteis e converta para minúsculo.
2. Substitua espaços por hífens.
3. **Reforço:** Se o título for vazio ou não for uma string, retorne "slug-invalido".
4. **Desafio:** Remova duplicatas e ordene os slugs resultantes.

### 🛠️ Requisitos Técnicos

- [x] `.map()`, `.filter()`, `.sort()`.
- [x] Método `.replace(/\s+/g, '-')`.
