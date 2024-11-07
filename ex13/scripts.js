/*
    EXERCÍCIO PRÁTICO;
    - Fazer jogador1 digitar um numero
    - fazer jogador2 digitar outro numero
    - SE forem iguais, mostrar mensagem "empate"
    - Sortear um numero entre 0 e 1

    - SE o numero sorteado for 0, ganha quem escolher o numero MENOR
    -SE o numero sorteado for 1, ganha quem escolher o numero MAIOR

*/

let numeroJogador1 = parseInt(prompt("Escolha um numero:"));
let numeroJogador2 = parseInt(prompt('Escolha um numero'));
const random = parseInt( Math.random() * 2 )

if(numeroJogador1 == numeroJogador2){
    alert('EMPATE!');
}else{    
    alert(`o numero sorteado é ${random}`)
    if(random == 0){
        if(numeroJogador1 < numeroJogador2 ){
            alert("Jogador 1 Venceu! Pois escolheu o numero menor: " +  numeroJogador1);
        }else{
            alert("Jogador 2 Venceu! Pois escolheu o numero menor: " + numeroJogador2)
        }
    }
    
    if(random == 1){
        if(numeroJogador1 > numeroJogador2 ){
            alert("Jogador 1 Venceu! Pois escolheu o numero maior:  " + numeroJogador1);
        }else{
            alert("Jogador 2 Venceu! Pois escolheu o numero maior: " + numeroJogador2)
        }
    }
}