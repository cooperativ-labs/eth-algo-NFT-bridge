const loadStdlib = require("@reach-sh/stdlib");
import * as backendCtc from "../../reachBackend/algoToEth.main.mjs";
const {authenticate} = require('./authenticate.js');
const private_key = process.env.PRIVATE_KEY;
const Web3 = require("web3");
const infura = `https://goerli.infura.io/v3/eaf55bdd847a49a6a4701f2ef30e96f8`;
const web3 = new Web3(infura);
const ctc = require('../../ethContracts/erc721a.js');
const nftCtc = ctc.bridgeContract(web3, ctc.goerliNftMinter);


const handler = async (request: any, res: any) => {
  let req = request.body;
    
    //connect wallet
    const stdlib = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    console.log(private_key)
    const accCreator = await stdlib.newAccountFromMnemonic(private_key);
    stdlib.setProviderByName("TestNet");
    console.log(`TestNet has been set as the provider`);
    //connect to backend
    const ctcCreator = accCreator.contract(backendCtc, req.algoBridgeId);
    console.log(`...backend now connected`);

    const authenticated = async() => {
        const creator = await ctcCreator.views.Creator_v();
        const bridger = await ctcCreator.views.Bridger_v();
        const bridgingComplete = await ctcCreator.views.bridgingComplete_v();
        const nftBalance = await ctcCreator.views.balance_NFT_v();

        const a = creator[1] === accCreator.getAddress();
        const b = bridger[1] === (req.bridgerOnAlgorand);
        const c = bridgingComplete[1] === false;
        const d = parseFloat(stdlib.formatCurrency(nftBalance[1],6))*1000000 > 0;
        console.log(`bridger on Algorand: ${bridger[1]} from chain is equal to ${(req.bridgerOnAlgorand)}`);
        console.log(`nftBalance is ${parseFloat(stdlib.formatCurrency(nftBalance[1],6))*1000000}`)
        console.log(a,b,c,d)
        return a && b && c && d;
    }

    const completeBridge = async() => {
        console.log('...about to complete bridge')
        const call = async (f: any) => {
            try {
                f().then( console.log(`Bridge has just been completed`));
            } catch (e) {
                console.log(`There is an error while completing bridge: `, e)
            }
        };    
        const apis = ctcCreator.a;
        call(async () => {
            const apiReturn = await apis.completeBridge();
            return apiReturn;
        });
    }

    const getNftId = async() => {
        const auth = await authenticate(ctc.goerliNftMinter);
        return auth.tokenId + 1;
    }

    const mintEthNft = async() => {
        nftCtc.methods
          .mint(
            req.bridgerOnEth,
            await getNftId()
          )
          .send({
            from: '0xFc63bAd66fB4f454378C404ae792CeE147b67AEf',
            gas: 300000,
            gasPrice: null,
          })
          .on("error", function (error: any, receipt: any) {
            console.log(`There is an error while minting ETH nft: ${JSON.stringify(error)}`);
          })
          .on("confirmation", function (confirmationNumber: any, receipt: any) {
            console.log(`confirmationNumber: ${confirmationNumber}`);
            const id = async() => await getNftId();
            return id();
          });
    }

    authenticated().then((auth) => {
        if(auth == true) {
            completeBridge().then(() => {
                mintEthNft().then((id) => {
                    res.status(200).json({
                        success: `Bridge completed successfully`,
                        ethNftId: `successIsAmazing : ${id}`
                    });
                }).catch((err) => {
                    console.log(`error while minting eth NFT: `, err)
                })
            }).catch(err => console.log(`error while completing bridge: ${err}`))
            
        } else {
            console.log(`authentication failed`)
            res.status(500).json({ error: `Authentication failed. Bridge not completed` })
        }
    }) 
    
};
export default handler;
