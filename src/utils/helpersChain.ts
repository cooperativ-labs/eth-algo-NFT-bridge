import { loadStdlib } from "@reach-sh/stdlib";
import Web3 from "web3";
import { nftContract } from "../../ethContracts/erc721";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as backendCtc from "../../reachBackend/test.main";

declare let window: any;

export const shortenAddress = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const connectAlgoWallet = async (
  setAlgoWalletAddress: (uri: string) => void
) => {
  const reach = loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
  reach.setWalletFallback(
    reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
  );
  const acc = await reach.getDefaultAccount();
  const contractUserPubKey = acc.getAddress();
  setAlgoWalletAddress(reach.formatAddress(contractUserPubKey));
};

export const connectEthWallet = async (
  ethWalletAddress: string,
  setEthWalletAddress: (uri: string) => void
) => {
  /* ////check if MetaMask is installed */
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3_ = new Web3(window.ethereum);
      if (ethWalletAddress) {
        alert(`Metamask Wallet already connected`);
      }
      const accounts = await web3_.eth.getAccounts();
      setEthWalletAddress(accounts[0]);
    } catch (err: any) {
      alert(err.message);
    }
  } else {
    /* MetaMask is not installed */
    console.log("Please install MetaMask");
  }
};

export const checkNftBalance = async (
  nftCtcId: string,
  ethWalletAddress: string,
  setNftBalance: (bal: string) => void
) => {
  //should I make web3 a state?
  const web3_ = new Web3(window.ethereum);
  const ctc = await nftContract(web3_, nftCtcId);
  if (!nftCtcId) {
    alert("Please enter your NFT's contract address");
  }
  if (ethWalletAddress) {
    try {
      const bal = await ctc.methods.balanceOf(ethWalletAddress).call();
      setNftBalance(bal);
    } catch (err: any) {
      alert(`checkBalance: ${err.message}`);
    }
  }
};

export const getNftUri = async (
  selectedNftId: number,
  nftToBeBridgedAddress: string,
  ethWalletAddress: string,
  setNftImageURI: (uri: string) => void
) => {
  if (isNaN(selectedNftId)) {
    alert(
      `Please enter a valid NFT ID. You entered this invalid value: "${selectedNftId}"`
    );
    return;
  }
  if (!!ethWalletAddress)
    try {
      const web3_ = new Web3(window.ethereum);
      const ctc = await nftContract(web3_, nftToBeBridgedAddress);
      const uri = await ctc.methods.tokenURI(selectedNftId).call();
      // setURL(uri);
      const gateway = uri.replace(
        "ipfs://",
        "https://gateway.ipfscdn.io/ipfs/"
      );
      const metadata = await fetch(gateway).then((r) => r.json());
      // setMetaData(metadata);
      const uri2 = "https://ipfs.io/ipfs/" + metadata.image.substring(7);
      // setSuccessMsg(`The URL of the NFT with id ${tokenId} is:
      //          ${uri2}`);
      setNftImageURI(uri2);
    } catch (err: any) {
      alert(`getUri: ${err.message}`);
    }
};

export const runAPI = (apiName: string) => {
  const API = (arg = { apiName: [[""]] }) => {
    return arg;
  };
  const Fun = (arg1, arg2, arg3, arg4) => {
    return [arg1, arg2, arg3, arg4];
  };

  const User = API({
    approveBridge: Fun([], Bool, [], `Backend Approve Bridge`),
    lockNFT: Fun([], Bool, [], `Bridger Lock NFT`),
    claimNFT: Fun([], Bool, [], `Bridger Claim NFT`),
  });

  let input = User[apiName][0].map((j, index) => {
    return j == UInt
      ? parseInt(getElement(`${apiName}${j}${index + 1}`))
      : getElement(`${apiName}${j}${index + 1}`);
  });
  console.log(`this is input: `, input);
  callAPI(backendCtc, algoCtcId.current, apiName, input);
};

export const optinToNFT = async (token) => {
  const reach = loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
  reach.setWalletFallback(
    reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
  );
  const acc = await reach.getDefaultAccount();
  await acc.tokenAccept(token);
};
