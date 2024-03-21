let conta = 0
let pessoas = 0

const containput = document.querySelector("#conta")
containput.addEventListener("input", )

function recebervalorconta(eveent) {
    conta = Number(evento.target.value)
}

const pessoasinput = document.querySelector("#pessoas")
pessoasinput.addEventListener("input", )

function receberquantidadepessoas(evento) {
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(",pessoas .inut-box")
    if(evento.target.value === "0") {
        paragrafoErro.getElementsByClassName.display = "block"
        divErro.setAttribute("id", "erro-div")

    } else {
        paragrafoErro.getElementsByClassName.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number (evento.target.value)
    }
}