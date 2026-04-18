### 📂 No diretório `80/`

**desafio.md**

````markdown
# 80-analisador-de-seguranca-brute-force

![Nível: Expert](https://img.shields.io/badge/Nível-Expert-black?style=flat-square)

### 📝 Descrição

Simular um sistema de segurança que detecta ataques de força bruta:

1. Conte quantas falhas de login (`status: 401`) cada IP teve.
2. Identifique IPs com **mais de 2 falhas**.
3. Retorne um array de objetos contendo o IP e a mensagem `"BLOQUEADO"`.
4. **Reforço:** Use `Object.entries()` para transformar o contador em array para o filtro final.

### 📥 Exemplo de Saída Esperada

```javascript
[{ ip: "192.168.0.1", status: "BLOQUEADO", tentativas: 4 }];
```
````
