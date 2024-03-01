// Acompanhe a Prática 
//Resumo
// Blocos de código que servem para executar uma ação, sem repetição do código.


//const let => declaração da variável
//function => declaração da função
//nome
//parâmetros - como se fossem variáveis que vamos declarar dentro da função, são as partes que irão variar


//Prática 1
// function dizerOla(nome){

//    console.log(`Olá ${nome}`)
// }


// const dizerOla = function(nome){
//     console.log(`Olá ${nome}`)
// }

// const result =dizerOla("Victor")
// console.log("AQUI", result);
// dizerOla("Peter")
// dizerOla("Caio")

// //Prática2

// const qqVariavel = "Aqui é escopo Global"

// function verificarSeParSomarCom10EMultiplicarPeloNumero(numero){

//     const resultado = numero%2===0
//     const soma=numero+10
//     const multiplica= numero*numero
    
//     return `o número ${numero} é par? ${resultado}. Somado com 1O é igual a ${soma} e multiplicado por ele mesmo é ${multiplica}`
    
//     console.log("AQUI EU não IMPRIMO");

// }

// const resultadoDaFuncaoCom8 = verificarSeParSomarCom10EMultiplicarPeloNumero(8)
// const resultadoDaFuncaoCom9 = verificarSeParSomarCom10EMultiplicarPeloNumero(9)
// const resultadoDaFuncaoComString= verificarSeParSomarCom10EMultiplicarPeloNumero("oi")

// console.log(resultadoDaFuncaoCom8);
// console.log(resultadoDaFuncaoCom9);
// console.log(resultadoDaFuncaoComString);

//  console.log(qqVariavel);//1
//  console.log(resultado);//2
//  console.log(soma);//3
//  console.log(multiplica);//4

 //Prática 3

//  function verificarUsuario(login, senha) {
//      const loginArmazenado = "Astrodev"
//      const senhaArmazenada = "bananinha123"
//      const resultado = login===loginArmazenado &&senha===senhaArmazenada

//      return resultado
//  }

//  const verificarUsuario = (login, senha)=>{
//     const loginArmazenado = "Astrodev"
//     const senhaArmazenada = "bananinha123"
//     const resultado = login===loginArmazenado &&senha===senhaArmazenada

//     return resultado
//  }

//  const resultadoLogin = verificarUsuario("Astrodev", "bananinha123")
//  console.log("Resultado da Função 1",resultadoLogin);

//  console.log("Resultado da Função 2",verificarUsuario("Caio", "bananinha123"));




 

 const num = Number(prompt("digite um número"))

 function tabuada(numero){
    console.log(numero*1)
    console.log(numero*2)
    console.log(numero*3)
    console.log(numero*4)
    console.log(numero*5)
    console.log(numero*6)
    console.log(numero*7)
    console.log(numero*8)
    console.log(numero*9)
    console.log(numero*10)

 }
 
 tabuada(num)
