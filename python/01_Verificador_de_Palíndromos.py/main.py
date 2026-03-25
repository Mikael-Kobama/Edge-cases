# %%


def eh_palindromo(texto):
    resultado = ""
    texto_limpo = texto.replace(" ", "").lower()
    if (texto_limpo == texto_limpo[::-1]) == True:
        resultado = "É palindromo"
    else:
        resultado = "Não É palindromo"
    return resultado


print(eh_palindromo("arara"))
