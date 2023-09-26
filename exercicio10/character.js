module.exports = class Character {
  constructor(name,lifePoints, attackPoints, defensePoints){
    this.name = name
    this.lifePoints = lifePoints
    this.attackPoints = attackPoints
    this.defensePoints = defensePoints

  }
  atack(target){
    const damage = this.attackPoints - target.defensePoints
    
    if (damage > 0){
      target.lifePoints -= damage
    }
  }

}