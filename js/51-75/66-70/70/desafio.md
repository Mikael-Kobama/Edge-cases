# 70-consolidacao-de-dados-multicamadas

![Nível: Expert](https://img.shields.io/badge/Nível-Expert-black?style=flat-square)

### 📝 Descrição

Este é o teste final do bloco. Você recebeu dados brutos de sensores de um Data Center:

1. **Limpeza:** Remova sensores que estão "offline".
2. **Transformação:** Converta a temperatura de Fahrenheit para Celsius ($C = (F - 32) / 1.8$).
3. **Filtro de Alerta:** Mantenha apenas os sensores onde a temperatura em Celsius for maior que 35°.
4. **Agrupamento:** Retorne um objeto final que contenha a `mediaTemperatura` desses sensores em alerta e a lista de `ids` afetados.

### 🛠️ Requisitos Técnicos

- [x] `.filter()`, `.map()`, `.reduce()`.
- [x] Lógica matemática de conversão.
- [x] Cálculo de média dentro do reduce final.
