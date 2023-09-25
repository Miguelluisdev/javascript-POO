 class User {
  constructor(fullname,email,password){
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email,password){
    if (this.email === email &&  this.password === password){
        console.log(`credenciais corretas
                    login realizado
        `)
    } else {
      console.log(` login invalido!!! verifique seu email ou senha`)
    }

  }
}

const jhon = new User("Darius", "darius@gmail.com", 1234)

console.log(jhon)

jhon.login("darius@gmail.com", 1234)
