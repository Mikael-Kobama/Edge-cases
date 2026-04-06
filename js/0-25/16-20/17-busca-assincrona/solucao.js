const buscarDadosApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 101,
        usuario: "Mikael Kobama",
        status: "Ativo",
        origem: "Cloud Infrastructure",
      });
    }, 2000);
  });
};

const executarProcesso = async () => {
  console.log("⏳ Iniciando busca de dados...");

  try {
    const dados = await buscarDadosApi();
    console.log("✅ Dados recebidos com sucesso:", dados);
  } catch (erro) {
    console.error("❌ Falha na comunicação com a API", erro);
  }
};

executarProcesso();
