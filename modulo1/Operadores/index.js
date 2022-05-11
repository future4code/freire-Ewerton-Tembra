//exercicio de interpretacao
// 1-
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2 

let resultado = bool1 && bool2 
console.log("a. ", resultado) false 

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) false

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado) true

console.log("d. ", typeof resultado) boolean
*/

//exercicio de interpretacao 
// 2-

/*
2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
 jsx
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")
    
    const soma = primeiroNumero + segundoNumero
    
    console.log(soma) 

    vai mostrar uma concatenuacao das duas variaveis
    */

    //exercicio interpretacao 
    // 3-
    /*
    
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = Number(primeiroNumero) + Number(segundoNumero)

    console.log(soma) 
    
    o codigo so funcionara se declarado que e um numero

    */

    //exercicio de escrita de codigo
    // 1-

    let idade = prompt("escreva sua idade: ")
    let idadeDeAmigo = prompt("Escreva a idade do seu amigo")
    let comparar = idade === idadeDeAmigo
    let dif = (idade - idadeDeAmigo)
    console.log("sua idade é maior do que a do seu melhor amigo? ", comparar)
    console.log("A diferença de idade é de: ", dif)

    //exercicio 2

    let par = prompt("escreva um numero par: ")
    let resto = (par % 2);
    console.log(resto);

    //se ele inserir numero impar o resultado será 1 sempre.

    // exercicio 3

    let idadeMdh = prompt("Insira sua idade em anos: ");
    let idadeMes = idadeMdh * 12
    let idadeDias = idadeMdh * 365
    let idadeHoras = idadeDias * 24

    console.log("Sua idade em meses é: ", idadeMes);
    console.log("Sua idade em dias é: ", idadeDias);
    console.log("Sua idade em horas é: ", idadeHoras);

    // exercicio 4

    let insiraUmNumero = prompt("Insira o primeiro número: ");
    let insiraOutroNumero = prompt("Insira o segundo número: ");

    let maior = insiraUmNumero > insiraOutroNumero;
    let igual = insiraUmNumero === insiraOutroNumero;
    let divisivelPeloSegundo = insiraUmNumero % insiraOutroNumero == 0
    let divisivelPeloPrimeiro = insiraOutroNumero % insiraUmNumero  == 0

    console.log("O primeiro numero é maior que segundo?", maior);
    console.log("O primeiro numero é igual ao segundo?", igual);
    console.log("O primeiro numero é divisível pelo segundo?", divisivelPeloSegundo);
    console.log("O segundo numero é divisível pelo primeiro?", divisivelPeloPrimeiro);

    