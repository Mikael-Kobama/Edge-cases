# 69-sistema-de-permissao-hierarquico

![Nível: Difícil](https://img.shields.io/badge/Nível-Difícil-red?style=flat-square)

### 📝 Descrição

Você tem uma lista de usuários e suas roles. Algumas roles dão acesso "Premium".

1. Crie uma função que receba a lista de usuários e um array de `rolesPremium`.
2. Para cada usuário, verifique se **alguma** das roles dele está no array premium.
3. Adicione uma propriedade booleana `temAcesso: true/false` em cada objeto.
4. No final, retorne apenas os usuários que ganharam acesso.

### 🛠️ Requisitos Técnicos

- [x] `.map()` para transformar o objeto.
- [x] `.some()` + `.includes()` (Loop dentro de loop).
- [x] `.filter()` final.
