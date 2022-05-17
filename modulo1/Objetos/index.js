//----------------Objetos----------------------------------

// 2
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
 const filme = {
    nome: "Auto da compadecida",
     ano: 2000,
     elenco: ["Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
     "Virginia Cavendish"], 
     transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}
console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transconsole.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])


//exercicio 

function criarObjeto(pessoa){
    const novaPessoa = {
        ...pessoa,
        listaComidas: ["brigadeiro", "bolo", "feijoda"],
        melhorAmigo: {
            nome: "Kauan",
            idade: 15
        }
    }
    return console.log(`O nome da pessoa é ${novaPessoa.nome} 
    e suas comidas preferidas são ${novaPessoa.listaComidas}. 
    Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos`)
}

criarObjeto(pessoaDeExemplo)
  
const pessoa = {
    nome: "Ewerton",
    apelido: ["tom", "kemps", "tomkemps"]
}

comoMechamar(Meusapelidos)

cons fruta1 ={
    nome: "Uva",
    disponibilidade:true,
}
const fruta2 ={...fruta1, nome: "Morango"}
const fruta3 ={...fruta1, nome: "abacate"}

//c.

function colocandoNasacola(a,b,c)
sacola.push(a,b,c)
return sacola

}

//d.
console.log(colocandoNasacola(fruta1,fruta2,fruta3));

function questionario(){
    const pessoa = {
        nome: prompt("qual seu nome?"),
        idade: Number(prompt("qual sua idade?")),
        profissao; prompt("qual sua profissao"))
    }
    console.log(questionario());

