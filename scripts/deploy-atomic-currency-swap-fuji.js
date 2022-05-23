const hre = require("hardhat");

async function main() {
  const AtomicCurrencySwap = await hre.ethers.getContractFactory("AtomicCurrencySwap");
  const atomicCurrencySwapContract = await AtomicCurrencySwap.deploy("0x93f54D755A063cE7bB9e6Ac47Eccc8e33411d706");

  await atomicCurrencySwapContract.deployed();

  console.log("atomicCurrencySwapContract deployed to:", atomicCurrencySwapContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

