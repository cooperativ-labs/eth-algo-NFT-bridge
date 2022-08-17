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
    const ctcCreator = accCreator.contract(backendCtc, req.algoBridgeId);
    console.log(`...backend now connected`);

    const authenticate = async() => {
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
            let ret = undefined;
            try {
                ret = await f();
                console.log(`Bridge has just been completed`)
            } catch (e) {
                ret = [`err`, e]
                console.log(`There is an error: `, e)
            }
        };    
        const apis = ctcCreator.a;
        call(async () => {
            const apiReturn = await apis.completeBridge();
            return apiReturn;
        });
    }

    authenticate().then((auth) => {
        if(auth == true) {
            completeBridge().then(() => {
                res.status(200).json({
                    success: `Bridge completed successfully`,
                    ethNftId: `successIsAmazing`
                });
            }).catch(err => console.log(`error while completing bridge: ${err}`))
            
        } else {
            console.log(`authentication failed`)
            res.status(500).json({ error: `Authentication failed. Bridge not completed` })
        }
    }) 
    
};
export default handler;
