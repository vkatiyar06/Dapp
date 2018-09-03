const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/FactoryContract.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");
let factory;
let campaign;
let facc;
let cacc;

beforeEach(async () => {
  facc = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: facc[0], gas: "1000000" });

  await factory.methods
    .createCampaign("100")
    .send({ from: facc[0], gas: "1000000" });

  [cacc] = await factory.methods.getCampaigns().call();
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    cacc
  );
});

describe("tests", () => {
  it("test for campaign and factory", async () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
    const q = await campaign.methods.manager().call();
    assert.equal(facc[0], q);
  });
  it("test 2", async () => {
    await campaign.methods.contribute().send({ from: facc[1], value: "200" });
    const q = await campaign.methods.approvers(facc[1]).call();
    assert(q);
  });
  it("request", async () => {
    await campaign.methods.contribute().send({ from: facc[1], value: "200" });

    await campaign.methods
      .createRequest("need", facc[1], "100")
      .send({ from: facc[0], gas: "1000000" });

    await campaign.methods
      .approveRequest(0)
      .send({ from: facc[1], gas: 1000000 });

    await campaign.methods
      .finnalizeRequest(0)
      .send({ from: facc[0], gas: 1000000 });
    let q = await web3.eth.getBalance(facc[1]);
    q = web3.utils.fromWei(q, "ether");
    q = parseFloat(q);
    assert(q > 99);
  });
});
