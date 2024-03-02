let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let secretNum = randonNum();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMsgInicio() {
    exibirTexto('h1', '🕵️‍♂️ Adivinhe O Número Secreto 🕵️‍♀️');
    exibirTexto('p', '🔎 Escolha um número entre 1 e 10 🔎');
}

exibirMsgInicio();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == secretNum) {
        exibirTexto('h1', '🎉🎉🎉 Parabéns! Você acertou!! 🎉🎉🎉');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTexto('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > secretNum) {
            exibirTexto('p', '❌ O número secreto é menor que esse. ❌');
        } else {
            exibirTexto('p', '❌ O número secreto é maior que esse. ❌');
        }
        tentativas++;
        limpar();
    }
}

function randonNum() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeElementos = listaDeNumerosSorteados.length;
    if (quantidadeElementos == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return randonNum();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limpar() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limpar();
    exibirMsgInicio();
    secretNum = randonNum();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// A função exibirTexto() engloba esses dois códigos na linha 8 e 9 por serem bastante parecidos 
//let title = document.querySelector('h1'); Seleciona no html todos os <h1>
//title.innerHTML = 'Jogo de Adivinhação'; Muda o texto interno do h1
//let paragrafo = document.querySelector('p'); Seleciona no html os <p>
//paragrafo.innerHTML = '🔎 Escolha um número entre 1 e 10 🔎'; Muda o texto interno tbm
