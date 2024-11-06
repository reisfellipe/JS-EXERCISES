// var nome = prompt("Qual é o seu nome?");
// alert(`Seja bem vindo, ${nome}`);

//pedir para o usuário digitar um numero
//pedir para o usuário digitar outro numero
//mostrar a soma

let n1 = Number(prompt('Digite um número:'));
let n2 = Number(prompt('Digite outro número:'));
const soma = (x,y) => x + y;

// Jeito mais simples que mostrar a soma seria
// alert( n1 + n2 )

alert(`A soma de ${n1} com ${n2} é igual a: ${soma(n1,n2)}`);