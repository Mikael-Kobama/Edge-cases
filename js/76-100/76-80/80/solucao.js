const acessos = [
  { ip: "192.168.0.1", status: 401 },
  { ip: "10.0.0.5", status: 200 },
  { ip: "192.168.0.1", status: 401 },
  { ip: "192.168.0.1", status: 401 },
  { ip: "10.0.0.5", status: 401 },
  { ip: "172.16.0.10", status: 401 },
];

const filtroErrors = acessos.reduce((acc, att) => {
  if (att.status === 401) {
    if (acc[att.ip]) {
      acc[att.ip] += 1;
    } else {
      acc[att.ip] = 1;
    }
  }

  return acc;
}, {});

const drasticErrors = Object.entries(filtroErrors)
  .filter((p) => p[1] > 2)
  .map(([ip, tentativas]) => {
    return {
      ip,
      status: "BLOQUEADO",
      tentativas,
    };
  });

console.log(drasticErrors);
