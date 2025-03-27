function calcularTotal(preco, quantidade){
    return preco * quantidade;
}

function aplicarDesconto(valorTotal){
  if (valorTotal > 100){
      return valorTotal * 0.9;
  }
}

function exibirResumo(preco, quantidade) {
  let valorTotal = calcularTotal(preco, quantidade);
  let valorComDesconto = aplicarDesconto (valorTotal);

  console.log('Resumo da Compra:');
  console.log(`-Valor total antes do desconto: R$ ${valorTotal.toFixed(2)}`);
  console.log(`- Valor final com desconto: R$ ${valorComDesconto.toFixed(2)}`);

}

let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));
let quantidadeComprada = parseInt(prompt("Digite a quantidade comprada:"));


exibirResumo(precoUnitario, quantidadeComprada);


