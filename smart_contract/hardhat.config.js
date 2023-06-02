require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/STPvJf9UyBmGqvsBkA09Y3DXmnQj-SfY", //alchemy/infura url
      accounts: [
        "9781c155576fa0611bff45e923c9a4305742e68a5624d9070828ca8a190ecbb0", //private key
      ],
    },
  },
};
