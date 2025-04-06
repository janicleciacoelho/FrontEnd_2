function calcularMontante() {
  // Coletar os dados usando prompt
  let capital = parseFloat(prompt("Informe o capital inicial investido:"));
  let taxaJuros = parseFloat(prompt("Informe a taxa de juros mensal (em %):"));
  let tempo = parseInt(prompt("Informe o tempo do investimento (em meses):"));

  // Converter taxa percentual para decimal
  let taxaDecimal = taxaJuros / 100;

  // Calcular montante
  let montante = capital * Math.pow(1 + taxaDecimal, tempo);

  // Exibir resultado com duas casas decimais
  alert("O montante ao final do período será de R$ " + montante.toFixed(2));
}

// Chamar a função
calcularMontante();



