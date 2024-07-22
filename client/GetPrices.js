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
const amountInHuman = "500";
getPrices(amountInHuman);
