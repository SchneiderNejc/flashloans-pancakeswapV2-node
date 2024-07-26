const ethers = require("ethers");

const {
  factory,
  router,
  fromToken,
  toToken,
  fromTokenSymbol,
  toTokenSymbol,
} = require("./AddressList");

const { erc20ABI, factoryABI, routerABI, pairABI } = require("./AbiList");

// Standard Provider
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/a07ddfebd33a4161b915c09002291536"
);

// Connect to factory
const contractFactory = new ethers.Contract(factory, factoryABI, provider);

// Connect to router
const contractRouter = new ethers.Contract(router, routerABI, provider);

// Read from smart contract
const getPrices = async (amountInHuman) => {
  // Convert the amount in
  const contractToken = new ethers.Contract(fromToken, erc20ABI, provider);
  const decimals = await contractToken.decimals(); // Read decimals from contract.
  const amountIn = ethers.utils.parseUnits(amountInHuman, decimals).toString();

  // Get amounts out
  const amountsOut = await contractRouter.getAmountsOut(amountIn, [
    fromToken,
    toToken,
  ]);

  // Convert amount out - decimals
  const contractToken2 = new ethers.Contract(toToken, erc20ABI, provider);
  const decimals2 = await contractToken2.decimals();

  // Convert amount out - human readable
  const amountOutHuman = ethers.utils.formatUnits(
    amountsOut[1].toString(),
    decimals2
  );

  console.log(
    `${amountInHuman} ${fromTokenSymbol} = ${amountOutHuman} ${toTokenSymbol}`
  );
};

const amountInHuman = "1";
getPrices(amountInHuman);
