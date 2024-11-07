/*
    EXERCÍCIO PRÁTICO;
    - Pedir para o usuario digitar um numero
    - converter para numero inteiro
    - Pedir para o usuario digitar outro numero
    - Converter em numero inteiro

    - Calcular os dois valores, e exibir a média.
    - Mostrar um boolean indicando se a media for maior que 5

*/

let n1 = parseInt(prompt('Primeira nota:'));
let n2 = parseInt(prompt('A segunda nota:'));
const media = (x,y) => (x + y) / 2;

if(media > 5){
    alert('Acima da média ' + media(n1,n2));
}else{
    alert('Abaixo da média ' + media(n1,n2));
}