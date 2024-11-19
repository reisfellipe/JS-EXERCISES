/*
    EXERCÍCIO PRÁTICO;
    Mostrando números impares, utilizando loops de repetição

*/

function validarImpares(){
    
    let numerosImpares = [];
    
    for (let i = 0; numerosImpares.length < 10; i++) {
        
        let numeroDigitado =  Number(prompt("Digite algum numero:"));

        if(numeroDigitado % 2 !== 0){
            numerosImpares.push(numeroDigitado);
        } else{
            console.log(`O ${numeroDigitado} não é ímpar, tente novamente.`);
        }
    }

    console.log(numerosImpares)
}

validarImpares();