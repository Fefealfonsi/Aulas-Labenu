//Resumo
//Criar Objetos
//partes do objeto

const pessoa1={
    nome:"Fayra",
    idade:20,
    generoMusicalPreferido: "Pagode"
}

const pessoa2={
    nome:"Robs",
    idade:18,
    generoMusicalPreferido: "Pisadinha",
    corDosOlhos:"Castanhos"
}
//como acessar os valores do objeto com a notação de ponto.
pessoa1.nome //fayra
pessoa2.nome //Robs
//como acessar os valores do objeto com a notação de colchetes
pessoa1["nome"] //Fayra
pessoa2["nome"] //Robs
// Alterando propriedades já existentes
// console.log(pessoa2.idade);
pessoa2.idade=19
// console.log(pessoa2.idade);
//Criando propriedades novas

 pessoa1.corDosOlhos = "Azul"
 pessoa1.carro="LandRover 4x4"
// console.log(pessoa1);

//Como copiar o objeto com ...(espalhamento/spreed operator)
// const pessoa3={
//     ...pessoa1
// }
//alterar ou criar propriedades dentro do novo objeto copiado com ...
const pessoa3={
    ...pessoa1, //Como copiar o objeto com ...(espalhamento/spreed operator)
    nome:"Vitor",//alterei uma propriedade já existente
    bairro:"Ramos"//Criar uma propriedade nova
}
// console.log(pessoa3);
function imprimirObjeto () {
    //digite a sua solução aqui
    const estudante = {
        nome: "Gilson",
        sobrenome:"Barbosa",
        numeroMatricula:123456,
        notasSemestre:[8,6,2]
    }

    estudante.modulo = "modulo 1- Fundamentos"
    // console.log(estudante);
    console.log(estudante["nome"], estudante.notasSemestre[1], estudante.modulo);

    const novoEstudante={
        ...estudante,
        nome:"Astrodev",
        modulo:"modulo 2- FrontEnd",
        notasSemestre:[...estudante.notasSemestre, 9]

    }
 
    // console.log(novoEstudante);

    const estudantesLabenu = []
    estudantesLabenu.push(estudante, novoEstudante)
    console.log(estudantesLabenu);

}
imprimirObjeto()