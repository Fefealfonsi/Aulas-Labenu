/* RESUMO
windows

BUSCAR ELEMENTOS HTML
mais comuns:
document.getElementById => devolver um objeto
document.querySelector => devolve um objeto e pega  o primeiro elemento que corresponde ao seletor especificado

getElementsByClassName e getElementsByTagName=>devolvem um HTMLCollection que podemos acessar usando a mesma notação para acessar valores de um array

MANIPULAR E MODIFICAR UM ELEMENTO HTML
  InnerHTML 
*/
const oSapo= window.document.getElementById("sapo")
//console.log(oSapo.innerHTML);
oSapo.innerHTML+= " pé"

const evidencias = document.getElementById("poema")
evidencias.innerHTML+= "<b> evidências</b>"

 document.querySelector('#sabedoria').innerHTML+=" voando"

 const tag = document.getElementsByTagName("h4")
 console.log(tag[0].innerHTML);
 tag[0].innerHTML+= " pica-pau"

 const classe =document.getElementsByClassName("roberto")

 classe[0].innerHTML+=" vivi"