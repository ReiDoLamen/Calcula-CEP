const cep = document.getElementById("cep");
const btnPesquisar = document.getElementById("btnPesquisar");
const saida = document.getElementById("saida");
const endereco = document.getElementById("migo");

// document.getElementById("saida").textContent= "Oi, mundo"

function obterCEP() {
    return cep.value;

}

 function apresentarDadosCEP(obj) {
    return(!obj.erro)?
    `${obj.logradouro} 
    ${obj.complemento} 
    ${obj.bairro} 
    ${obj.localidade}` : `CEP NÃO ENCONTRADO`

}
 


async function buscarDadosCEP () {
  try{
    let urlCEP = `https://viacep.com.br/ws/${obterCEP()}/json/`;
    let trazerCep = fetch(urlCEP);
    let resposta = await trazerCep;
    let dadosJson = await resposta.json();
    saida.innerText = apresentarDadosCEP(dadosJson);

  } catch(e) {
      saida.innerHTML = `<b>error</b>: <i>${e}</i>`;
  }

}

btnPesquisar.addEventListener("click", buscarDadosCEP);