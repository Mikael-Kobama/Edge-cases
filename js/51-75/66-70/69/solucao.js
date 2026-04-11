const usuarios = [
  { nome: "Mike", roles: ["user", "editor"] },
  { nome: "Admin", roles: ["admin", "root"] },
  { nome: "Guest", roles: ["guest"] },
];
const rolesPremium = ["admin", "root", "editor"];

const filtro = usuarios.map((n) => {
  const temAcessso = n.roles.some((p) => rolesPremium.includes(p));
  return { ...n, temAcessso: temAcessso };
});

console.log(filtro);
