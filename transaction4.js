const Web3 = require('web3');
const MyContract =require('./build/contracts/MyContract.json')

const init = async ()=>{
const web3 = new Web3('http://localhost:8545')


const id = await web3.eth.net.getId()
const deployedNetwok = MyContract.networks[id];
//creating smart contract instance
const contract = new web3.eth.Contract(MyContract.abi,deployedNetwok.address)





// transaction 
//callback way
const adddresses = await web3.eth.getAccounts();
await contract.methods.setData(10).send({
    from: adddresses[0]
},(receipt) => {

    console.log(receipt);
})

// read data 
const x = await contract.methods.getData().call()
console.log(x);



}

init();


///init will create a contract instance 