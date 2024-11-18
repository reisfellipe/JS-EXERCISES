/*
    EXERCÍCIO PRÁTICO;
    Pedir para o usuário digitar um número de 1 a 6. Mostrar na tela uma mensagem diferente para cada número 
*/

function validarNumero(){
    
    let n = Number(prompt("Digite um numero:"));

    switch(n){
        case 1:
            alert("Você digitou o número 1");
            break;
        case 2:
            alert("Você digitou o número 2");
            break;
        case 3:
            alert("Você digitou o número 3");
            break;
        default:
            alert('Escolha entre 1 a 3');
    }

}

validarNumero();