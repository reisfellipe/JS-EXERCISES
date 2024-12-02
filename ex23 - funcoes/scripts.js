/*
    EXERCÍCIO PRÁTICO;

    Elaborar uma calculadora simples, onde o usuario irá decidir um numero inicial para iniciar as operações que serão feitas,
    e o usuario irá decidir o tipo de operação que irá realizar, e o usuario irá decidir o valor que irá ser adicionado ou subtraído. E assim por diante...
*/

let numero_inicial = Number(prompt("Digite o número inicial: "));

let output = document.getElementById('output');
let resultado = document.getElementById('resultado');

output.innerHTML = <p>${numero_inicial}</p>;

function divisao(x,y){
    return x/y;
}

function multiplicacao(x,y){
    return x*y;
}

function subtracao(x,y){
    return x-y;
}

function soma(x,y){
    return x+y;
}

