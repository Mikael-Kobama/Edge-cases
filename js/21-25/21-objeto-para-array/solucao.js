const servidores = [true, false, true, true, false];

const servidoresAtivos = servidores.filter((status) => status === true).length;

console.log(servidoresAtivos);
