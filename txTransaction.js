const Web3 = require('web3')
const web3 = new Web3('http://localhost:7545')
const contract = require('./build/contracts/MyContract.json')

const init= async()=>{

    const networkId = await web3.eth.net.getId()
    const deployedNetwok = contract.networks[networkId]
    // console.log(deployedNetwok.address)

    const account = web3.eth.accounts.create()
    console.log(account.privateKey)
    // const data
    // const txObject ={
    //     to:deployedNetwok.address,
    //     gasPrice:
    //     gasLimit

    // }
}

init()
