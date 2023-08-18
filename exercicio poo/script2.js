// um exemplo basico de conta bancaria feita em poo
class contaBancaria {
  constructor(nomeTitular, saldoInicial){

      this.nomeTitular = nomeTitular
      this.saldoInicial = saldoInicial
    }
    
      depositar(valor) {
           this.saldoInicial += valor
           console.log(`o deposito no valor R$ ${valor} realizado. saldo disponivel R$ ${this.saldoInicial}`)
      }

      sacar(valor){
        if (valor <= this.saldoInicial){
          this.saldoInicial -= valor
          console.log(`saque de valor R$ ${valor} realizado. saldo disponivel R$ ${this.saldoInicial}`
          )
        } else{
          console.log("saldo insuficiente")
        }
      }
}

let minhaConta = new contaBancaria("darius", 8888)
console.log(minhaConta)
minhaConta.depositar(500)
minhaConta.sacar(1888)