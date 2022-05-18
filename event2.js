const Web3 = require('web3');
const MyContract2 =require('./build/contracts/MyContract2.json')

const init = async ()=>{
const web3 = new Web3('http://localhost:7545')


const id = await web3.eth.net.getId()
const deployedNetwok = MyContract2.networks[id];
//creating smart contract instance
const contract = new web3.eth.Contract(MyContract2.abi,deployedNetwok.address)






const adddresses = await web3.eth.getAccounts();
await contract.methods.emitEvent("karamazov").send({
    from: adddresses[0]
});



 await contract.methods.emitEvent("Dostoevsky ").send({
    from: adddresses[0]
});

// getpast events
const results = await contract.getPastEvents('MyEvent',
{fromBlock:0});

console.log(results);
}

init();


///init will create a contract instance 