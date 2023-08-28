class CarroPadrao{
  constructor(){
    this.rodas = 4
    this.portas = 4
    this.ligado = false
  }
}

class Carro extends CarroPadrao{
  constructor(tipo,estagioTurbo){
    super()
    this.turbo = new Turbo(estagioTurbo)
    if (tipo === 1){
      this.velmax = 120 
      this.nome = "normal"
    } else if (tipo === 2){
      this.velmax = 180
      this.nome = "sportivo"
    } else if (tipo === 3){
      this.velmax = 200 
      this.nome = "megaesportivo"
    }
    this.velmax += this.turbo.pot
  }
  info(){
    console.log(`
    nome ${this.nome}
    velmax ${this.velmax}
    turbo ${this.turbo}
    tipo ${this.tipo}
    rodas ${this.rodas}
    portas ${this.portas}
    ligado ${this.ligado}
    ------------------
    `)
  }
}

class Turbo{
  constructor(e){
      if (e === 0){
        this.pot = 0
      } else if (e === 1){
        this.pot = 50
      } else if (e === 3){
        this.pot = 75
      } else if (e === 100){
        this.pot = 100
      }
  }
}

class CarroEspecial extends Carro{
  constructor(estagioTurbo){
    super(4,estagioTurbo)
    this.nome = "carro especial"
    this.velmax = 300 + this.turbo.pot
  }
  info(){
    console.log(`
    nome ${this.nome}
    velmax ${this.velmax}
    turbo ${this.turbo}
    ------------------
    `)
    // super.info()
  }
}
const c1 = new Carro(1,0)
const c2 =  new Carro(2,1)
const c3 = new CarroEspecial(3)

c1.info()
c2.info()
c3.info()