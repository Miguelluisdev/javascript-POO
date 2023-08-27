// conversões de json e objetos
const pessoa = {
  nome: "darius",
  canal: "simpson gamer",
  curso: "js",
  aulas:{
    aula1: "introdução",
    aula2: "condicionais",
    aula3 : "repetição"
  }
}
// dois metodos
// parse e stringfy
//  stringfy converte o obj em uma string json

 const string_pessoa = '{"nome":"darius","canal":"simpson gamer","curso":"js","aulas":{"aula1":"introdução","aula2":"condicionais","aula3":"repetição"}}'

const stjson = JSON.stringify(pessoa) // converte obj em string json
const obj_convert = JSON.parse(string_pessoa) // converte json em obj

console.log(pessoa)
console.log(stjson)
console.log(obj_convert)