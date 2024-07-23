// https://github.com/Uniswap/v3-periphery/blob/main/deploys.md
// https://docs.uniswap.org/sdk/v3/guides/swaps/trading

const ethers = require("ethers");
const { abi: QuoterABI } = require("@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json");

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/a07ddfebd33a4161b915c09002291536");

async function getPrice(fromToken, toToken, amountInHuman) {

    const quoterAddress ="0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6"

}

const main = async () => {
    // Network: Ethereum
    const fromToken = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"; // USDC
    const toToken = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; // WETH
    const amountInHuman = "3540"; // current ETH value

    const amountOut = await getPrice(fromToken, toToken, amountInHuman);
    console.log(amountOut);
}

main();