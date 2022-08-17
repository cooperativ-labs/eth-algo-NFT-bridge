const bridgeAbi = require ('./erc721abi.json') ;
const nftAbi = require ( './nftAbi.json') ;


const nftContract = (web3, nftCtcId ) => {
    return new web3.eth.Contract(
        nftAbi,
        nftCtcId
    )
}

const bridgeContract = web3 => {
    return new web3.eth.Contract(
        bridgeAbi["abi"],
        "0x7a403d1f0CF58EDa5D3047d856D2525cbbc993f2"
    )
}

const goerliNftMinter = '0x7a403d1f0CF58EDa5D3047d856D2525cbbc993f2'

module.exports = {
    nftContract,
    bridgeContract,
    goerliNftMinter
}