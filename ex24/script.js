//Entendendo programação assíncrona
//callback > promise > async/await

const numero = document.getElementById('numero');

//Criando a promessa
let promise = new Promise((resolve, reject) => {
    let resultado = true;
    let tempo = 3000;
    
    setTimeout(() => {
        if(resultado){
            resolve("Deu tudo certo.")
        }else{
            reject("Deu tudo errado.")
        }
    }, tempo);
}); 

promise.then((retorno) => {
    numero.innerHTML = retorno;
    numero.classList.remove("erro"),
    numero.classList.add("ok");
    console.log(retorno);
}).catch((e) => {
    numero.innerHTML = e;
    numero.classList.add("erro");
    numero.classList.remove("ok");

})


numero.innerHTML = "Processando..."