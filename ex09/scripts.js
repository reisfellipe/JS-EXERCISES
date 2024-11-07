/*
    EXERCÍCIO PRÁTICO;
    -Pedir para o usuario digitar um numero
    -Converter em numero inteiro
    -Pedir ao usuário que digite outro numero
    -converter em numero inteiro

    -> Mostrar a subtração concatenando com o texto "a subtração é:..."
    
    -> Mostrar a multiplicação concatenando com o texto "a multiplicação é:..."

    -Mostrar a divisão concatenando com o texto "a divisão é:.."

    -Mostrar a soma concatenando com o texto "a soma é:..."
*/

let n1 = Number(prompt('Digite um numero:'));
let n2 = Number(prompt('Digite outro numero:'));

const subtracao = (x,y) => x - y;
const soma = (x,y) => x + y;
const multiplicacao = (x,y) => x * y;
const divisao = (x,y) => x / y;

alert(`A subtração de ${n1} por ${n2} é: ${subtracao(n1,n2)}`);
alert(`A soma de ${n1} com ${n2} é igual a: ${soma(n1,n2)}`);
alert(`A multiplicação de ${n1} vezes ${n2} é igual a: ${multiplicacao(n1,n2)}`);
alert(`A divisão entre ${n1} e ${n2} é: ${divisao(n1,n2)}`);