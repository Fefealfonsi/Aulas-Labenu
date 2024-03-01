/* RESUMO
-inicio
-condição de continuação
-ações a serem repetidas
- um incremento ( que vai afetar a condição de continuação)

*/

/*WHILE
- laço mais simples

const inicio = 0
while(condição){
    bloco de execução

    incremento
}
fim

*/

/*FOR
for(inicialização;condição;incremento){
    ação
}
*/
/*FOR COM ARRAY*/

//prática 1

function somarNumeros() {
     let numero = Number(prompt("insira um numero"))
     let soma = 0

     while (numero!==0) {
          soma=soma+numero
          //soma+=numero

         numero = Number(prompt("insira um numero"))
     }

     console.log(soma);

}
// somarNumeros()

// Prática 2

const imprimirNumero=()=>{
    let numero = +prompt("Insira um número")
   //3
    for(let i=0;i<=numero;i++){
        console.log(i);
        
    }
    console.log("fim");
   
}
// imprimirNumero()

//prática 3

const imprimeLista=function(){
    const listaDeNumeros = [10,20,30,40,50,60,70,80, 90, 1100]
   
    for(let indice=0;indice<listaDeNumeros.length;indice++){
        console.log(`O elemento de índice ${indice} é ${listaDeNumeros[indice]}`)
    }

}
imprimeLista()