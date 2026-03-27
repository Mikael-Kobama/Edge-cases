# %%


def sistema_escolar():
    alunos = {}
    while True:
        nome = input("Nome do aluno (ou 'sair'): ").strip()
        if nome.lower() == "sair":
            break
        try:
            nota = float(input(f"Nota de {nome}: "))
            alunos[nome] = nota
        except ValueError:
            print("Por favor, insira um número válido para a nota.")

    if not alunos:
        return

    media_turma = sum(alunos.values()) / len(alunos)
    aprovados = [nome for nome, nota in alunos.items() if nota >= 7.0]

    print(f"\nMédia da Turma: {media_turma:.2f}")
    print(f"Alunos Aprovados: {', '.join(aprovados)}")


if __name__ == "__main__":
    sistema_escolar()
