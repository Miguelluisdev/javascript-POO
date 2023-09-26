const Character = require("./character");

module.exports = class Mage extends Character {
    constructor(name,lifePoints,atackPoints, defensePoints, magicPoints){
      super(name,lifePoints, atackPoints, defensePoints)

      this.magicPoints = magicPoints;
    }

    atack(target){
      const damage = this.attackPoints + this.magicPoints - target.defensePoints
      
      if (damage > 0){
        target.lifePoints -= damage
      }
    }
    heal(target){
      const health = 2 * this.magicPoints
      this.lifePoints += health
    }
  
}