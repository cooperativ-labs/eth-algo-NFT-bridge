const bip39 = require("bip39");
const { hdkey } = require('ethereumjs-wallet');
const privateKey = process.env.ETH_MNEMONIC;

function generateAddressesFromSeed(mnemonic, count) {  
  let seed = bip39.mnemonicToSeedSync(mnemonic);
  let hdwallet = hdkey.fromMasterSeed(seed);
  let wallet_hdpath = "m/44'/60'/0'/0/";
  
  let accounts = [];
  for (let i = 0; i < count; i++) {
    let wallet = hdwallet.derivePath(wallet_hdpath + i).getWallet();
    let address = "0x" + wallet.getAddress().toString("hex");
    let privateKey = wallet.getPrivateKey().toString("hex");
    accounts.push({ address: address, privateKey: privateKey });
  }
  return accounts;
}
const mnemonic = privateKey
const count = 5;
const result = generateAddressesFromSeed(mnemonic, count);
console.log(result);