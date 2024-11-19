/*
    EXERCÍCIO PRÁTICO;
    Pedir para o usuario digitar um número e mostra a tabuada desse numero de 1 a 1000.

*/

function validarNumero(){
    
    let n = parseInt(prompt("Digite um numero: "));

    for(let i = 0; i <= 10; i++){
        document.write(`${n} x ${i} = ${n * i}<br>`);
    }


    // do {
    //     document.write(`${n} X 1 = ${n * 1}<br>`);
    // }while (n <= 1000)

}

validarNumero();