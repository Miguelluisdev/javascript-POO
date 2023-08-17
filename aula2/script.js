class Carro{
  constructor(pnome,ptipo){
    this.nome = pnome

    if(ptipo == 1){

      this.tipo = "Esportivo"
      this.velmax = 300

    } else if (ptipo == 2){
        this.tipo = "Utilitario"
        this.velmax = 120

    } else if (ptipo == 3){

      this.tipo = "Passeio"
      this.velmax = 160

    } else {
      this.tipo = " Militar"
      this.velmax = 200
    }
  }

  getNome(){
    return this.nome
  }

  getTipo(){
    return this.nome
  }

  getVelMax(){
    return this.velmax
  }

    getInfo(){
      return [this.nome, this.tipo, this.velmax]
    }

  setNome(nome){
    this.nome = nome
  }
// pode setar para outras propriedades
  info(){
    console.log(`Nome: ${this.nome}`)
    console.log(`Tipo: ${this.tipo}`)
    console.log(`Velocidade maxima: ${this.velmax}`)
    console.log("------------------------------------------")
  }

}

let c1 = new Carro("rapidex", 1)
let c2 = new Carro("luxuoso", 3)
let c3 = new Carro("bolado", 4)
let c4 = new Carro("carregador", 2)


c1.setNome("Super veloz")

// com o metodo info()

c1.info()
c2.info()

console.log(c1.getNome())

 console.log(c1.getInfo()[1])

// console.log(c1.nome);
// console.log(c1.tipo);
// console.log(c1.velmax);


// console.log(c2.nome)
// console.log(c3.nome)
// console.log(c4.nome)
