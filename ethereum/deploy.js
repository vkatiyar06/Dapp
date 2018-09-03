const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const factory = require("./build/FactoryContract.json");
const provider = new HDWalletProvider("text here", "chain link");

const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(factory.interface))
    .deploy({ data: "0x" + factory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });
  console.log(result.options.address);
};
deploy();
