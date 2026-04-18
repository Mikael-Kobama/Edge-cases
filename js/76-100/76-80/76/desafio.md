# 76-validador-schema-aws-s3

![Nível: Médio+](https://img.shields.io/badge/Nível-Médio+-orange?style=flat-square)

### 📝 Descrição

Validar configurações de Buckets S3. Você deve verificar:

1. `bucketName`: Deve ter entre 3 e 63 caracteres e NÃO pode ter letras maiúsculas.
2. `region`: Deve estar entre as permitidas (`us-east-1`, `sa-east-1`, `us-west-2`).
3. Retorne um objeto indicando se é válido e a lista de erros encontrados.

### 📥 Exemplo de Saída Esperada

```json
{
  "isValid": false,
  "errors": ["Nome do bucket não pode ter maiúsculas", "Região inválida"]
}
```
