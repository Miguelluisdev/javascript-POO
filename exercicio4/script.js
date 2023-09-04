// encapsulamento
class ContaBancaria {
  constructor(nome, saldo) {
    this.nome = nome;
    let _saldo = saldo;

    this.getSaldo = () => _saldo;
    this.depositar = (valor) => {
      if (valor > 0) {
        _saldo += valor;
      }
    };
    this.sacar = (valor) => {
      if (valor > 0 && _saldo >= valor) {
        _saldo -= valor;
      }
    };
  }
}

const minhaConta = new ContaBancaria("Darius", 5000);

console.log(minhaConta)

console.log(minhaConta.getSaldo())

minhaConta.sacar(500)

minhaConta.depositar(200)

console.log(minhaConta.getSaldo())