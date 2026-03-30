# 📅 Cálculo de Intervalo entre Datas

![Nível: Fácil](https://img.shields.io/badge/Nível-Fácil-green?style=flat-square)
![Conceito: Date_Object](https://img.shields.io/badge/Conceito-Date_Object-blue?style=flat-square)

### 📝 Descrição

O objetivo é criar uma função que calcule a distância temporal (em dias) entre duas strings de data. Útil para sistemas de reserva, prazos de entrega ou contagem regressiva de projetos.

### 🛠️ Requisitos Técnicos

- [x] Converter strings ISO em instâncias do objeto `Date`.
- [x] Lidar com a diferença em milissegundos.
- [x] Utilizar `Math.abs()` para garantir resultados positivos.
- [x] Utilizar `Math.ceil()` para arredondar frações de dias.

### 📥 Exemplo de Entrada

```javascript
calcularDias("2026-03-01", "2026-03-29");
```
