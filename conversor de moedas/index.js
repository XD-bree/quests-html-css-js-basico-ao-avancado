const btnCalcular = document.querySelector('.btn-calcular') 
const apiKey = '4fb595a3bfd002022873';
const endpoint = 'https://free.currconv.com/api/v7/convert';

btnCalcular.addEventListener("click", () => {
    converterMoeda();
})

// Nenhum parâmetro é fornecido para esta função pois as variáveis obtem os valores diretamente dos campos de entrada com os IDS. Nesse caso não há necessidade de passar esses valores como parâmetros para à função, pois estes já são capturados diretamente no DOM usando javascript
async function converterMoeda() { 
    const valor = document.getElementById('inValor').value //Captura os valores insiridos pelo usuário
    const moedaOrigem = document.getElementById('inMoedaOrigem').value.toUpperCase()
    const moedaDestino = document.getElementById('inMoedaDestino').value.toUpperCase()

    // URL da API construida através do ENDPOINT e da chave API fornecida
    const url = `${endpoint}?apiKey=${apiKey}&q=${moedaOrigem}_${moedaDestino}&compact=ultra`; 

    // A função `fetch (url)` faz uma solicitação a API usando a URL construída acima.
    try {
        const response = await fetch(url); // O AWAIT pausa a execução até que a resposta da API seja recebida
        const data = await response.json(); // O código então transforma a resposta da API em JSON usando `await response.json()`
        const taxaCambio = data[`${moedaOrigem}_${moedaDestino}`]; // A taxa de cãmbio é obtida a partir dos dados da API, e o valor convertido é calculado.
        const resultado = valor * taxaCambio;
        document.getElementById('resultado').innerText = `${valor} ${moedaOrigem} é equivalente a ${resultado.toFixed(2)} ${moedaDestino}`
    } catch (error) {
        document.getElementById('resultado').innerText ='Erro ao converter moeda:'
    }
}









