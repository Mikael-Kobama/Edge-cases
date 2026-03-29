# Desafio 05: Proteção de Dados com Readonly

## 📝 Enunciado

Crie um array de números que armazene IDs de usuários. Utilize o modificador `ReadonlyArray` para garantir que ninguém consiga adicionar ou remover itens dessa lista após a criação.

## 🛠️ Por que usar isso?

O JS permite que qualquer um dê um `.push()` em um array. Em sistemas financeiros ou de segurança, você quer garantir a **imutabilidade** dos dados. O TS bloqueia métodos modificadores em tempo de desenvolvimento.
