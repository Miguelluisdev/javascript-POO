class Procuct {
  constructor(name , description, price){
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0

  }

  addStock(quantity){
    this.inStock += quantity
  }

  calculateDiscount(discount){
    return this.price * ((100 - discount) / 100)
  }
}

const wtach = new Procuct("relogio", "relogio de pulso" , 40)

const priceDiscpunt = wtach.calculateDiscount(10)

console.log(wtach)

wtach.addStock(99)

console.log(priceDiscpunt)

