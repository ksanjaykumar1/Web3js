const Web3 = require('web3'); // here we get the object 
//import Web3 from 'web3'; //for webpack




//const provider = new Web3.provider.http('http://localhost:8545');
const web3 = new Web3('http://localhost:8545') // here we create a instance , we pass a url node for ethereum node ,// here we have connected to local blockchain (ganache ), 
//alternatively we can pass infura node url

web3.eth.getBlockNumber()
    .then(()=>console.log('done'))






