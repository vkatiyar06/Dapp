import web3 from "./web3";
import FactoryContract from "./build/FactoryContract.json";

const factoryInstance = new web3.eth.Contract(
  JSON.parse(FactoryContract.interface),
  "0x894C53857756039478D2847dbFe50cdE4aC29E58"
);

export default factoryInstance;
