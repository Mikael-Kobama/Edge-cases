const ec2 = [
  { id: "i-1", region: "us-east-1", cost: 2, uptime: 30 },
  { id: "i-2", region: "us-east-1", cost: 5, uptime: 10 }, // < 24h
  { id: "i-3", region: "sa-east-1", cost: 10, uptime: 50 },
  { id: "i-4", region: "us-east-1", cost: 2, uptime: 100 },
];

const fitro = ec2.filter((p) => p.uptime > 24);

console.log(fitro);
