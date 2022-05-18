const Web3 = require('web3');
const MyContract =require('./build/contracts/MyContract.json')

const init = async ()=>{
const web3 = new Web3('http://localhost:7545')


const id = await web3.eth.net.getId()
const deployedNetwok = MyContract.networks[id];
const contract = new web3.eth.Contract(MyContract.abi,deployedNetwok.address)


}

init();

///init will create a contract instance 