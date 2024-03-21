let conta = 0
let pessoas = 0
let porcentagem = 0

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

const botoesgorjeta = document.querySelectorAll(".gorjeta input[type='number']")
botoesgorjeta.forEach(botao => {
    botao.addEventListener("click", receberporcentagem)
})

function receberporcentagembotao(evento) {
    botoesgorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")

        if(botao.value === evento.target.value) {
            botao.classList.add("botao-ativo")
        }
    })

    porcentagem = parseFloat(evento.target.value) / 100

    console.log(porcentagem)
}