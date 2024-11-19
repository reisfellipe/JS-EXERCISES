/*
    EXERCÍCIO PRÁTICO;
    Mostrando números pares, utilizando loops de repetição

*/

function validarPares(){

    const numerosPares = [];

    for (let i = 1; numerosPares.length < 5; i++ ) {

        let numeroDigitado = Number(prompt("Digite algum numero"));
        
        if(numeroDigitado % 2 !== 0){
            numerosPares.push(numeroDigitado);
        } else {
            alert("Número não é impar, tente novamente");
        }
    }

    document.write(numerosPares);
    console.log(numerosPares)


}

validarPares();