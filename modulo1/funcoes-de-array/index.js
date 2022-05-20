/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
*/
  nomesProdutos =.filtar((produtos) => {
      produtos.preco = produtos.preco * 0.95;
      console.log(produtos.nome, produtos.preco)
      return produtos;
  })

  nomesProdutos = produtos.filtar((produtos) => {
      return produtos.categorias === "Bebidas";
  })

  console.log(nomesProdutos)

  - E 
  const textoype=produtos.filter((item) => {
      if item.nome.includes("ype")
      return console.log("${item.nome}");
  })