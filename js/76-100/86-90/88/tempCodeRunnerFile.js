processarLote(pedidos).then((resultado) => {
//   const sucessos = resultado.filter((p) => p.status === "fulfilled");

//   const falhas = resultado.filter((p) => p.status === "rejected");

//   const faturamentoLiquido = sucessos.reduce((acc, att) => {
//     acc + att.value.pedido.preco * att.value.pedido.quantidade;
//     return acc;
//   }, 0);

//   const perdaEstimada = falhas.reduce((acc, att) => {
//     acc.preco + att.preco;
//     return acc;
//   });

//   const taxadeSucesso = (sucessos.length / pedidos.length) * 100;
//   // const gargalo = resultado

//   console.log({
//     faturamentoLiquido,
//     perdaEstimada,
//     taxadeSucesso,
//     // gargalo,
//   });
// });