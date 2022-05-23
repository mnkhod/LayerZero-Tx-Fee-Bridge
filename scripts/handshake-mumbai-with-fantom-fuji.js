const hre = require("hardhat");

async function main() {
  const mumbaiSwap = await ethers.getContractAt('AtomicCurrencySwap',"0xE3065870A0bF4e466a1205Dc802167Db5Df2D1CE")

  await mumbaiSwap.setTrustedRemote(10012,"0x9A0c4F0370984857189E2491339fC8a2073081E9")
  await mumbaiSwap.setTrustedRemote(10006,"0xBa20Db1A6933d8E97174d873bBA169208b63e443")

  console.log("Handshake Done")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

