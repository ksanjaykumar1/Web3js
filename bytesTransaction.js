const Web3 = require("web3")
const web3 = new Web3('http://localhost:7545')

const Bytes = require("./build/contracts/Bytes.json")

const init = async()=>{

    const id = await web3.eth.net.getId()
    const deployedNetwok = Bytes.networks[id]

    const contract = new web3.eth.Contract(Bytes.abi,deployedNetwok.address)
    // console.log(contract)

    const adddresses = await web3.eth.getAccounts();
    let data = web3.eth.abi.encodeParameter('string', 'sanjay')
    let dummy = web3.eth.abi.encodeParameter('string', 'tum kyu chale aathe ho')
    let decodedDummy = web3.eth.abi.decodeParameter('string',dummy)
    console.log(decodedDummy)
    console.log(data)
    console.log(dummy)
    const receipt = await contract.methods.setDataB(data).send({
        from: adddresses[0]
    });
    console.log(receipt);

    // get value
    let value = await contract.methods.getDataB().call()
    console.log(value )
}

init()