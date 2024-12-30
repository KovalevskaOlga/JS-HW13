//task 1
const employees = {
    ola: 100000000000000000000,
    barys: 10,
    timaHacker: 12341924783290573498563487956437534534895693485689436834
}

const { ola, barys, timaHacker } = employees;
//task 2
const bankAccount = {
    ownerName: "Ola",
    accountNumber: 15,
    balance: 100000000,
}

const { ownerName, accountNumber, balance } = bankAccount;
//task 3
const products = [
  { name: "Laptop", price: 1500, quantity: 4 },
  { name: "Smartphone", price: 800, quantity: 10 },
  { name: "Tablet", price: 1200, quantity: 5 },
];

const [product1, product2, product3] = products
for (const { name, price, quantity } of products) {
  console.log(`Product: ${name}, Price: ${price}, Quantity: ${quantity}`);
}
//task 4
const user = {
    hobby: "gaming",
    premium: true
}

const { hobby, premium } = user;
//task 5
const salary = {
    userTima: 1000,
    userOla: 2000,
    userBarys:3000
}

const { userTima, userBarys, userOla } = salary;
//task 6
const fruit = {
    name: apple,
    color: red,
}

const { name, color } = fruit;
//task 7
const account = {
    accountName: "Olha",
    balance: 2000,
    transactions: [],
    getBalance() {
        return this.balance;
    },

    deposit() {
        const depositNum = Number(prompt("На яку суму хочете поповнити?"))
        this.balance += depositNum
        return alert(`Ваш рухунок після поповнення ${this.balance}`)
    },
    
    withdraw() {
        const withdrawNum = Number(prompt("Яку суму хочете зняти зі свого рахунку?"))
        this.balance -= withdrawNum
        return alert(`Ваш рахунок після зняття коштів ${this.balance}`)
    },
      
    getTransactions() {
        return this.transactions;
    },
};
//деструктуризація
const { balance, transactions, getBalance, deposit, withdraw, getTransactions } = account;