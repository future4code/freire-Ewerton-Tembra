/*let array
console.log('a. ', array) // O valor retorna underfine,sem valor designado a Variavel

array = null
console.log('b. ', array) // retornara null,este foi o valor definido.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] // O resultado sera 19 no lugar do 4.
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i]) //3

array[i+1] = 19
console.log('e. ', array) // array 11

const valor = array[i+6]
console.log('f. ', valor) // 9

Exercicio de interpretacao 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// O console Imprime = frase em maisculo e troca letra a pela letra i: peguei onibus em mirrocos*/

// Exercicio de Escrita de Codigo
// Passo 1
let nome = prompt ("digite seu nome")
let email = prompt("digite seu email")
console.log (`o email ${email} foi cadastrado com sucesso. seja bem vindo(a), ${nome}.`)

//Exercicio de Escrita de Codigo
// Passo 2
let comidasPreferidas = ["lasanha", "carne de panela", "feijoada", "hamburguer", "macarrao"]
console.log(comidasPreferidas)
console.log(`Essas sao minhas comidas preferidas:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}`)
let comidaDousuario = prompt("coloque sua comida preferida")
comidasPreferidas[1] = comidaDousuario
console.log(comidasPreferidas)

//Exercicio de escrita codigo 
