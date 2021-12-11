const run = async () => {
  // Get web3
  const Web3 = require('web3')
  const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))

  // Get accounts
  const accounts = await web3.eth.getAccounts()

  // Get balance
  accounts.forEach( async (account) => {
    const balance = await web3.eth.getBalance(account)
    console.log(`${account} - balance: ${balance}`)
  })
}

run()
