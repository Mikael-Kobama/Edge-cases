const tickets = [
  { id: 1, cat: "TI" },
  { id: 2, cat: "RH" },
  { id: 3, cat: "TI" },
  { id: 4, cat: "Financeiro" },
];

const contador = tickets.reduce((acc, t) => {
  acc[t.cat] = (acc[t.cat] || 0) + 1;
  return acc;
}, {});
