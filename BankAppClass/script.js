class Bank {
  constructor(balance) {
    this.balance = balance
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("You dont have enough money on your account")
      return
    }
    this.balance -= amount
    console.log("withdrew: ", amount)
    console.log({ balance: this.balance })
  }

  deposit(amount) {
    this.balance += amount
    console.log("deposited: ", amount)
    console.log({ balance: this.balance })
  }
}

const aleksa = new Bank(100)

console.log(`Your balance is: ${aleksa.balance} USD`)
aleksa.withdraw(201)

const depositBtn = document.getElementById("depositBtn")
const withdrawBtn = document.getElementById("withdrawBtn")
const amountInput = document.getElementById("amount")
const balanceDiv = document.getElementById("balance")

depositBtn.onclick = () => {
  const amount = Number(amountInput.value)
  aleksa.deposit(amount)
  console.log(amountInput.value)
  balanceDiv.innerText = `Balance: ${aleksa.balance + amount} USD`
}
withdrawBtn.onclick = () => {
  const amount = Number(amountInput.value)
  aleksa.withdraw(amount)
  console.log(amountInput.value)
  balanceDiv.innerText = `Balance: ${aleksa.balance + amount} USD`
}
