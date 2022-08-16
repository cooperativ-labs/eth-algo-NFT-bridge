const loadStdlib = require("@reach-sh/stdlib");
import * as backendCtc from "../../reachBackend/algoToEth.main.mjs";
// import { nftContract } from '../../ethContracts/erc721.';
const private_key = process.env.PRIVATE_KEY;

const handler = async (request: any, res: any) => {
  let req = request.body;
    
    //connect wallet
    const stdlib = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    console.log(private_key)
    const accCreator = await stdlib.newAccountFromMnemonic(private_key);
    stdlib.setProviderByName("TestNet");
    console.log(`TestNet has been set as the provider`);
    //connect to backend
    const ctcCreator = accCreator.contract(backendCtc);
    console.log(`...backend now connected`);

    const creator = await ctcCreator.views.Creator_v();
    const bridger = await ctcCreator.views.Bridger_v();
    const bridgingComplete = await ctcCreator.views.bridgingComplete_v();
    const nftBalance = await ctcCreator.views.balance_NFT_v();

    const a = creator[1] === accCreator.getAddress();
    const b = bridger[1] === req.bridgerOnAlgorand;
    const c = bridgingComplete[1] === false;
    const d = parseInt(stdlib.bigNumberToBigInt(nftBalance[1])) === 1;
    console.log(a,b,c,d)
    
    const completeBridge = async() => {
        const call = async (f: any) => {
            let res = undefined;
            try {
                res = await f();
                console.log(`Bridge has just been completed`)
            } catch (e) {
                res = [`err`, e]
                console.log(`There is an error: `, e)
            }
        };    
        const apis = ctcCreator.a;
        call(async () => {
            const apiReturn = await apis.completeBridge();
            return apiReturn;
        });
    }

    
  
};
export default handler;
