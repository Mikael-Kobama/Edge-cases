const sensores = [
  { id: "S1", status: "online", tempF: 104 }, // 40°C
  { id: "S2", status: "offline", tempF: 110 },
  { id: "S3", status: "online", tempF: 86 }, // 30°C
  { id: "S4", status: "online", tempF: 95 }, // 35°C
];

const filtroSensor = sensores.filter((p) => p.status === "online");
console.log(filtroSensor);

const alteraTemperatura = filtroSensor.map((p) => ((p.tempF - 32) * 5) / 9);
console.log(alteraTemperatura);

const filtroAlerta = alteraTemperatura.filter((p) => p >= 35);
console.log(filtroAlerta);

const mediaTemp = filtroAlerta.reduce((acc, atual, index, arrayAtual) => {
  return (acc + atual) / arrayAtual.length;
}, 0);

console.log(mediaTemp);
