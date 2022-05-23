const hre = require("hardhat");

async function main() {
  const AtomicCurrencySwap = await hre.ethers.getContractFactory("AtomicCurrencySwap");
  const atomicCurrencySwapContract = await AtomicCurrencySwap.deploy("0xf69186dfBa60DdB133E91E9A4B5673624293d8F8");

  await atomicCurrencySwapContract.deployed();

  console.log("atomicCurrencySwapContract deployed to:", atomicCurrencySwapContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

