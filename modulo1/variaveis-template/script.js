
// Como Declarar variáveis

// para dados que vão ser modificados usamos let
// para dados que não vão ser modificados usamos const
//  padrão camelCase
// tipos primitivos - string, numbers, booleans, null, undefined
//para atribuição de valor usamos sinal de '='

/*
let umaVariavel = "oi"
const outraVariavel = false
*/

const nome = prompt("qual seu nome? ")
let idade = Number(prompt("qual sua idade? "))
//let idade = +prompt("qual sua idade? ")
let presença = confirm("veio à aula hoje?")

// typeof é um comando js que serve para verificar o tipo de uma variável

//console.log(typeof nome)
console.log(typeof idade)
console.log(typeof presença)

// toda informação que vem do prompt retorna uma string prompt("qual seu nome ")
console.log("Estudante", nome, "tem", idade, "anos. Presença:", presença);

console.log("nome:", typeof nome, "idade:", typeof idade, "presença:", typeof presença);






