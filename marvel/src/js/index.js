const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;
        
        const personagemEscolhido = document.querySelector('.escolhido')
        personagemEscolhido.classList.remove('escolhido')
        
        personagem.classList.add('escolhido')

    const imagemJogador1 = document.getElementById('personagem-jogador-1')
    imagemJogador1.src = `../src/imagens/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name');

    nomeJogador1.innerHTML = nomeSelecionado
    })
})