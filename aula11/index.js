const Adress = require("./adress");
const person = require("./person");

const addr = new Adress("8 setembro", "centro", "campo grande")
const darius = new person("darius", addr)

console.log(darius)

console.log(darius.adress.fullAdress())