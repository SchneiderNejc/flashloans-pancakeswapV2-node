const { ethers } = require("ethers");
require("dotenv").config();

// Sepolia provider
const provider = new ethers.providers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
);

// Credentials setup
const sender = `${process.env.ADDRESS}`;
const privateKey = `${process.env.PRIVATE_KEY}`;
const signer = new ethers.Wallet(privateKey, provider);

const sendEth = async () => {
  // Parameters setup
  const receiver = "0x948962dbc28B7f83fBFd5Ae9812c7a1c94E00E30";
  const sendValueHuman = "0.005";
  const gasPrice = await provider.getGasPrice();
  const nonce = await provider.getTransactionCount(sender).then(console.log);

  // Build tx instance
  const txBuild = {
    from: sender,
    to: receiver,
    value: ethers.utils.parseEther(sendValueHuman),
    nonce: nonce,
    gasLimit: 21_000,
    gasPrice: gasPrice,
  };

  // Submit tx
  const txReceipt = await signer.sendTransaction(txBuild);

  // Print receipt
  console.log(txReceipt);
  console.log("https://sepolia.etherscan.io/tx/" + txReceipt.hash);
};

sendEth();
