const Web3 = require('web3');
const MyContract2 =require('./build/contracts/MyContract2.json')

const init = async ()=>{
const web3 = new Web3('http://localhost:8545')


const id = await web3.eth.net.getId()
const deployedNetwok = MyContract2.networks[id];
//creating smart contract instance
const contract = new web3.eth.Contract(MyContract2.abi,deployedNetwok.address)





// event emitted by your transaction
const adddresses = await web3.eth.getAccounts();
const receipt = await contract.methods.emitEvent("hey").send({
    from: adddresses[0]
});
console.log(receipt.events);




}

init();


///init will create a contract instance 