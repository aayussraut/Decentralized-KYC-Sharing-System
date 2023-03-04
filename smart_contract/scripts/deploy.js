const hre = require("hardhat");

async function main() {
  const KycForm = await hre.ethers.getContractFactory("KycForm");
  const kycForm = await KycForm.deploy();

  await kycForm.deployed();

  console.log(`KYCFORM deployed to ${kycForm.address}`);
}

const ruinMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

ruinMain();
