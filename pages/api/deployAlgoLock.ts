const loadStdlib = require("@reach-sh/stdlib");
import * as backendCtc from "../../reachBackend/algoToEth.main.mjs";
// import { nftContract } from '../../ethContracts/erc721.';
const private_key = process.env.PRIVATE_KEY;
//write a function that finds how many enteries is in an object
const count = (obj : object) => {
  let count = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
};
const handler = async (request: any, res: any) => {
  let req = request.body;
  
  const deploySmartContract = async () => {
    let ctcId = `deployment pending`;
    //connect wallet
    const stdlib = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    console.log(private_key)
    const accCreator = await stdlib.newAccountFromMnemonic(private_key);
    //stdlib.setProviderByName("TestNet");
    console.log(`TestNet has been set as the provider`);
    //connect to backend
    const ctcCreator = accCreator.contract(backendCtc);
    console.log(`...backend now connected`);

    await Promise.all([
        backendCtc
          .Creator(ctcCreator, {
            getParams: (msg: string) => {
              console.log(
                `${stdlib.formatAddress(
                  accCreator
                )} about to set "NFTid" and "Bridger address" as parameters of central Contract`
              );
              ctcCreator.getInfo().then((id: string) => {
                res = ctcId
                ctcId = id;
                console.log(
                  `SUCCESS: this is the deployed contract id: ${id} and ${msg}`
                );
              });
              return { NFT: req.algoNftId, Bridger: req.bridgerOnAlgorand };
            },
            iDeployed: async (msg: string) => {
              console.log(msg + ` and ${ctcId} is the contract ID`);
            },
          })
          .then(() => {})
          .catch((err) => {
            console.log(
              `ERROR: Bridge contract hfailed during deployment`,
              err
            );
          })
    ]);
    return [ctcId, req.algoNftId];
  };
  try {
    deploySmartContract().then((a) => {
      console.log(`about to work on ${a[0]}`);
      setTimeout(() => {
        res.status(200).json({
          success: `Contract deployed successfully with Contract id: ${a[0]}`,
          NFTid: req.algoNftId,
          contractId: `${a[0]}`,
        });
        console.log(`you should see this in front end: ${a[0]}`)
      }, 20000);

  })
  } catch (err) {
    console.log(`error: `, err);
    res.status(500).json({ error: err });
  }
};
export default handler;
