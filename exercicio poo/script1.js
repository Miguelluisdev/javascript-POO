// exercicos basicos sobre o entendimento de poo metodos e atributos
class Carro {
  constructor(marca,modelo){
    this.marca = marca
    this.modelo = modelo
    this.ligado = false
  }
  ligar(){
      this.ligado = true
      console.log(`o carro ${this.modelo} esta ligando`)
  }

  desligar(){
    this.ligado = false;
    console.log(`o carro ${this.modelo} está desligando`)
  }
}

let myCar = new Carro("ferrari", "cadilac");

console.log(myCar.modelo)

myCar.ligar()