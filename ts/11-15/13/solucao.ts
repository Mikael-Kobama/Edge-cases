const v1: boolean = true;
const v2: boolean = false;
const v3: boolean = true;
const v4: boolean = false;
const v5: boolean = true;

function verificacao(
  v1: boolean,
  v2: boolean,
  v3: boolean,
  v4: boolean,
  v5: boolean,
): Boolean {
  let listaV: boolean[] = [v1, v2, v3, v4, v5];
  const contadorBoolean = listaV.filter((p) => p === true);
  let metade = Math.floor(listaV.length / 2);
  if (contadorBoolean.length > metade) {
    return true;
  } else {
    return false;
  }
}

console.log(verificacao(v1, v2, v3, v4, v5));
