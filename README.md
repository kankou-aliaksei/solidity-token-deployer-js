# Solidity Token Deployer (JavaScript)

This project demonstrates how to deploy an ERC-20 token contract (TetherUSDT) using Hardhat and TypeScript with Viem.

## Setup

### 1. Clone the Repository

First, clone the repository and navigate into the project directory:

```bash
git clone https://github.com/kankou-aliaksei/solidity-token-deployer-js
cd solidity-token-deployer-js
```

### 2. Install Dependencies

Install the necessary dependencies:

```bash
npm install
```

### 3. Create Environment Variables File

Create a .env file in the root of your project based on .env.example

### 4. Compile the Contract

Compile the smart contract to ensure everything is set up correctly:

```bash
npx hardhat compile
```

### 5. Deploy the Contract

Deploy the contract to the Sepolia network:

```
npx hardhat run scripts/deploy.ts --network sepolia
```
