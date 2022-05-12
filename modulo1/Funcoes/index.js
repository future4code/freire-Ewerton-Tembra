//function minhaFuncao(variavel) {
	//return variavel * 5


console.log(nome ("minhaFuncao")(2))
//console.log(cidade ("minhaFuncao")(10)

// a-resultado da multiplicacao 
// b- se tirar os console.log dara comflito e nao aparecera nada

// Exercicio de Escrita de codigo //

// A

const apresentacao = () => {
console.log("Eu me chamo Ewerton, tenho 38 anos, Sou natural belem para.")
}

apresentacao()

// B

const apresentacaoEditavel1 = (nome, idade, cidade) => {
    return "Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}."
}

const informacoes = apresentacaoEditavel("Ewerton", 38, "Belem para")
console.log(Informacoes)

//-------------------------------------2---------------------

// A

const somaDosnumero = (num1, num2) => {
    return num1 + num1
}    

console.log(`A soma dos numeros è: ${somaDosnumero(5, 5)}`)

// B


let diferencaNum = (num1, num2) =>{
    let maiorIgual = num1 >= num2
    return maiorIgual
}

console.log(diferencaNum(25,30))

// C


let parNumero = (num1) =>{
    let descobrindoNumero = num1 % 2
    let numeroPar = descobrindoNumero == 0
    return numeroPar
}

console.log(parNumero(25) )

// Exercicio 3

let num1 = Number (prompt("Digite um numero"))
let num2 = Number (prompt("Digite outro numero"))

function soma (a, b) {
    let somaFinal = (a + b)
    return somaFinal
}

function subtracao(a, b){
    let subfinal = (a -b)
}    

function multiplicacao(a, b) {
    let multfinal = (a * b)
    return multfinal
}

function divisao(a, b) {
    let divifinal = (a / b)
    return divifinal
}

let resultadodaSoma = soma(num1,num2)
let resultadoSub = subtracao(num1,num2)
let resultadoMult = multiplicacao(num1,num2)
let resultadoDiv = divisao(num1,num2)

console.log("soma: ",resultadoSoma);
console.log(`subtracao: ${resultadoSub}`);
console.log(`multiplicacao: ${resultadoMult}`);
console.log(`divisao: ${resultadoDiv}`);




