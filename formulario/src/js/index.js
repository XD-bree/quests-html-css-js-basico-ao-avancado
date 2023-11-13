const btnEnviar = document.getElementById("btn-enviar")
const campos = document.querySelectorAll(".field, .mensagem")

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault() 
    
    campos.forEach(field => {
        if(field.value) {
            field.classList.remove("naoPreenchido")
            field.classList.add("preenchido")
            field.nextElementSibling.style.display = "none"
        } else {
            field.classList.remove("preenchido")
            field.classList.add("naoPreenchido")
            field.nextElementSibling.style.display = "block"
        }
    })
})







