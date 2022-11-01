let resposta = document.querySelector("#resposta");
let botao = document.querySelector("#botao");


const calcularPotencia = (elemento_base, elemento_expoente) => {
    let resultado = Math.pow(elemento_base, elemento_expoente);
    
    resposta.textContent = resultado;
}

botao.addEventListener('click', function(){
    let elemento_base = document.querySelector("#base").value;
    let elemento_expoente = document.querySelector("#expoente").value;
    calcularPotencia(elemento_base, elemento_expoente);
});