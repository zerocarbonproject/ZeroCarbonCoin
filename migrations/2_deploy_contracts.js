// #1 Get an instance of the contract to be deployed/migrated
var EnergisToken = artifacts.require("./EnergisToken.sol");

module.exports = function(deployer) {
  // #2 Deploy the instance of the contract
  deployer.deploy(EnergisToken);
};
