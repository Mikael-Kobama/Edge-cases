const dbUsers = [
  {
    id: 1,
    user: "mikael",
    email: "mikael@gmail.com",
    password: "123",
    secretKey: "aws-key",
  },
  { id: 2, user: "anonimo", password: "456" }, // Sem email
  { id: 3, user: "aline", email: "aline.silva@outlook.com", password: "789" },
];

const fitro = dbUsers
  .filter((p) => (p.email !== undefined ? true : false))
  .map(({ password, secretKey, ...p }) => {
    const email = p.email;
    const substituto = "***";
    const divisor = "@";

    const parteCorte = email?.indexOf(divisor);
    let indiceinicial = email?.slice(0, parteCorte);

    indiceinicial?.length;
    const cortador = indiceinicial?.slice(0, indiceinicial.length - 3);
    const indiceFinal = email?.slice(parteCorte, email.length);

    const resultado = cortador + substituto + indiceFinal;
    const filtro = { ...p, email: resultado };

    return filtro;
  });

console.log(fitro);
