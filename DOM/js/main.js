// O querySelector ele é usado para termos registrado um elemento do html com o uso de seu id
const robotron = document.querySelector("#roboz");

// o addEventListener ele "escuta" oq é feito apartir de um botão, texto, submit, etc... E nos permite criar eventos ou acionar funções
robotron.addEventListener("click", dizoi);

function dizoi(nome) {
    console.log("oi");
    console.log(`Bem-vindo ao ROBOTRON 2000 ${nome}`);
}

// somar e subtrair valores

// const subtrair = document.querySelector("#subtrair");
// const somar = document.querySelector("#somar");
// const braco = document.querySelector("#braco");

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const peca = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) =>{
    elemento.addEventListener("click", (evento) => {
        SubSum(evento.target.dataset.controle, evento.target.parentNode);
        atualizarStts(evento.target.dataset.pecas);
    })
})

function SubSum(operacao, peca) {
    const controle = peca.querySelector("[data-contador]");

    if (operacao === "-") {
        controle.value = parseInt(controle.value) - 1;
    }else{
        controle.value = parseInt(controle.value) + 1;
    }
}

function atualizarStts(pecas) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + peca[pecas][elemento.dataset.estatistica];
    })

}
