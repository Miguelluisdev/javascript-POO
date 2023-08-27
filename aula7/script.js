// static em poo
class Npc{
    static alerta = false
  constructor(energia){
    this.energia = energia
  }
  info = function(){
    console.log(`
      energia ${this.energia} 
      alerta? ${Npc.alerta? "Sim": "Não"}
   -------------------------------------- `)
  }
  static setAlert = function(){
    npc1.alerta = true
  }
}

const npc1 = new Npc(100)
const npc2 = new Npc(70)

Npc.setAlert()

Npc.alerta = true

npc1.info()
npc2.info()

