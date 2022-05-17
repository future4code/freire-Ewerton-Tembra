//Exercicios
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}












/*Exercicio de Escrita de Codigo
// -1
let idadeDoUsuario = +prompt("Qual sua idade?")
if (idadeDoUsuario >= 18) {
    console.log("voce pode dirigir:") }
else {
    console.log("voce nao pode dirigir:")
}

//-2

let horarioAula = prompt("Em qual turno voce estuda: N = Noturno / V = Vespertino M = Matutino");
if (horarioAula === "N") {
 case "N":   
    console.log("Boa noite!")
break;    
case "V"
    console.log("boa tarde!")    
break;
case "M:"
    console.log("bom dia")
 break;
 default:
     console("voce nao digitou um valor valido use n/v/m")
     break;
} 
*/ 

/*Exercicio 4

let generoDoFilme = prompt("Digite o genero do filme que vai assistir");
let valorIngresso = Number(prompt("Digite valor ingresso"));

if (generoDoFilme === "fantasia" && valoringresso <= 15) {
    console.log("Bom filme");
} else if (generoDoFilme != ("fantasia") || valorIngresso > 15) {
    console.log("Escolha outro filme")
} else (generoDoFilme != "fantasia" || valoringresso > 15) {
    console.log("voce declarou um valor inexistente");
}
