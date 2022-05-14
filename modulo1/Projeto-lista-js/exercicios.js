// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // soma dos num1 + num2 que dara 3
  return num1 + num2 
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // imprime menssagem
  const mensagem = prompt('Digite uma Menssagem')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const mensagemAltura = Number (prompt("Digite a altura de um retangulo"))
  const mensagemLargura = Number (prompt("Digite a largura do retangulo"))
  const resutadoRetangulo = mensagemAltura * mensagemLargura
  console.log(resutadoRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const mensagemAnoAtual = Number (prompt("Qual o ano Atual?"))
  const mensagemAnoNascimento = Number (prompt("Digite a largura do Retangulo"))
  const idadeDoUsuario = mensagemAnoAtual - mensagemAnoNascimento 
  console.log(idadeDoUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const inc = peso / (altura*altura)
  return inc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome= prompt("digite seu nome")
  idade= prompt("digite sua idade")
  email= prompt("digite seu email")
 console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`); 
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo/valor Ingresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let f= string1.length
let a= string2.length

return f === a
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const ultimoUElem = array[array.length -1]
const primeiroElem = array[0]
 array= [0]   
array[array.length -1] = primeiroElem
return array     
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()
    return string1 == string2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite ano Atual:"))
  const anoDeNascimento = Number(prompt("Digite ano Do seu nascimento:"));
  const dataDeExpedicao = Number(prompt("Digite ano expedicao do rg:"));

  const idade = Number(anoAtual) - Number(anoDeNascimento)
  const idadeRg = Number(anoAtual) - Number(dataDeExpedicao)
  
  const primeiroCheck = idade <= 20 && idadeRg >= 5
  const segundoCheck = idade > 20 && idade <= 50 && idadeRg >= 10
  const terceiroCheck = idade > 50 && idadeRg >= 15

  console.log(primeiroCheck || segundoCheck || terceiroCheck)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const bissexto = (ano % 4 == 0);
  const sBissexto = (ano % 100 == 0);
  const nSbissexto = (ano % 400 == 0);

  return bissexto&&nSbissexto==sBissexto;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Tem mais de 18");
  const medioCompleto = prompt("tem o ensino medio completo");
  const horarioFlex = prompt("Tem disponibilidade de horario?");


}