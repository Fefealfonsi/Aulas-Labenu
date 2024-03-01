//resumo
const variavel = "olá"

const arrayDeCoisa = ["Olá", "Bom dia", "Como vai?", 1, 43, 98, true, false, [1,2,3]]
//indice                0        1            2
// declaração=[]

//acessar informação
// console.log(arrayDeCoisa[2])
//array.length - verifica a quantidade de itens presentes no array.
//.includes()- serve para encontrar um item no array
//.indexOf() - encontra o indice de um item
//__________________________________________________________
function imprimirArray (){
  //digite a sua solução aqui
  const primeiro = ["Chaves", `Quico`, 'Chiquinha']
                  //   0            1        2
  const segundo = [8, 9, 8.5]
  const terceiro =["Olá", 13, true]
  const quarto = [20]
  const quinto= []
//Prática 2
  console.log( primeiro[3])
  console.log(terceiro.includes("Olá"));
  console.log(terceiro.includes(13));
  console.log(terceiro.includes(true));
  console.log(quarto[0], quarto.indexOf(20),quarto.length)

  //Prática 3
  
  //const copiaPrimeiro = primeiro
  const copiaPrimeiro = primeiro.slice()
  copiaPrimeiro.push("Nhonho")
  console.log(copiaPrimeiro);
  console.log(primeiro);
  copiaPrimeiro.splice(2, 2)
  //              indice, quantidade de itens a serem removidos
  console.log(copiaPrimeiro);
  console.log(primeiro.sort());

  //Extra
  const numeros = [01, 9,  8, 50,10,111,12, 11, 02, 38, 4, 5, 90,]
  const copiaNumeros = numeros.slice()
  copiaNumeros.pop()
  copiaNumeros.push(6)
  copiaNumeros.splice(2, 1)
  copiaNumeros.sort()
  console.log(numeros);
  console.log(copiaNumeros);

}

imprimirArray()