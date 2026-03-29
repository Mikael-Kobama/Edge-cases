interface Usuario {
  nome: string;
  email: string;
  telefone?: string;
}

const novoUsuario: Usuario = {
  nome: "Mikael",
  email: "Kobama@dev.com",
};

console.log(`Usuário criado: ${novoUsuario.nome}`);
