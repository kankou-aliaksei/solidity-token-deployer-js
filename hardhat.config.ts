import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "dotenv/config";

const privateKey = process.env.PRIVATE_KEY!;
const rpcUrl = process.env.RPC_URL!;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: rpcUrl,
      accounts: [privateKey]
    }
  }
};

export default config;
