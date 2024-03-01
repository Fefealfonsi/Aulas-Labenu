const primeiroNumero = +prompt("Insira um número" )
const segundoNumero = +prompt("Insira outro número" )

console.log("O primeiro numero é maior que o segundo?", primeiroNumero > segundoNumero);

console.log("O primeiro numero é igual ao segundo", primeiroNumero === segundoNumero);

console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero%segundoNumero===0);

console.log("O segundo numero é divisível pelo primeiro", segundoNumero%primeiroNumero===0);

