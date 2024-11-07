/*
    EXERCÍCIO PRÁTICO;
    -Pedir ao usuario que digite dois numeros diferentes, e depois passar um valor médio
*/

let n1 = Number(prompt("Digite a primeira nota:"));
let n2 = Number(prompt("Qual a segunda nota?"));

const notaMedia = (x,y) => {
    return (x + y) / 2;
}

alert(`A sua média no bimestre foi de: ${notaMedia(n1,n2)}`);

