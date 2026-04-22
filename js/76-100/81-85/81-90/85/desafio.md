# 85-analisador-de-frequencia-e-logs-pro

![Nível: Expert](https://img.shields.io/badge/Nível-Expert-black?style=flat-square)

### 📝 Descrição

Você recebeu um "dump" de logs de erro de um serviço Lambda da AWS. Para identificar a causa raiz, você precisa descobrir qual palavra técnica (termo) mais se repete, ignorando as "stop words" (palavras comuns que não agregam valor técnico).

### 🛠️ Requisitos Técnicos

1.  **Sanitização Total:** Converta o texto para minúsculas e remova pontuações (vírgulas, pontos, parênteses) e números.
2.  **Filtragem de Ruído:** Você deve ignorar uma lista de `stopWords` fornecida.
3.  **Contagem e Ranking:** Use um `reduce` para criar um mapa de frequência de cada palavra.
4.  **Desempate:** Se duas palavras tiverem a mesma frequência, a que for maior (mais caracteres) deve ser a vencedora.
5.  **Saída:** Retorne um objeto com o `termoPrincipal`, a `frequencia` e um array de `palavrasDescartadas` (as stop words que foram encontradas e removidas).

### 📥 Entrada para teste

```javascript
const logBruto =
  "Erro: Falha no acesso ao S3. O bucket s3-prod-logs negou acesso (403). Verifique as permissões de acesso ao S3 e o acesso ao IAM.";

const stopWords = ["o", "ao", "no", "as", "de", "e"];
```
