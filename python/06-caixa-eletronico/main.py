# %%


def sacar_valor(valor):
    notas = [50, 30, 20, 10, 1]
    print(f"Saque de R${valor}: ")

    for nota in notas:
        quantiedade = valor // nota
        valor %= nota
        if quantiedade > 0:
            print(f"{quantiedade} nota(s) de R${nota}")


sacar_valor(164)
