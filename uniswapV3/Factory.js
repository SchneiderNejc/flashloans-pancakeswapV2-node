const { ethers } = require('ethers');
require('dotenv').config();

// Mainenet provider
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);

const factory = '0x1F98431c8aD98523631AE4a59f267346ea31F984'

const abi = [
    "function getPool(address tokenA, address tokenB, uint24 fee) external view returns (address pool)"
];

const factoryContract = new ethers.Contract(factory, abi, provider)

// Network: Ethereum
const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const ANKR = "0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4";
const fee = 3000;

const getPool = async () => {
    const pool = await factoryContract.getPool(WETH, ANKR, fee);
    console.log(pool);
    //return pool;
}

getPool();