let conta = 0
let pessoas = 0
let porcentagem = 0

const containput = document.querySelector("#conta")
containput.addEventListener("input", )

function recebervalorconta(eveent) {
    conta = Number(evento.target.value)
    calcular()
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

    calcular()
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

    if(evento.target.value !== "") {
        porcentagem = parseFloat(evento.target.value) / 100
    } else {
        porcentagem = 0
    }

    calcular()
}

const gorjetainput = document.querySelector("outra")
gorjetainput.addEventListener("input", receberporcentagem)

function calcular() {
    if(conta !== 0 && porcentagem !== 0 && pessoas !== 0) {
        const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
        strongGorjetaTotal.innerHTML = `R$ ${(conta * porcentagem / pessoas).toFixed(2)}`

        const strongtotal = document.querySelector(".total > strong")
        strongtotal.innerHTML = `R$ ${((conta + (conta * porcentagem)) / pessoas).toFixed(2) }`
    }

}

const botaolimpar = document.querySelector(".resultados button")
botaolimpar.addEventListener("click", limpar)

function limpar() {
    containput.value = ""
    botoesgorjeta.forEach(botao => {

        botoesgorjeta.classList.remove("botao-ativo")
    })
        
    gorjetainput.value = ""

    pessoasinput.value = ""

    document.querySelector(".gorjeta-total > strong").innerHTML = "R$ 0.00"
    document.querySelector(".total > strong").innerHTML = "R$ 0.00"
}