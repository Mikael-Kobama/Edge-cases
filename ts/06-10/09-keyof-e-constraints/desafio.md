# Desafio 09: Operador keyof (Segurança de Chaves)

## 📝 Enunciado

Crie uma função que receba um objeto de um `Produto` (nome, preco) e uma `chave` desse objeto. A função deve retornar o valor daquela chave.

**Regras:**

1. Use `keyof Produto` para garantir que a chave passada realmente existe no objeto.

## 🛠️ Por que usar isso?

No JS, acessar `produto["descricao"]` quando só existe "nome" retorna `undefined`. O `keyof` impede que você tente acessar uma propriedade que não foi definida no tipo, bloqueando o erro antes de rodar.
