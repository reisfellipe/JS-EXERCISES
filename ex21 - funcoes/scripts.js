/*
    EXERCÍCIO PRÁTICO;
    Pedir para o usuário digitar um número e mostrar a tabuada desse numero de 1 a 1000.

    deve ter a possibilidade do usuário digitar outro número e também de limpar a tabuada gerada previamente.

*/

const output = document.getElementById('output'); //Não será necessário usar o # para setar o elemento, pois estamos usando o getElementById

let msg = '';

console.log(output);


for(let i = 0; i <= 1001; i++){
    msg += "i: " + i+ '<br>';
}
output.innerHTML = msg;