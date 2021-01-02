const MyContract2 = artifacts.require("MyContract2");

module.exports = function (deployer) {
  deployer.deploy(MyContract2);
};
