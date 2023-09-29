class Deposit {
  constructor(value) {
    this.value = value;
    this.date = new Date();
  }
}

class Transfer {
  constructor(sender, receiver, value) {
    this.sender = sender;
    this.receiver = receiver;
    this.value = value;
    this.date = new Date();
  }
}

class Installment {
  constructor(value, number) {
    this.value = value;
    this.number = number;
    this.status = 'pendente';
  }
}

class Loan {
  static interestRate = 0.05; // Taxa de juros inicial (5%)

  constructor(amount, numInstallments) {
    this.amount = amount;
    this.date = new Date();
    this.installments = [];

    // Calcular e criar as parcelas
    const installmentValue = amount / numInstallments;
    for (let i = 1; i <= numInstallments; i++) {
      this.installments.push(new Installment(installmentValue, i));
    }
  }

  static getInterestRate() {
    return Loan.interestRate;
  }

  static setInterestRate(newRate) {
    Loan.interestRate = newRate;
  }
}

class Account {
  #balance = 0;
  deposits = [];
  loans = [];
  transfers = [];

  constructor(owner) {
    this.owner = owner;
  }

  get balance() {
    return this.#balance;
  }

  makeDeposit(amount) {
    this.#balance += amount;
    this.deposits.push(new Deposit(amount));
  }

  takeLoan(amount, numInstallments) {
    const loan = new Loan(amount, numInstallments);
    this.#balance += amount;
    this.loans.push(loan);
  }

  makeTransfer(receiverAccount, amount) {
    if (receiverAccount === this) {
      // Transferência para si mesmo
      this.#balance += amount;
    } else {
      // Transferência para outra conta
      this.#balance -= amount;
      receiverAccount.makeDeposit(amount);
    }
    this.transfers.push(new Transfer(this.owner, receiverAccount.owner, amount));
  }
}

class User {
  constructor(fullName, email) {
    this.fullName = fullName;
    this.email = email;
    this.account = null;
  }
}

class App {
  static users = [];

  static createUser(fullName, email) {
    // Verificar se o email já está em uso
    const existingUser = this.findUserByEmail(email);
    if (existingUser) {
      console.log("Email já está em uso.");
      return null;
    }

    const newUser = new User(fullName, email);
    const newAccount = new Account(newUser);
    newUser.account = newAccount;
    this.users.push(newUser);

    return newUser;
  }

  static findUserByEmail(email) {
    return this.users.find(user => user.email === email);
  }

  static deposit(email, amount) {
    const user = this.findUserByEmail(email);
    if (user) {
      user.account.makeDeposit(amount);
      console.log(`Depósito de $${amount} feito com sucesso.`);
    } else {
      console.log("Usuário não encontrado.");
    }
  }

  static transfer(senderEmail, receiverEmail, amount) {
    const sender = this.findUserByEmail(senderEmail);
    const receiver = this.findUserByEmail(receiverEmail);
    if (sender && receiver) {
      sender.account.makeTransfer(receiver.account, amount);
      console.log(`Transferência de $${amount} feita com sucesso.`);
    } else {
      console.log("Usuário não encontrado.");
    }
  }

  static loan(email, amount, numInstallments) {
    const user = this.findUserByEmail(email);
    if (user) {
      user.account.takeLoan(amount, numInstallments);
      console.log(`Empréstimo de $${amount} feito com sucesso.`);
    } else {
      console.log("Usuário não encontrado.");
    }
  }

  static changeInterestRate(newRate) {
    Loan.setInterestRate(newRate);
    console.log(`Taxa de juros alterada para ${newRate * 100}%.`);
  }
}

// Exemplo de uso:
const user1 = App.createUser("João da Silva", "joao@example.com");
const user2 = App.createUser("Maria Souza", "maria@example.com");

App.deposit("joao@example.com", 1000);
App.transfer("joao@example.com", "maria@example.com", 500);
App.loan("maria@example.com", 2000, 12);
App.changeInterestRate(0.06); // Alterar a taxa de juros para 6%
