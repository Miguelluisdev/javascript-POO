// produtos e carrinho de compras
class Produto {
  constructor(nome,preco){
    this.nome = nome
    this.preco = preco
  }
}

class Carrinho{
  constructor(){
    this.produtos = []
  }
  adicionarProduto(produto){
    this.produtos.push(produto)
    console.log(`o produto ${produto.nome} adicionado ao carrinho valor ${produto.preco} ` )
  }

  calcularTotal(){
    let total = 0
    for (let produto of this.produtos){
      total += produto.preco
    }
    return total
  }
}

let produto1 = new Produto("CAmisa" , 30)
let produto2 = new Produto("short", 20)

let carrinho = new Carrinho()

carrinho.adicionarProduto(produto1)
carrinho.adicionarProduto(produto2)

console.log( "total do carrinho R$ " + carrinho.calcularTotal())