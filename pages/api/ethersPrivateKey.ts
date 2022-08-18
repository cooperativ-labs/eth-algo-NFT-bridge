const ethers = require("ethers");
const Web3 = require("web3");
const ctc = require("../../ethContracts/erc721a.js");
const mnemonic = process.env.ETH_MNEMONIC;
const infura = `https://goerli.infura.io/v3/eaf55bdd847a49a6a4701f2ef30e96f8`;
const web3 = new Web3(infura);

const handler = async (request: any, res: any) => {
  const mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
  const url = "ipfs://QmNv2qYe3aVkaKYDAywWg4mHRPLgSadZat24MQ2Ev8fUfG/0";
  const privateKey = mnemonicWallet.privateKey;
  console.log(`This is PK: ${privateKey}`);
  const acc = web3.eth.accounts.privateKeyToAccount(privateKey); //account object
  const address = acc.address;
  console.log(`Address making transaction:  ${address}`);
  const bridgeCtc = ctc.bridgeContract(web3, ctc.goerliNftMinter);
  const nonce = await web3.eth.getTransactionCount(address, "latest"); //get latest nonce
  const tx = {
    from: address,
    to: ctc.goerliNftMinter,
    gas: 500000,
    maxPriorityFeePerGas: 1999999987,
    nonce: nonce,
    data: bridgeCtc.methods.mint(address, url).encodeABI(),
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, privateKey);
  signPromise
    .then((signedTx: any) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err: any, hash: string) {
          if (!err) {
            console.log("The hash of your transaction is: ", hash);
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err: any) => {
      console.log("Promise failed:", err);
    });

  res.status(500).send("I will never show you my private key");
};

export default handler;
