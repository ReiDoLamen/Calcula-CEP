const cep = document.getElementById("cep");
const btnPesquisar = document.getElementById("btnPesquisar");
const saida = document.getElementById("saida");

// document.getElementById("saida").textContent= "Oi, mundo"

function obterCEP() {
    return cep.value;

}

async function mostrarNaTela () {
    let urlCEP = `https://viacep.com.br/ws/${obterCEP()}/json/`;
    let trazerCep = fetch(urlCEP);
    let resposta = await trazerCep;
    let dadosJson = await resposta.json();

    console.log(dadosJson)
}

btnPesquisar.addEventListener("click", mostrarNaTela);