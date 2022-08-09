const bridgeAbi = require ('./erc721abi.json') //assert { type: 'json' };
const nftAbi = require ( './nftAbi.json') //assert { type: 'json' };


const nftContract = (web3, nftCtcId ) => {
    return new web3.eth.Contract(
        nftAbi,
        nftCtcId
        //"0x8d43F477F386228AC23CEcFC53B9CC9883c19BF4"
    )
}

const bridgeContract = web3 => {
    return new web3.eth.Contract(
        bridgeAbi[abi],
        "0x7a403d1f0CF58EDa5D3047d856D2525cbbc993f2"
    )
}

module.exports = {
    nftContract,
    bridgeContract
}