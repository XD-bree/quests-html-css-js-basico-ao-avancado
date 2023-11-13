const adviceButton = document.querySelector(".advice-update")
const adviceNumber = document.querySelector(".advice-id")
const adviceDescription = document.querySelector(".advice-description")


async function mostrarConselho() {
    const response = await fetch("https://api.adviceslip.com/advice")
    const conteudo = await response.json()
    const adviceId = `Advice #${conteudo.slip.id}`
    const adviceText = `"${conteudo.slip.advice}"`

    adviceNumber.innerHTML = adviceId
    adviceDescription.innerHTML = adviceText
}

adviceButton.addEventListener("click", mostrarConselho)


mostrarConselho()