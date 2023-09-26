const Character = require("./character");

module.exports = class Warrior extends Character{
  constructor(name,lifePoints, attackPoints, defensePoints, shieldPoints){
    super(name,lifePoints, attackPoints, defensePoints)
    this.shieldPoints = shieldPoints
    this.position = "atack"

  }

  atack(target){
    const damage = this.attackPoints - target.defensePoints
    
    if (this.position = "atack"){
      target.lifePoints -= damage

    } else if (this.position === "defense" ){
      const damage = this.attackPoints - (target.defensePoints + this.shieldPoints)

      if (damage > 0){
        target.lifePoints -= damage
      }
    }
  }

  changePosition(){
    this.position = this.position === "atack" ? "defense" : "atack"
  }
}