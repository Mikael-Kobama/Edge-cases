const convidados = ["Mikael", "mikael", "  ", "Aline", "Lucas", "Aline"];

const filtro = [
  ...new Set(
    convidados
      .filter((p) => p.trim().length > 0)
      .map((q) => "Titulo: " + q.toUpperCase())
      .sort(),
  ),
];

console.log(filtro);
