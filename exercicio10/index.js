const Mage = require("./mage");
const Thief = require("./thief");
const Warrior = require("./warrior");


const darius = new Warrior("darius", 88 , 18, 8, 20)
const clarice = new Mage("clarice", 20, 25, 5, 15)
const Duque = new Thief("duque", 50, 20, 10)


console.log({darius, clarice, Duque})

darius.changePosition("defense")

clarice.atack(darius)

Duque.atack(clarice)


console.log({darius, clarice, Duque})

clarice.heal()

darius.changePosition("atack")

darius.atack(Duque)

Duque.atack(darius)

console.log({darius, clarice, Duque})