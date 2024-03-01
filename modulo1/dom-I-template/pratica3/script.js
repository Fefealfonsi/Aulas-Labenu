/*Resumo

eventos =>evento é uma ação do usuário(clicar, inserir, apertar)
eventos sempre vão receber uma função

chamamos os eventos no nosso html. 

no Js vamos fazer a função

onclick => usuário clica em algum elemento
onchange=> fazer uma mudança e clicar fora
onkeyup=> inserimos uma letra  no input e ele apor soltar o botão registra

*/

let contador=0
 const elementoH1 = document.getElementById("contador")

function contar() {
     contador+=1
     console.log(contador);
     elementoH1.innerHTML = contador
}
