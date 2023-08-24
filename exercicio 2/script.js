class Carro{ // classe Pai
  constructor(nome,portas){
    this.nome = nome
    this.portas = portas
    this.ligado = false
    this.vel = 0
    this.cor = undefined
  }
  ligar = function(){
    this.ligado = true
  }

  desligar = function(){
    this.ligado = false
  }
  setCor = function(cor){
      this.cor = cor
  }
}

class Militar extends Carro{ // classe filho
  constructor(nome,portas,blindagem,munição){
    super(nome,portas) // super serve para quando invocar algo da classe pai 
    this.blindagem = blindagem
    this.munição = munição
    this.setCor("verde")
  }

  atirar = function(){
    if(this.munição > 0){
      this.munição --
    }
  }


}

class Utilitario extends Carro{
  constructor(nome,portas,lugares){
    super(nome,portas)
    this.lugares = lugares
  }
}

const c1 = new Carro("normal", 4)
c1.ligar()
c1.setCor("Preto")

const c2 = new Militar("Lutador", 1,100,50)
c2.atirar()
c2.atirar()

console.log(`Nome: ${c1.nome}
  portas: ${c1.portas}
  ligado: ${(c1.ligado? "sim": "não")}
  velocidade: ${c1.vel}
  cor: ${c1.cor}
  ------------------------------------
`)
console.log(`Nome: ${c2.nome}
  portas: ${c2.portas}
  ligado: ${(c2.ligado? "sim": "não")}
  velocidade: ${c2.vel}
  blindageM: ${c2.blindagem}
  munição: ${c2.munição}
  cor: ${c2.cor}
  ------------------------------------
`)