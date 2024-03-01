// --------------- PRÁTICA GUIADA ---------------

/*RESUMO
______for com if_____
const numeros = [08, 37, 39, 50, 59, 60];

for(let i = 0; i < numeros.length; i++){
	
	if(numeros[i]%2 === 0) {
		console.log("o número é par");
	}else{
		console.log("o número é ímpar");
	}

}

______if com for_____

const pergunta = confirm("Você gostaria de receber a tabuada do 7,") 

if(pergunta){
  for(let i=1; i<=10; i++){
    console.log(7*i)
  }
}else{
  console.log("Ahh que pena!Até a próxima")
}

______for com for_______

const casaisFamosos=[["Brad Pitt", "Angelina Jolie"], ["Beyonce", "JZ"], ["Thais Araújo", "Lázaro Ramos"]]
for (let index = 0; index < casaisFamosos.length; index++) {
   let arraysDDeDentro = casaisFamosos[index]
   
  for (let i = 0; i < arraysDDeDentro.length; i++) {
   
    arraysDDeDentro[i]
  }
  
}

const animais = ["gato", "rato", "pato"]
const animais2 = [{nome:"gato", pelo: true}, {nome:"rato", pelo: true}, {nome:"pato", pelo: false}]

_____for of______
Devolve o item do array

for (const item of animais) {
  console.log(`${item.nome }, ${item["pelo"]}`);
}

____for in____
Devolve o indice do array co mo string

for (const indice in animais) {
  console.log(indice);
}

const bicho={
  nome:"gato", 
  pelo: true
}

for (const chave in bicho) {
 console.log(chave);
 console.log(bicho[chave]);
  
}
*/


// Pratica 1

const bimestre1 = [ 4, 6, 8, 8 ]
const bimestre2 = [ 5, 5, 4, 7 ]
const bimestre3 = [ 3, 3, 7, 6 ]
const bimestre4 = [ 8, 8, 7, 10]


const notasDoAno=[bimestre1, bimestre2, bimestre3, bimestre4]


// for(let index in notasDoAno ){

//   let bimestre = notasDoAno[index]
//     //console.log(bimestre);
//   let soma=0
//   for(let nota of bimestre){
//      console.log(nota);
//     soma = soma+ nota
//   }
//   console.log(`A soma das notas do bimestre ${Number(index)+1} é: ${soma}
//   A média do bimestre ${index+1}é: ${ soma/bimestre.length}
//   `);
// }

// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
      'Denise Fraga'
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

for (let i in filmes) {

  let titulo = filmes[i].titulo
  let ano = filmes[i].ano
  let diretor = filmes[i].diretor
  let elenco = filmes[i].elenco//array de elenco
  let num = 0
  console.log(`${titulo}, de ${ano}, dirigido por ${diretor}`);

  for (let ator of elenco) {

    num+=1

    console.log(`Ator/Atriz ${num}: ${ator}`)
   
    
  }
 
  
}