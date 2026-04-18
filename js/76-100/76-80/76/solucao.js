const buckets = [
  { bucketName: "meu-bucket-projeto", region: "us-east-1" }, // Válido
  { bucketName: "Bucket_Invalido", region: "us-east-1" }, // Erro: Maiúsculas
  { bucketName: "ai", region: "sa-east-1" }, // Erro: Curto demais (<3)
  { bucketName: "prod-server", region: "eu-central-1" }, // Erro: Região não permitida
];

const permitidas = [`us-east-1`, `sa-east-1`, `us-west-2`];
const filtroBuckets = buckets
  .map((p) => p.bucketName)
  .filter((p) => p.length <= 63);

console.log(filtroBuckets);
