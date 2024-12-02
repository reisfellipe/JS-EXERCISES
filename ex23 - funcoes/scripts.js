/*
    EXERCÍCIO PRÁTICO;
    Pedir para o usuário digitar um número e mostrar a tabuada desse numero de 1 a 1000.

    deve ter a possibilidade do usuário digitar outro número e também de limpar a tabuada gerada previamente.

*/


function mostrarTabuada(){
    
    let numero = parseInt(prompt("Digite um número para a tabuada:"));
    let max = parseInt(prompt("Digite o máximo para a tabuada:")) || 1000;

    for(let i = 1; i <= max; i++){
        mensagem += `${numero} x ${i} = ${numero * i}`;
        
    }

    output.innerHTML = mensagem;
}


function limparTabuada(){
    mensagem = '';
    output.innerHTML = mensagem;
}

let output = document.getElementById('output');
var mensagem = '';
