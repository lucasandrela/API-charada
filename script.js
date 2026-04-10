const cardInner = document.getElementById('card-inner');
const campoPergunta = document.getElementById('pergunta');
const campoResposta = document.getElementById('resposta');
const btnNova = document.getElementById('btn-nova');
const tentativa = document.getElementById('tentativa');
const btnVerificar = document.getElementById('btn-verificar');
const mensagem = document.getElementById('mensagem');

let podeVirar = false;

// Evento que faz o card girar apenas depois da tentativa
cardInner.addEventListener('click', function () {
    if (podeVirar) {
        cardInner.classList.toggle('[transform:rotateY(180deg)]');
    }
});

btnVerificar.addEventListener('click', function () {
    const respostaUsuario = tentativa.value.trim().toLowerCase();
    const respostaCorreta = campoResposta.textContent.trim().toLowerCase();

    if (respostaUsuario === '') {
        mensagem.textContent = 'Digite uma resposta antes!';
        mensagem.className = 'mt-3 text-sm font-semibold text-yellow-600';
        return;
    }

    // ... dentro do evento btnVerificar.addEventListener ...

    if (respostaUsuario === respostaCorreta) {
        mensagem.textContent = 'Acertou! 🎉 Gire a carta';
        mensagem.className = 'mt-3 text-xs font-bold uppercase text-green-600';
    } else {
        mensagem.textContent = 'Quase lá! 😅 Gire a carta';
        mensagem.className = 'mt-3 text-xs font-bold uppercase text-orange-600';
    }

    podeVirar = true;
});

async function buscarCharada() {
    try {
        // Sempre volta a carta para frente quando pegar nova charada
        cardInner.classList.remove('[transform:rotateY(180deg)]');

        // Resetar estados
        podeVirar = false;
        tentativa.value = '';
        mensagem.textContent = '';

        const url = 'https://api-charadas-mocha.vercel.app';
        const endPoint = '/charadas/aleatoria';

        const respostaApi = await fetch(url + endPoint);
        const dados = await respostaApi.json();

        campoPergunta.textContent = dados.pergunta;
        campoResposta.textContent = dados.resposta;

    } catch (erro) {
        campoPergunta.textContent = 'Ops, algo deu errado. Tente novamente mais tarde.';
        campoResposta.textContent = '';
    }
}

buscarCharada();

btnNova.addEventListener('click', buscarCharada);
