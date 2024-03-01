const texto = document.querySelector("#paragrafo")
console.log(texto.innerHTML);

const inputTexto = document.getElementById("texto")

function pegarValorInput() {
    console.log(inputTexto.value);
    
}

function enviarValor(){
    texto.innerHTML = inputTexto.value
}