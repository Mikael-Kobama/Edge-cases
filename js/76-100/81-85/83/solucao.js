const agendaExistente = [
  { inicio: 9, fim: 11 },
  { inicio: 14, fim: 15.5 }, // 14:00 às 15:30
  { inicio: 16, fim: 17.5 },
];

const novaReserva = { inicio: 15, fim: 16.5 };

function validarReserva(agenda, novaReserva) {
  if (novaReserva.fim < novaReserva.inicio) {
    return { status: "erro", mensagem: "Causa do erro" };
  }
  if (novaReserva.inicio < 8 || novaReserva.fim > 18) {
    return { status: "erro", mensagem: "Fora do horário comercial" };
  }
  if (
    agenda.some((p) => novaReserva.fim > p.inicio && novaReserva.inicio < p.fim)
  ) {
    return { status: "conflito", mensagem: "Horário ocupado" };
  } else {
    return { status: "sucesso", mensagem: "Reserva confirmada" };
  }
}

console.log(validarReserva(agendaExistente, novaReserva));
