/*
    EXERCÍCIO PRÁTICO;
    Mostrar taboada até o 100, porém, quebrar linha a cada 10 números.
*/

function calculandoTabuada(){

    let numero = Number(prompt("Digite algum numero para saber a tabuada: "));

    let i = 0;

    while(i < 100) {
        document.write(`${numero} x ${i} = ${numero * i} <br>`);

        if(i % 10 === 0 && i > 0 ){
            document.write("<hr>");
        }
        i++;
    }

}

calculandoTabuada();