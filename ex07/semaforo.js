const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stopChangingColor();
    turnOn[event.target.id]();
}

const nextIndex = () => {

    colorIndex = colorIndex < 2 ? ++colorIndex : 0;

    // A expressão regular acima significa a expressão condicional abaixo de if e else em uma unica linha

    // if (colorIndex < 2){
    //     colorIndex++
    // }else {
    //     colorIndex = 0;
    // }
}

const changeLightColor = () => {
    const colors = ['red', 'yellow', 'green']; 
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopChangingColor = () => {
    clearInterval( intervalId );
}

const turnOn = {
    'red':    () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green':  () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changeLightColor, 1500)
}

buttons.addEventListener('click', trafficLight);
