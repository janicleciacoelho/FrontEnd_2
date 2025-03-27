
// Crie um array com 5 nomes e exiba o terceiro nome no console.

let alunos = ["Ana", "Bruna", "Daniela", "Filipe", "Izabella"]
console.log(alunos[2]);

//•Adicione um nome ao final e um no início do array.

nomes.push("Scheilla");
nomes.unshift("Sabrina");

//•Remova o último nome e exiba o array atualizado.
nomes.pop();
console.log(nomes);

//•Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8].
let numeros = [2, 4, 6, 8];
let dobrados = numeros.map(num => num * 2);
console.log(dobrados);

//•Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]
let listaNumeros = [1, 3, 5, 7, 9];
let filtrados = listaNumeros.filter(num => num > 5);
console.log(filtrados);

