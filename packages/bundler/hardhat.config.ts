import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

import fs from "fs";

import { HardhatUserConfig } from "hardhat/config";
import { NetworkUserConfig } from "hardhat/src/types/config";

const mnemonicFileName = process.env.MNEMONIC_FILE;
let mnemonic = "test ".repeat(11) + "junk";
if (mnemonicFileName != null && fs.existsSync(mnemonicFileName)) {
  mnemonic = fs.readFileSync(mnemonicFileName, "ascii").trim();
}

const infuraUrl = (name: string): string =>
  `https://${name}.infura.io/v3/${process.env.INFURA_ID}`;

function getNetwork(url: string): NetworkUserConfig {
  return {
    url,
    accounts: {
      mnemonic,
    },
  };
}

function getInfuraNetwork(name: string): NetworkUserConfig {
  return getNetwork(infuraUrl(name));
}

const config: HardhatUserConfig = {
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
  },
  networks: {
    localhost: {
      url: "http://localhost:8545/",
      saveDeployments: false,
    },
    goerli: getInfuraNetwork("goerli"),
    polygon: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/WZq2QqE0aP_rpAiCZ0XHwYQUEyf5kO4V",
      gasPrice: 35000000000,
    },
    mumbai: {
      url: "https://delicate-delicate-forest.matic-testnet.discover.quiknode.pro/e9877ddf016c7fabd7e5bb045455d9aab0a09eaa/",
    },
  },
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: { enabled: true },
    },
  },
};

export default config;
