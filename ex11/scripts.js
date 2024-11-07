/*
    EXERCÍCIO PRÁTICO;
    - Pedir para o usuario digitar um numero
    - converter para numero inteiro
    - Pedir para o usuario digitar outro numero
    - Converter em numero inteiro

    -> mostrar um alert o seguinte texto:
    "o resto da divisão de n1 por n2 é: resultado"

    -> Mostrar num alert o seguinte texto:
    "O numero n1 elevado a n2 é: resultado"


    */


    let n1 = parseInt(prompt("Digite um numero:"));
    let n2 = parseInt(prompt("Digite outro numero:"));
    const restDivision = (x,y) => x % y;
    const exp = (x,y) => x ** y;

    alert(`o resto da divisão de ${n1} por ${n2} é: ${restDivision(n1,n2)}`);
    alert(`O numero ${n1} elevado a ${n2} é igual: ${exp(n1,n2)}`);