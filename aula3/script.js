class Pessoa{
  constructor(pnome,pidade){
    this.nome = pnome
    this.idade = pidade
}
  getNome(){
    return this.nome
  }

  getIdade(){
    return this.idade
  }

  setNome(nome){
    this.nome = nome
  }
  setidade(idade){
    this.idade = idade
  }
  
// pode setar para outras propriedades
  info(){
    console.log(`Nome>>> ${this.nome}`)
    console.log(`IDade>> ${this.idade}`)
    console.log("------------------------------------------")
  }

  }
// com o metodo info()
let pessoas = []
const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")
const addPessoa = () =>{
  res.textContent = ""
  pessoas.map((p)=>{
      const div = document.createElement("div")
      div.setAttribute("class", "pessoa")
      div.textContent = `Nome: ${p.getNome()}, <br>  Idade: ${p.getIdade()}`
      res.appendChild(div)
  })
}
btn_add.addEventListener("click", (evt) => {
  const nome = document.querySelector("#f_nome")
  const idade = document.querySelector("#f_idade")
  const p = new Pessoa(nome.value,idade.value)
  pessoas.push(p)
  nome.value = ""
  idade.value = ""
  nome.focus() 
  console.log(pessoas)
  addPessoa()
})