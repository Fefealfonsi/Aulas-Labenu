//CODIGO AQUI
 //operadores aritiméticos 

 // - subtração 
 // * multiplicação
 // /divisão
 // ** exponenciação
 // % resto de uma divisão  (modulo)
 // + soma com os números  

 //  const soma = 1+2//3
//  const soma2 = "1"+"2"//12

 // Operadores Racionais ( ou comparadores) sempre vão devolver um boolean 
 // verdadeiro ou falso
 // < menor ou <= menor ou igual
 //> maior ou >= maior ou igual
 // === igualdade(tanto valor como tipo ) "2"===2 // false
//!== diferente 
 
//Operadores Lógicos sempre vão devolver um boolean 
// verdadeiro ou falso
// &&(E) só será verdadeiro se as duas comparações forem verdadeiras.
// Não estou com fome && não tem comida na geladeira // false
// || (OU) só será falso se as duas comparações forem falsas
// eu não ando de bicicleta || não ando de patins // false
//! (Não) true=> false  false=>true


 //prática 1

//  const valorDoProduto = +prompt("Coloque o valor do produto") //nunber
//  const porcentagemDoDesconto = Number(prompt("digite o valor do desconto em porcentagem"))//number

//  //preço original x (porcentagem de desconto  ÷ 100).

//  const valorDoDesconto = valorDoProduto*(porcentagemDoDesconto/100)
//  console.log("O valor do desconto é de R$",valorDoDesconto);

//  const valorDoProdutoComDesconto = valorDoProduto - valorDoDesconto
//  console.log("O valor final do produto com desconto é de R$", valorDoProdutoComDesconto);

 //prática 2

 //IMC = peso ÷ (altura x altura).

// const pesoAntesDoExercicio = +prompt("Qual seu peso anterior");
// const pesoMaromba = +prompt("Qual seu peso depois do exercicio");
// const altura = +prompt("Qual sua altura")


// const imcAnterior = pesoAntesDoExercicio /(altura*altura)
// const imcMaromba = pesoMaromba /(altura*altura)

// console.log("imc anterior", imcAnterior);
// console.log("imc atual", imcMaromba);

// console.log(imcMaromba>= imcAnterior);
// console.log(imcMaromba<= imcAnterior);

//prática 3

const anoDeNascimentoUsuario = +prompt("Qual seu ano de nascimento")
const anoDeNascimentoDoAcompanhante = Number(prompt("Qual o ano de nascimento do seu acompanhante"))

const anoAtual = 2023

const idadeDoUsuario = anoAtual-anoDeNascimentoUsuario
const idadeDoAcompanhante= anoAtual-anoDeNascimentoDoAcompanhante

console.log("O usuário e o seu acompanhante tem maioridade", idadeDoUsuario>=18 && idadeDoAcompanhante>=18); //true
console.log("O usuário ou o seu acompanhante tem maioridade?",idadeDoUsuario>=18 || idadeDoAcompanhante>=18 );
console.log("Ambos não têm maioridade?", !(idadeDoUsuario>=18) && !(idadeDoAcompanhante>=18));