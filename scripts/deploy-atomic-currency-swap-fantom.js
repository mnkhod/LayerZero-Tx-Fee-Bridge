const hre = require("hardhat");

async function main() {
  const AtomicCurrencySwap = await hre.ethers.getContractFactory("AtomicCurrencySwap");
  const atomicCurrencySwapContract = await AtomicCurrencySwap.deploy("0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf");

  await atomicCurrencySwapContract.deployed();

  console.log("atomicCurrencySwapContract deployed to:", atomicCurrencySwapContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

