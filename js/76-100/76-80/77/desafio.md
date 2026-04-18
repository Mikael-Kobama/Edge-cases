---

### 📂 No diretório `77/`

**desafio.md**

````markdown
# 77-sanitizacao-e-media-de-latencia

![Nível: Médio+](https://img.shields.io/badge/Nível-Médio+-orange?style=flat-square)

### 📝 Descrição

Logs de API chegam como strings (`"250ms"`). Você precisa:

1. Remover logs de caminhos de saúde (`/health`).
2. Converter `"250ms"` em número `250`.
3. Calcular a média de latência apenas dos caminhos de produção.
4. **Novo:** Se a média for maior que 300, adicione um status `"ALERTA"`.

### 📥 Exemplo de Saída Esperada

```json
{ "media": 275, "status": "NORMAL" }
```
````
