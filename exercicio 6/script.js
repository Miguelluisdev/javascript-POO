//  sistema de gerenciamento de funcionarios de uma empresa

// definindo a classe Pai base para funcionarios

class Funcionarios {
  constructor(nome,salario){
  this.nome = nome
  this.salario = salario
  }

  calcularSalario(){
    return this.salario
  }
}

//  classe para gerentes que herda de funcionarios

class Gerentes extends Funcionarios{
  constructor(nome,salario,departamento){
    super(nome,salario)
    this.departamento = departamento
  }
  calcularSalario(){
    return this.salario + 1000
  }
  // metodo de gerenciar equipe para o gerente
  gerenciarEquipe(){
    console.log(`${this.nome} o gerente está gerenciando a equipe do ${this.departamento}`)
  }
}

// classe para representar desenvolvedores , que herda funcionarios

class Desenvolvedor extends Funcionarios{
  constructor(nome,salario,linguagem){
    super(nome,salario)
    this.linguagem = linguagem

  }

  codificar(){
    console.log(`${this.nome} está codificando em ${this.linguagem}`)
  }
}

const novoGerente = new Gerentes("darius", 2000 , "TI")
console.log(`o novo gerente é ${novoGerente.nome} seu salario: ${novoGerente.calcularSalario()} seu departamento é ${novoGerente.departamento}`)

const novoDev = new Desenvolvedor("dick", 4000 , "javascript")
console.log(`o novo dev é ${novoDev.nome} salario ${novoDev.calcularSalario()} linguagem ${novoDev.linguagem}`)