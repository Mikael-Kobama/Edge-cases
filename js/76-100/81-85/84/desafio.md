1.  **Sanitização:** Remova qualquer caractere que não seja número (espaços, traços, pontos).
2.  **Validação de Tamanho:** O número final (após a limpeza) deve ter exatamente entre 13 e 16 dígitos. Se for fora disso, retorne `"Número Inválido"`.
3.  **Ofuscação:** Substitua todos os dígitos por `*`, EXCETO os últimos 4 dígitos.
4.  **Formatação de Saída:** A string final deve ser agrupada de 4 em 4 caracteres separados por espaço, para facilitar a leitura.
5.  **Reforço:** Se o número total de dígitos não for múltiplo de 4, o primeiro grupo pode ter menos caracteres (ex: 13 dígitos vira `* **** **** 1234`).

### 📥 Entrada para teste

```javascript
const cartao1 = "1234 5678 9876 5432";   // 16 dígitos
const cartao2 = "4532-1100-2233-8";      // 13 dígitos
const cartao3 = "123 456";               // Inválido
📤 Saída Esperada
```
