class Adress{
  constructor(street,number, neighborhood,city,state){
    this.street = street
    this.number = number
    this.neighborhood = neighborhood
    this.city = city
    this.state = state
  }
  fullAdress(){
    return ` rua ${this.street}, numero ${this.number}, bairro ${this.neighborhood}, cidade ${this.city}, estado ${this.state}
    `
  }
}

module.exports = Adress