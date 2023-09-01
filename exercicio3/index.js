// herança e polimorfismo
class Animal {

  constructor(nome){
    this.nome = nome;
  }

  somAnimal(){
    console.log(` som do animal ${this.nome}`)
  }

}
class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }

  somAnimal() {
    console.log("Cachorro AU AU AU");
  }
}

class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }

  somAnimal() {
    console.log("Gato miau miau miau");
  }
}

const animais = [new Cachorro("Rugal"), new Gato("Mortiça")];

animais.forEach((animal) => {
  console.log(`Nome do animal: ${animal.nome}`);
  animal.somAnimal();
});
