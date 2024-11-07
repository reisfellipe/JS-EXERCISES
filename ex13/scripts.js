/*
    EXERCÍCIO PRÁTICO;
    - Pedir para o usuario digitar um numero
    - converter para numero real
    - Pedir para o usuario digitar outro numero
    - Converter em numero real

    - Calcular os dois valores, e exibir a média.
    - Mostrar um boolean indicando se a media for maior que 5

*/

let n1 = parseFloat(prompt('Primeira nota:'));
let n2 = parseFloat(prompt('A segunda nota:'));
const media = (n1 + n2) / 2;

// alert(media > 5)

if(media > 5){
    alert('Acima da média ' + media);
}else{
    alert('Abaixo da média ' + media);
}