import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const TetherUSDT = await ethers.getContractFactory("TetherUSDT");
    const usdt = await TetherUSDT.deploy("Tether USD", "USDT");

    await usdt.deployed();

    console.log("Tether USDT deployed to:", usdt.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
