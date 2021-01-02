const Web3 = require('web3');
const MyContract =require('./build/contracts/MyContract.json')

const init = async ()=>{
const web3 = new Web3('http://localhost:8545')


const id = await web3.eth.net.getId()
const deployedNetwok = MyContract.networks[id];
//creating smart contract instance
const contract = new web3.eth.Contract(MyContract.abi,deployedNetwok.address)



const x = await contract.methods.getData().call()
console.log(x);

contract.methods.setData()



}

init();


///init will create a contract instance 