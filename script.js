const img = document.getElementById('img')
const buttons = document.getElementById('buttons')

const trocarLuz = (event)=>{
    turnOn[event.target.id]()//identificar qual o id de cada botão para trocar as cores corretamente
}

const turnOn = { // objeto com função para trocar as imagens
    'red': ()=> img.src = './img/vermelho.png',
    'yellow': ()=> img.src = './img/amarelo.png',
    'green': ()=> img.src = './img/verde.png'
}

buttons.addEventListener('click',trocarLuz)