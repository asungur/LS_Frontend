// Create an object named account that represents a bank account. It should contain a balance property that stores the account's current balance.

function makeAccount(number) {
  let balance = 0;
  let transactions = [];
  return {
    deposit(amount) {
      transactions.push({ type: 'deposit', amount: amount});
      return balance += amount;
    },
    withdraw(amount) {
      let subtraction = (amount > balance ? balance : amount);
      balance -= subtraction;
      transactions.push({ type: 'withdraw', amount: subtraction })
      return subtraction;
    },
    balance() {
      return balance;
    },
    number() {
      return number;
    },
    transactions() {
      return transactions;
    },
  };
}

function makeBank () {
  let accounts = [];
  return {
    openAccount() {
      let number = accounts.length + 101;
      let account = makeAccount(number);
      accounts.push(account);
      return account;
    },
    transfer(source, destination, amount) {
      // let sourceIdx = this.accounts.indexOf(source);
      // let destinationIdx = this.accounts.indexOf(destination);
      // this.accounts[sourceIdx].withdraw(amount);
      // this.accounts[destinationIdx].deposit(amount);
      // return amount;
      return destination.deposit(source.withdraw(amount));
    },
  };
}


// Add a deposit method to the account object that takes a single argument, the value of the deposit. Add the value of the deposit to the account's balance, and then return it.

// console.log(account.balance);
// = 0
// console.log(account.deposit(42));
// = 42
// console.log(account.balance);
// = 42

// Add a withdraw method to the account object that takes a single argument, the amount to withdraw. It should subtract the amount from the account's balance and return the amount subtracted.

// account.deposit(100);
// console.log(account.balance);
// = 100
// console.log(account.withdraw(19));
// = 19
// console.log(account.balance);
// = 81

// If the account contains less than the withdrawal amount, the method should limit the withdrawal to the amount available, and return the actual amount withdrawn. This should leave the account with a balance of 0.

// console.log(account.balance);
// = 81
// console.log(account.withdraw(91));
// = 81
// console.log(account.balance);
// = 0

// Each account should have a record of every deposit and withdrawal applied to it. To do this, add a property named transactions to account that contains an array of transactions, each of which is an object with type and amount properties.

// console.log(account.deposit(23));
// = 23
// console.log(account.transactions);
// = [{...}]
// console.log(account.transactions[0]);
// = {type: "deposit", amount: 23}

// We want to create more than one account. Move the account creation code to a function named makeAccount that returns a new account object.

// let account = makeAccount();
// console.log(account.deposit(15));
// // = 15
// console.log(account.balance);
// // = 15
// let otherAccount = makeAccount();
// console.log(otherAccount.balance);
// // = 0

// We also need an object to manage accounts: a bank. Create a function that returns an object that represents a bank. The bank should have a property named accounts that represents a list of accounts.

// let bank = makeBank();
// console.log(bank.accounts);
// = []

// Add a new method named openAccount to the object returned by makeBank. It should create a new account, add it to the bank's accounts collection, and return the new account. Each new account should have a unique account number, starting at 101; each account number should be one greater than the previous account created.

// let bank = makeBank();
// let account = bank.openAccount();
// console.log(account.number);
// // = 101
// console.log(bank.accounts);
// // = [{...}]
// console.log(bank.accounts[0]);
// // = {number: 101, balance: 0, transactions: Array[0]}
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number);
// // = 102

// Add a new method to the bank object that transfers money from one account to another.

// let bank = makeBank();
// let source = bank.openAccount();
// console.log(source.deposit(10));
// // = 10
// let destination = bank.openAccount();
// console.log(bank.transfer(source, destination, 7));
// // = 7
// console.log(source.balance);
// // = 3
// console.log(destination.balance);
// // = 7

// Change the code so that users can access the account balance, account number, and transactions list by calling methods, but not by directly accessing those properties.

// let bank = makeBank();
// let account = bank.openAccount();
// console.log(account.balance());
// // = 0
// console.log(account.deposit(17));
// // = 17
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number());
// // = 102
// console.log(account.transactions());
// // > [Object]

// Change the code so that users can no longer access the list of accounts.

let bank = makeBank();
console.log(bank.accounts);
// = undefined