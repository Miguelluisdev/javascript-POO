

module.exports = class Account {
  #balance
  // #deposits
  // #loans
  // #transfers

  constructor(user) {
    this.owner = user
    this.#balance = 0
    this.deposits = []
    this.loans = []
    this.transfers = []
  }

  get balance(){
    return this.#balance
  }

  addDeposit(){
    this.#balance += deposit.value
    this.deposits.push(this.deposits)

  }

  addLoan(){
    this.#balance += loan.value
    this.deposits.push(this.deposits)
  }

  addTransfer(transfer){
      if (transfer.toUser.email ===  this.owner.email){
        this.#balance += transfer.value
        this.transfers.push(transfer)
      } else if (transfer.fromUser.email === this.owner.email){
        this.#balance -= transfer.value
        this.#balance.push(transfer)
      }
  }
}

