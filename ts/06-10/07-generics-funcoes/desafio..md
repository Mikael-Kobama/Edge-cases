# Desafio 07: Funções Genéricas (Generics)

## 📝 Enunciado

Crie uma função chamada `retornarPrimeiro` que aceite um array de **qualquer tipo** e retorne o primeiro elemento desse array.

**Regras:**

1. Use o marcador `<T>` para que a função seja genérica.
2. O tipo de retorno deve ser o mesmo tipo `T` definido na entrada.

## 🛠️ Por que usar isso?

Se você usasse `any[]`, perderia a tipagem. Com Generics, se você passar um array de strings, o TS "sabe" que o retorno é uma string. Se passar números, o retorno é número. É o ápice do reaproveitamento de código com segurança.
