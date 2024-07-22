const ethers = require("ethers");

const { 
    addressFactory,
    addressRouter,
    addressFrom,
    addressTo
} = require("./AddressList");

const { erc20ABI, factoryABI, routerABI, pairABI } = require("./AbiList");

const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.bnbchain.org");

const contractFactory = new ethers.Contract(addressFactory, factoryABI, provider);

const contractRouter = new ethers.Contract(addressRouter, routerABI, provider);
const getPrices = async (amountInHuman) => {
    const contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);
    const decimals = await contractToken.decimals(); // Read decimals from contract.
    const amountIn = ethers.utils.parseUnits(amountInHuman, decimals).toString();
    const amountsOut = await contractRouter.getAmountsOut(amountIn, [
        addressFrom, 
        addressTo
    ]);
    const contractToken2 = new ethers.Contract(addressTo, erc20ABI, provider);
    const decimals2 = await contractToken2.decimals();
    const amountOutHuman = ethers.utils.formatUnits(amountsOut[1].toString(), decimals2);
    console.log(`500 BUSD = ${amountOutHuman} WBNB`);
const amountInHuman = "500";
getPrices(amountInHuman);
