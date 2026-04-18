const ec2 = [
  { id: "i-1", region: "us-east-1", cost: 2, uptime: 30 },
  { id: "i-2", region: "us-east-1", cost: 5, uptime: 10 }, // < 24h
  { id: "i-3", region: "sa-east-1", cost: 10, uptime: 50 },
  { id: "i-4", region: "us-east-1", cost: 2, uptime: 100 },
];

const fitro = ec2
  .filter((p) => p.uptime > 24)
  .reduce((acc, item) => {
    if (acc[item.region]) {
      acc[item.region] += item.cost * item.uptime;
    } else {
      acc[item.region] = item.cost * item.uptime;
    }
    return acc;
  }, {});

const filtroFinal = Object.fromEntries(
  Object.entries(fitro).filter((p) => p[1] > 300),
);

console.log(JSON.stringify(filtroFinal, null, 2));
