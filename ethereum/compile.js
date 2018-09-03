const path = require("path");
const fs = require("fs-extra");
const solc = require("solc");

const Bpath = path.resolve(__dirname, "build");
fs.removeSync(Bpath);
const Cpath = path.resolve(__dirname, "contracts", "Campaign.sol");
const src = fs.readFileSync(Cpath, "utf8");
const output = solc.compile(src, 1).contracts;
fs.ensureDirSync(Bpath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(Bpath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
