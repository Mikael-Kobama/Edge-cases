# Desafio 10: Utility Types (Partial e Omit)

## 📝 Enunciado

Dado um tipo `Tarefa` (id, titulo, descricao, concluida), crie uma função de "Atualização".

**Regras:**

1. Use `Partial<Tarefa>` para permitir que o usuário envie apenas os campos que deseja alterar (patch).
2. Use `Omit<Tarefa, "id">` para criar um tipo de "Nova Tarefa" que não precise do ID (gerado pelo banco).

## 🛠️ Por que usar isso?

Utility Types são funções internas do TS que transformam tipos existentes. `Partial` torna tudo opcional, e `Omit` remove propriedades indesejadas para contextos específicos.
