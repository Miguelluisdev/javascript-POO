const Character = require("./character");

module.exports = class Thief extends Character {
    constructor(name,lifePoints,atackPoints, defensePoints){
      super(name,lifePoints, atackPoints, defensePoints)
    }

    atack(target){
      const damage = this.attackPoints - target.defensePoints * 2
      
      if (damage > 0){
        target.lifePoints -= damage
      }
    }
}