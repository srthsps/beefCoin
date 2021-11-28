const { Blockchain,Transaction } = require('./beefcoin.js')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('4827cbe5a4903703afa99c3b134d8d02c3b21c15ac0b3c6ce0bb7f78d873d8df')
const myWalletAddress = myKey.getPublic('hex')

let BeefCoin = new Blockchain()

const tx1 = new Transaction(myWalletAddress, 'target public key',10)
tx1.signTransaction(myKey)
BeefCoin.addTransaction(tx1)


console.log('\n Starting the miner....')
BeefCoin.minePendingTransaction(myWalletAddress)
console.log("Stopping the miner")

console.log('\n Balance of sarath is: ',BeefCoin.getBalanceOfAddress(myWalletAddress))


