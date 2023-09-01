// O encapsulamento é um dos princípios fundamentais da programação orientada a objetos (POO) e refere-se à ideia de que os detalhes internos de um objeto devem ser ocultados do mundo exterior. Isso significa que as propriedades e métodos de um objeto devem ser acessados e modificados somente através de interfaces controladas, geralmente chamadas de métodos de acesso ou getters e setters.

class Pessoa {
  constructor(nome, idade) {
    this._nome = nome; // Prefixo _ indica uma propriedade "privada"
    this._idade = idade;
  }

  // Getters para acessar o nome
  get nome() {
    return this._nome;
  }

  // Setters para definir o nome
  set nome(novoNome) {
    if (typeof novoNome === "string") {
      this._nome = novoNome;
    } else {
      console.error("O nome deve ser uma string.");
    }
  }

  // Getters para acessar a idade
  get idade() {
    return this._idade;
  }

  // Setters para definir a idade
  set idade(novaIdade) {
    if (typeof novaIdade === "number" && novaIdade >= 0) {
      this._idade = novaIdade;
    } else {
      console.error("A idade deve ser um número não negativo.");
    }
  }
}

const pessoa = new Pessoa("Darius", 28);

console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);

pessoa.nome = "Bob"; // Usando o setter para alterar o nome
pessoa.idade = 25;   // Usando o setter para alterar a idade

console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
