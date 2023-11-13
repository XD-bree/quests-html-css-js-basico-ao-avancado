const cep = document.querySelector('#inCep')
const rua = document.querySelector('#inRua')
const bairro = document.querySelector('#inBairro')
const cidade = document.querySelector('#inCidade')
const estado = document.querySelector('#inEstado')
const ibge = document.querySelector('#inIbge')
const message = document.querySelector('#message')


cep.addEventListener('focusout', async () => {

    try {
        const onlyNumbers = /^[0-9]+$/
        const cepValido = /^[0-9]{8}$/

        if (!onlyNumbers.test(cep.value) || !cepValido.test(cep.value)) {
            throw { cep_error: 'Cep invalid' }
        }

        const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

        if (!response.ok) {
            throw await response.json
        }

        const responseCep = await response.json()

        rua.value = responseCep.logradouro
        bairro.value = responseCep.bairro
        cidade.value = responseCep.localidade
        ibge.value = responseCep.ibge
        


    } catch (error) {
        if (error?.cep_error) {
            message.innerText = error.cep_error
            setTimeout(() => {
                message.innerText = ' '
            }, 5000)
        }
    }

})