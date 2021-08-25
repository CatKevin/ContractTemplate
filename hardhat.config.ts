import "hardhat-typechain";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
function compileSetting(version: string, runs: number) {
  return {
    version: version,
    settings: {
      optimizer: {
        enabled: true,
        runs: runs,
      },
      outputSelection: {
        "*": {
          "*": [
            "metadata",
            "evm.bytecode", // Enable the metadata and bytecode outputs of every single contract.
            "evm.bytecode.sourceMap", // Enable the source map output of every single contract.
          ],
          "": [
            "ast", // Enable the AST output of every single file.
          ],
        },
      },
    },
  };
}
export default {
  etherscan: {
    apiKey: process.env.ETHERSCAN_APIKEY,
  },
  solidity: {
    compilers: [compileSetting("0.7.0", 200)],
  }
}