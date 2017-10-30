var VoteWithTokens = artifacts.require("./VoteWithTokens.sol");

module.exports = function(deployer) {
  deployer.deploy(VoteWithTokens, 1000, web3.toWei('0.1', 'ether'), ['Greg', 'Jia', 'Jose']);
};
