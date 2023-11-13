// Selecionar os elementos HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")

// Captar o clique do usuário nos botões
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // Marcar o botão clicado com selecionado
        selecionarBotaoCarrossel(botao);

        // Esconder a imagem ativa de fundo
        esconderImagemAtiva();

        // Fazer a imagem de fundo correspondente ao botão clicado aparecer

        mostrarImagemCorrespondente(indice);
    })
})

function mostrarImagemCorrespondente(indice) {
    imagens[indice].classList.add("ativa");
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

