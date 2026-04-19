const buckets = [
  { bucketName: "meu-bucket-projeto", region: "us-east-1" }, // Válido
  { bucketName: "Bucket_Invalido", region: "us-east-1" }, // Erro: Maiúsculas
  { bucketName: "ai", region: "sa-east-1" }, // Erro: Curto demais (<3)
  { bucketName: "prod-server", region: "eu-central-1" }, // Erro: Região não permitida
];

const permitidas = [`us-east-1`, `sa-east-1`, `us-west-2`];
const filtroBuckets = buckets.map((p) => {
  const errors = [];
  const valid = [];

  if (p.bucketName !== p.bucketName.toLowerCase())
    errors.push("errors: Nome do bucket não pode ter maiúsculas");
  if (p.bucketName.length < 3)
    errors.push("errors: Nome do bucket precisa de mais caracteres");
  if (p.bucketName.length > 63)
    errors.push("errors: Nome do bucket precisa de menos caracteres");
  if (!permitidas.some((r) => r === p.region))
    errors.push("errors: Regiao invalida");
  if (errors.length === 0) valid.push("Valid: Regiao Aprovada");

  return {
    bucketName: p.bucketName,
    isValid: valid,
    errors,
  };
});

console.log(filtroBuckets);
