**desafio.md**

````markdown
# 79-docker-version-sorter (SemVer)

![Nível: Difícil](https://img.shields.io/badge/Nível-Difícil-red?style=flat-square)

### 📝 Descrição

Ordenar versões de imagens Docker. No mundo real, `v1.10.0` é MAIOR que `v1.2.0`.

1. Remova o prefixo "v".
2. Ordene do mais recente para o mais antigo.
3. **Dica:** Você vai precisar dar um `split('.')` e comparar número por número (Major, Minor, Patch).

### 📥 Exemplo de Saída Esperada

```javascript
["1.10.2", "1.2.5", "1.0.0"];
```
````
