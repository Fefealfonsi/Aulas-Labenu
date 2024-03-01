//Prática 1
// function imprimirPessoa (){
//    const nome = prompt("Digite seu nome")
//    const cor = prompt("Digite sua cor favorita")
//    console.log("A cor favorita de " +nome+" é "+ cor+".");

//    console.log(`A cor favorita de ${nome} é ${cor}.`);
// }

// imprimirPessoa()

//Prática 2
// function imprimirPessoa (){
//     const nome = prompt("Digite seu nome")
//     const cor = prompt("Digite sua cor favorita")
//     const citacao = prompt("digite sua citação favorita")


 
//     //console.log(`A cor favorita de ${nome} é ${cor}.`);
//     console.log(`Nome:${nome} \n Cor favorita: ${cor}`);
//     console.log("\""+citacao+"\"");// \" 
   
//  }
 
//  imprimirPessoa()

// const template = `Nome:${nome} \n Cor favorita: ${cor}`

// Prática 3



// function imprimirPessoa (){
//     const nome = prompt("Digite seu nome")
//     const cor = prompt("Digite sua cor favorita")
//     const citacao = prompt("digite sua citação favorita")


 
//     //console.log(`A cor favorita de ${nome} é ${cor}.`);
//     console.log(`Nome:${nome.toUpperCase()} \n Cor favorita: ${cor}`);
//     console.log("\""+citacao+"\"");// \" 
//     console.log(nome.length);
//     console.log(nome.includes("a"));
//  }
 
//  imprimirPessoa()

 //Extra

 function verificaLogin() {
    const nome = prompt("Qual seu nome")
    const email = prompt("Qual seu email")

    const frase = `O e-mail ${email} foi cadastrado com sucesso.\nBoas vindas, ${nome} a quantidade de caracter no seu nome é ${nome.length}!`

    console.log(frase.replaceAll("r", "x"));
    console.log(`O email ${email} possui o caracter "@"? ${email.includes("@")}` );
     
 }
 verificaLogin()