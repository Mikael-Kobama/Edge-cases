const configRaw = {
  api: "https://api.dev.com",
  timeout: null,
  retry: 3,
  cache: undefined,
  headers: { auth: true },
};

const copia = structuredClone(configRaw);

const filtro = Object.fromEntries(
  Object.entries(copia).filter(([chave, valor]) => valor != null),
);

console.log(filtro);
