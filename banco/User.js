const Account = require("./Account");

module.exports = class User {
  constructor(email,fullname){
    this.email  = email
    this.fullname = fullname
    this.Account = new Account(this)
  }
}