# %%


def contar_caracteres(palavra):
    frequencia = {}
    for letra in palavra:
        frequencia[letra] = frequencia.get(letra, 0) + 1
    resultado = f"A palavra {palavra} possui uma frequencia de: { frequencia}"
    return resultado


print(contar_caracteres("banana"))
