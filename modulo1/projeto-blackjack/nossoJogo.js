/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    const inicioDojogo = ()=>{

       const cartaUm = comprarCarta();
       const cartaDois = comprarCarta();
       const somarCartaUsuario = cartaUm.valor + cartaDois.valor
       console.log(`Suas cartas: ${cartaUm.texto} ${cartaDois.texto} - Pontuacao: ${somarcartaUsuario}`)

       let cartaDaMaquinaUm = ComprarCarta();
       let CartaMaquinaDois = ComprarCarta();
       let SomaCartaMaquina = CartaMaquina.valor + CartaMaquinaDois.valor
       console.log (`Cartas da Maquina: ${CartaMaquinaUm.texto} ${CartaMaquinaDois.texto} - Pontuacao:`)

       if(somaCartaUsuario > somaCartaMaquina){
          console.log("Parabens, Voce Ganhou")
       }else if(somaCartaUsuario < somaCartaMaquina){
          console.log("Voce Perdeu, Nao Desanime")
       }else if(somaCartaUsuario === somaCartaMaquina){
          console.log("Empate")
       }

       alert("Boas vindas ao jogo de BlackJack|")
       if(confirm("Quer comecar a Rodada")){
          console.log("-------Boa Sorte------"), iniciojogo()
          }else{
             console.log("Perdeu, a maquina ganhou voce")
          }    

