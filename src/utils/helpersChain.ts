import { loadStdlib } from "@reach-sh/stdlib";
import Web3 from "web3";
import { nftContract } from "../../ethContracts/erc721";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as backendCtc from "../../reachBackend/test.main";
import { Dispatch, SetStateAction } from "react";

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
  selectedNftId: string,
  nftToBeBridgedAddress: string,
  ethWalletAddress: string,
  setNftImageURI: (uri: string) => void,
  setNftUrl: Dispatch<SetStateAction<string>>,
  setMetaData: Dispatch<SetStateAction<undefined>>
) => {
  if (isNaN(parseInt(selectedNftId))) {
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
      setNftUrl(uri);
      const gateway = uri.replace(
        "ipfs://",
        "https://gateway.ipfscdn.io/ipfs/"
      );
      const metadata = await fetch(gateway).then((r) => r.json());
      setMetaData(metadata);
      const uri2 = "https://ipfs.io/ipfs/" + metadata.image.substring(7);

      setNftImageURI(uri2);
    } catch (err: any) {
      alert(`getUri: ${err.message}`);
    }
};

export const optInToNFT = async (token: string) => {
  const reach = loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
  reach.setWalletFallback(
    reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
  );
  const acc = await reach.getDefaultAccount();
  console.log("acc", acc);
  const accepted = await acc.tokenAccept(token);
  return accepted;
};

export const callAPI = async (ctcDeployed: string, apiName: string, apiArg) => {
  // @Sunday - What Are These Arguments?
  const reach = loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
  reach.setWalletFallback(
    reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
  );
  const acc = await reach.getDefaultAccount();
  const ctc = acc.contract(backendCtc, ctcDeployed);

  const call = async (f: any) => {
    let res = undefined;
    try {
      res = await f();
      if (res == `no`) {
        console.log(`"${apiName}" API is not available from Reach backend`);
        alert(`"${apiName}" API is not available from Reach backend`);
        // setBridgeButton(noAnimate);
      } else {
        console.log(
          `the "${apiName}" API has successfully worked. Here is the response:`,
          res
        );
        alert(
          `the "${apiName}" API has successfully worked. Here is the response: ${res}`
        );
        // setBridgeButton(noAnimate);
      }
    } catch (e) {
      res = [`err`, e];
      console.log(`there is an error while running "${apiName} API: "`, e);
      alert(`there is an error while running "${apiName} API: ${e}`);
      // setBridgeButton(noAnimate);
    }
  };
  //
  const apis = ctc.a;
  call(async () => {
    let apiReturn;
    ``;
    for (const x in apis) {
      if (x == apiName) {
        apiReturn = await apis[apiName](...apiArg);
      }
    }
    if (apiReturn == ``) {
      apiReturn = `no`;
    }
    return apiReturn;
  });
};
