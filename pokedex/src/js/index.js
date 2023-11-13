/*
quando clicar no pokémon da lista temos que esconder o cartão do pokémon que já está aberto e mostrar o cartão correspondente ao que foi selecionado

para isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - card do pokemon

precisa criar duas variáveis JS para trabalhar com os elementos na tela

nesse caso, o evento de clique feito pelo usuário na lista de pokemons deve ser trabalhado:

- remover a classe aberto do cartão que está aberto
- ao clicar em um pokémon na lista pegamos o ID desse pokemons para mostrar o card correspondente
- remover a classe ativo que o marca o pokémon selecionado 
- adicionar a classe ativo no item da lista selecionado  
*/

// 1 - precisa criar duas variáveis JS para trabalhar com os elementos na tela 

const listaSelecaoPokemons =  document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card-pokemon')

// 2 - fazer um evento de clique 

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //remover a classe aberto só do cartao que está aberto
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')

        //- ao clicar em um pokémon da lista pegamos o ID desse pokemon para mostrar o card correspondente
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir ='cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // remover a classe ativo que marca o pokémon selecionado 
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // adicionar a classe ativo que marca o pokémon selecionado 
     const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
     pokemonSelecionadoNaListagem.classList.add('ativo')
    })

     

})
