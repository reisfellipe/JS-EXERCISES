/*
    EXERCÍCIO PRÁTICO;
    PROBLEMA: Pedir para o usuário digitar dois numeros e mostrar uma mensagem informando se foi aprovado ou não. A nota de corte é 5. Contudo, se qualquer uma das notas for zero, reprova imediatamente.

    !   Não (not)
    &&   E  (and)
    ||  Ou  (or)

    Controle de decisão

    Se nota1 > 0 E nota2 > 0 E media > 5
        mostra mensagem de parabéns
    Senão
        Mostra mensagem de reprovação 

*/

function validarAprovacao(){
    
    let nota1 = Number(prompt("Qual a primeira nota?"));
    let nota2 = Number(prompt("Qual a segunda nota?"));
    let media = (nota1 + nota2) / 2;
    
    if(media > 5 && nota1 > 0 && nota2 > 0){
        alert("Parabéns! Você está aprovado!");
    } else {
        alert("Você está desaprovado!");
    }
    

}

validarAprovacao();