const pedidos = [
  {
    id: 101,
    cliente: "Mikael",
    item: "GPU RTX 4090",
    quantidade: 1,
    preco: 12000,
    categoria: "Hardware",
  },
  {
    id: 102,
    cliente: "Ana",
    item: "Teclado",
    quantidade: 5,
    preco: 150,
    categoria: "Periféricos",
  },
  {
    id: 103,
    cliente: "Bruno",
    item: "Bateria Lítio",
    quantidade: 2,
    preco: 800,
    categoria: "Perigosos",
  },
  {
    id: 104,
    cliente: "Carla",
    item: "Monitor 24",
    quantidade: 12,
    preco: 900,
    categoria: "Hardware",
  },
  {
    id: 105,
    cliente: "Diego",
    item: "Mouse Pad",
    quantidade: 2,
    preco: 50,
    categoria: "Periféricos",
  },
  {
    id: 106,
    cliente: "Elena",
    item: "Notebook Pro",
    quantidade: 1,
    preco: 8000,
    categoria: "Hardware",
  },
  {
    id: 107,
    cliente: "Fabio",
    item: "Cadeira Gamer",
    quantidade: 1,
    preco: 1200,
    categoria: "Móveis",
  },
  {
    id: 108,
    cliente: "Gabi",
    item: "Ácido Industrial",
    quantidade: 1,
    preco: 500,
    categoria: "Perigosos",
  },
  {
    id: 109,
    cliente: "Hugo",
    item: "Headset",
    quantidade: 20,
    preco: 200,
    categoria: "Periféricos",
  },
  {
    id: 110,
    cliente: "Iara",
    item: "Webcam 4K",
    quantidade: 3,
    preco: 600,
    categoria: "Periféricos",
  },
];

function validarEstoque(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.quantidade > 10) {
        reject({ pedido, status: "erro" });
      } else {
        resolve({ pedido, status: "validado" });
      }
    }, 400);
  });
}

function validarPagamento(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.quantidade * pedido.preco > 5000) {
        reject({ pedido, status: "erro" });
      } else {
        resolve({ pedido, status: "validado" });
      }
    }, 600);
  });
}

function processarEnvio(pedido) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedido.categoria === "Perigosos") {
        reject({ pedido, status: "erro" });
      } else {
        resolve({ pedido, status: "validado" });
      }
    }, 300);
  });
}

async function processarPedido(pedido) {
  const passos = [];
  try {
    await validarEstoque(pedido);
    passos.push("Estoque"); // etapa 1
  } catch (erro) {
    return { status: "REJEITADO", falhouEm: "Estoque", passos, pedido };
  }

  try {
    await validarPagamento(pedido);
    passos.push("Pagamento");
  } catch (error) {
    return { status: "REJEITADO", falhouEm: "Pagamento", passos, pedido };
  }

  try {
    await processarEnvio(pedido);
    passos.push("Envio");
  } catch (error) {
    return { status: "REJEITADO", falhouEm: "Envio", passos, pedido };
  }
  return { status: "CONCLUÍDO", passos, pedido };
}

function processarLote(pedidos) {
  const promises = pedidos.map((pedido) => processarPedido(pedido));
  return Promise.allSettled(promises);
}

processarLote(pedidos).then((resultado) => {
  const sucessos = resultado.filter((p) => p.value.status === "CONCLUÍDO");

  const falhas = resultado.filter((p) => p.value.status === "REJEITADO");

  const faturamentoLiquido = sucessos.reduce((acc, att) => {
    acc += att.value.pedido.preco * att.value.pedido.quantidade;
    return acc;
  }, 0);

  const perdaEstimada = falhas.reduce((acc, att) => {
    acc += att.value.pedido.preco * att.value.pedido.quantidade;
    return acc;
  }, 0);

  const taxadeSucesso = (sucessos.length / pedidos.length) * 100 + "%";
  const contagemGargalo = falhas.reduce((acc, att) => {
    acc[att.value.falhouEm]
      ? (acc[att.value.falhouEm] += 1)
      : (acc[att.value.falhouEm] = 1);
    return acc;
  }, {});
  const gargalo = Object.entries(contagemGargalo).reduce((acc, att) => {
    return att[1] > acc[1] ? att : acc;
  })[0];

  console.log({
    faturamentoLiquido,
    perdaEstimada,
    taxadeSucesso,
    gargalo,
  });
});
