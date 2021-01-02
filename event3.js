const Web3 = require('web3');
const MyContract2 =require('./build/contracts/MyContract2.json')

const init = async ()=>{
const web3 = new Web3('http://localhost:8545')


const id = await web3.eth.net.getId()
const deployedNetwok = MyContract2.networks[id];
//creating smart contract instance
const contract = new web3.eth.Contract(MyContract2.abi,deployedNetwok.address)





// real time events
const adddresses = await web3.eth.getAccounts();
await contract.methods.emitEvent("karamazov").send({
    from: adddresses[0]
});

contract.events.MyEvent({})
.on('data',event => console.log(event));

// await new Promise(resolve => setTimeout(()=>resolve,2000))

 await contract.methods.emitEvent("Dostoevsky ").send({
    from: adddresses[0]



});

// contract.events.MyEvent({})
// .on('data',event => console.log(event));

}



init();
 

///init will create a contract instance 