const acessos = [
  { user: "Mikael", admin: false },
  { user: "Evelyn", admin: true },
  { user: "Guest", admin: false },
];

const verificaAdmin = acessos.some((array) => array.admin === true);

console.log(verificaAdmin);
