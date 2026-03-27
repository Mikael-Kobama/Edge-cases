# %%


def filtrar_ordenar(lista):
    unicos = set(lista)
    return sorted(list(unicos))


numeros = [45, 12, 45, 1, 2, 10, 1, 12]
print(f"Original: {numeros}")
print(f"Únicos e Ordenados: {filtrar_ordenar(numeros)}")
