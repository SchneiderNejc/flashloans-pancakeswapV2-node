const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/a07ddfebd33a4161b915c09002291536");

const factory = '0x1F98431c8aD98523631AE4a59f267346ea31F984'
// Network: Ethereum
const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const ANKR = "0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4";
const fee = 3000;
