let alturas = [];
let homens = 0;
let somaAlturaHomens = 0;
let mulheres = 0;


for (let i = 0; i < 15; i++) {
    let altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1}:`));
    let genero = prompt(`Digite o gênero da pessoa ${i + 1} (Masculino/Feminino):`);

    alturas.push(altura);

    if (genero.toLowerCase() === "masculino") {
        homens++;
        somaAlturaHomens += altura;
    } else if (genero.toLowerCase() === "feminino") {
        mulheres++;
    }
}


let maiorAltura = Math.max(...alturas);
let menorAltura = Math.min(...alturas);


let mediaAlturaHomens = homens > 0 ? somaAlturaHomens / homens : 0;


console.log(`Maior altura: ${maiorAltura.toFixed(2)}m`);
console.log(`Menor altura: ${menorAltura.toFixed(2)}m`);
console.log(`Média de altura dos homens: ${mediaAlturaHomens.toFixed(2)}m`);
console.log(`Número de mulheres no grupo: ${mulheres}`);
