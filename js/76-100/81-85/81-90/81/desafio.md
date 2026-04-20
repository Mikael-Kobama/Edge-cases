# 81-super-gerador-de-query-string-pro

![Nível: Difícil](https://img.shields.io/badge/Nível-Difícil-red?style=flat-square)

### 📝 Descrição

Simular o motor de busca de um Dashboard de Infraestrutura. Você deve transformar um objeto complexo em uma Query String de URL seguindo regras rigorosas de limpeza e padronização.

### 🛠️ Requisitos Técnicos

1.  **Limpeza Profunda:** Remova chaves com valores `null`, `undefined` ou strings vazias `""`.
2.  **Tratamento de Arrays:** Se o valor for um array, ele deve ser repetido na URL (ex: `tags: ["a", "b"]` vira `tags=a&tags=b`).
3.  **URL Encoding:** Use `encodeURIComponent()` em todos os valores para tratar espaços e caracteres especiais.
4.  **Ordenação:** As chaves devem aparecer na URL em ordem alfabética.
5.  **Prefixo:** A string final deve começar com `?`.

### 📥 Entrada para teste

```javascript
const parametros = {
  regiao: "sa-east-1",
  servico: "ec2",
  status: "active",
  tags: ["infra", "producao", "node js"],
  versao: null,
  busca: "",
  limite: 10,
};
```
