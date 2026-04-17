# 75-o-consolidado-de-infraestrutura

![Nível: Expert](https://img.shields.io/badge/Nível-Expert-black?style=flat-square)

### 📝 Descrição

Analise o consumo de instâncias EC2:

1. Receba um array de instâncias com `id`, `region` e `costPerHour`.
2. Filtre apenas instâncias que rodaram por mais de 24h (simulado por uma prop `uptimeHours`).
3. **Reforço:** Agrupe por `region`.
4. O resultado deve ser um objeto onde cada chave é a região e o valor é o **custo total** daquela região, mas apenas se o custo total da região for maior que $50.

### 🛠️ Requisitos Técnicos

- [x] `.filter()`, `.reduce()`.
- [x] `Object.entries()` + `Object.fromEntries()` para o filtro final de custo.
