# %%


def lista_verifica():
    numeros = []
    while True:
        numerosescolhidos = int(input("Qual numero gostaria de adicionar: "))
        if numerosescolhidos == 00:
            break

        numeros.append(numerosescolhidos)

    if numeros:
        soma_numeros = sum(numeros)
        media_numeros = sum(numeros) / len(numeros)
        max_numero = max(numeros)
        min_numero = min(numeros)

        print(
            f"-----------------\nA lista possui esses numeros: {numeros} \nO menor numero é: {min_numero} \nO mair numero é: {max_numero}\nO toa da somas desses numeros deu: {soma_numeros} \nA media tota desses numeros é: {media_numeros:.2f}"
        )
    else:
        print("a lista está vazia")


if __name__ == "__main__":
    lista_verifica()
