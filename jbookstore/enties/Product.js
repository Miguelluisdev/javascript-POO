module.exports = class Product {
  constructor(name,description, price, inStock = 0 ){
    this.name = name
    this.descript = description
    this.price = price
    this.inStock = inStock
  }

  addStock(quantity){
      this.inStock += quantity
  }
  removeStock(quantity){
    this.inStock -= quantity
  }
}