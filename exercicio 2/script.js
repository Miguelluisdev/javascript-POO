const f_militar = document.querySelector("#f_tipoMilitar");
const f_normal = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blind")
const f_municao = document.querySelector("#f_municao")
const f_nome =  document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carros = document.querySelector("#carros")
const btn_add = document.querySelector("#btn_add")

let a_carros = []

f_militar.addEventListener("click", (evt) => {
  f_nome.value = ""
  f_portas.value = 0
  f_blindagem.value = 0
  f_municao.value = 0
  f_blindagem.removeAttribute("disabled")
  f_municao.removeAttribute("disabled")
})

f_normal.addEventListener("click", (evt) => {
  f_nome.value = ""
  f_portas.value = 0
  f_blindagem.value = 0
  f_municao.value = 0
  f_blindagem.setAttribute("disabled", disabled)
  f_municao.setAttribute("disabled", disabled)
})

const gerenciarExibicaoCarros = () =>{

  carros.textContent = ""

  a_carros.forEach((c) => {
    const div = document.createElement("div")
    div.setAttribute("class", "carro")
    div.textContent = `
    Nome: ${c.nome},  
    Portas: ${c.portas},
    Blindagem: ${c.blindagem},
    munição: ${c.munição}
    
    `
      carros.appendChild(div)
  })
}

btn_add.addEventListener("click", function(){
  if(f_normal.checked){
    const carro = new Carro(f_nome.value, f_portas.value)
    a_carros.push(carro)
  } else{
    const carro = new Militar(f_nome.value, f_portas.value,f_blindagem.value,f_municao.value)
    a_carros.push(carro)
  }
  gerenciarExibicaoCarros()
})

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