const run = async () => {
  // Get web3
  const Web3 = require('web3')
  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

  // Get address
  const accounts = await web3.eth.getAccounts()
  console.dir(accounts)

  // get balance
  const balance = await web3.eth.getBalance(accounts[0])
  console.log(`balance : ${balance}`)
}

run()
