const usuario = { nome: "Mikael", stack: "Full Stack" };

const temChave = (obj, chave) => obj.hasOwnProperty(chave);

console.log(temChave(usuario, "stack"));
console.log(temChave(usuario, "idade"));
