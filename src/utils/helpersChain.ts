import { loadStdlib } from "@reach-sh/stdlib";
import Web3 from "web3";
import { nftContract } from "../../ethContracts/erc721";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as backendCtc from "../../reachBackend/test.main";
import { Dispatch, SetStateAction } from "react";
import { LoadingButtonStateType } from "../components/buttons/LoadingButtonText";
declare let window: any;

const reach = loadStdlib();

// =============== WALLET CONNECTORS =====================

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

export const connectAlgoWallet = async (
  algoWalletAddress: string,
  setAlgoWalletAddress: Dispatch<SetStateAction<string>>
) => {
  if (!!algoWalletAddress) {
    alert(`Algorand wallet already connected`);
    return;
  }
  reach.setWalletFallback(
    reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
  );
  const acc = await reach.getDefaultAccount();
  const contractUserPubKey = acc.getAddress();
  setAlgoWalletAddress(reach.formatAddress(contractUserPubKey));
};

// =============== SHARED FUNCTIONS =====================

export const shortenAddress = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

const runAPI = async (apiName: any, algorandBridgeId: any) => {
  let input: any = [];
  callAPI(backendCtc, algorandBridgeId, apiName, input);
};

// =============== FROM-ETH FUNCTIONS =====================

export const checkEthNftBalance = async (
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

export type getEthNftUriProps = {
  selectedNftId: string;
  nftToBeBridgedAddress: string;
  ethWalletAddress: string;
  setNftImageUrl: Dispatch<SetStateAction<string>>;
  setNftUrl: Dispatch<SetStateAction<string>>;
  setMetaData: Dispatch<SetStateAction<undefined>>;
};
export const getEthNftUri = async ({
  selectedNftId,
  nftToBeBridgedAddress,
  ethWalletAddress,
  setNftImageUrl,
  setNftUrl,
  setMetaData,
}: getEthNftUriProps) => {
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

      setNftImageUrl(uri2);
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

export const callAPI = async (
  reachBackend: any,
  ctcDeployed: any,
  apiName: any,
  apiArg: any
) => {
  let response;
  reach.setWalletFallback(
    reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
  );
  const acc = await reach.getDefaultAccount();
  const ctc = acc.contract(reachBackend, ctcDeployed);

  const call = async (f: any) => {
    let res = undefined;
    try {
      res = await f();
      response = await f();
      if (res == `no`) {
        console.log(`"${apiName}" API is not available from Reach backend`);
        alert(`"${apiName}" API is not available from Reach backend`);
      } else {
        console.log(
          `the "${apiName}" API has successfully worked. Here is the response:`,
          res
        );
        alert(
          `the "${apiName}" API has successfully worked. Here is the response: ${res}`
        );
      }
    } catch (e) {
      res = [`err`, e];
      console.log(`there is an error while running "${apiName} API: "`, e);
      alert(`there is an error while running "${apiName} API: ${e}`);
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
  return response;
};

type deployAlgoTokenProps = {
  algoWalletAddress: string;
  ethWalletAddress: string;
  nftUrl: string;
  selectedNftId: string;
  algorandBridgeId: any;
  setNftClaimId: Dispatch<SetStateAction<string>>;
  setButtonStep: Dispatch<SetStateAction<LoadingButtonStateType>>;
};

const deployAlgoToken = async ({
  algoWalletAddress,
  ethWalletAddress,
  nftUrl,
  selectedNftId,
  algorandBridgeId,
  setNftClaimId,
  setButtonStep,
}: deployAlgoTokenProps) => {
  if (algoWalletAddress == "") {
    alert("Please enter your Algorand address");
    return;
  }
  try {
    console.log("deploying algo token");
    const res = await fetch("api/bridgeToAlgo", {
      // @Sunday - Problem here
      method: "POST",
      body: JSON.stringify({
        ethRecAddr: ethWalletAddress,
        ethNftCtcId: "0x8d43F477F386228AC23CEcFC53B9CC9883c19BF4",
        bridgerOnEth: ethWalletAddress,
        bridgerOnAlgo: algoWalletAddress,
        name: "",
        url: nftUrl,
        //We probably need to transfer the metadata of the NFT to the Algorand contract
        metadataHash: "metaDataHash",
        tokenId: selectedNftId,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);
    const data = await res.json();
    if (data.contractId) {
      algorandBridgeId.current = `${data.contractId}`;
      setNftClaimId(data.NFTid);
      optInToNFT(data.NFTid);
      alert(
        `This Algorand Bridge contract now holds your NFT waiting to be claimed (write it down): ${data.contractId}`
      );

      alert(
        `This is the ID of your "NFT" waiting for you to claim after opting in:  ${data.NFTid}. You will be able to claim your NFT on Algorand on the next prompt`
      );
      console.log(algorandBridgeId.current);
      const apiReturn = runAPI("claimNFT", algorandBridgeId.current);
      setButtonStep("confirmed");
      return apiReturn;
    } else {
      setButtonStep("failed");
      alert(`Server authentication failed. Please try again`);
    }
  } catch (err) {
    alert(`error: ${err}`);
  }
};

type bridgeEthToAlgoProps = deployAlgoTokenProps & {
  count: any;
  nftToBeBridgedAddress: string;
  setNftImageUrl: Dispatch<SetStateAction<string>>;
  setNftUrl: Dispatch<SetStateAction<string>>;
  setMetaData: Dispatch<SetStateAction<undefined>>;
};

export const bridgeEthToAlgo = async ({
  algoWalletAddress,
  ethWalletAddress,
  nftUrl,
  selectedNftId,
  algorandBridgeId,
  count,
  nftToBeBridgedAddress,
  setButtonStep,
  setNftImageUrl,
  setNftUrl,
  setMetaData,
  setNftClaimId,
}: bridgeEthToAlgoProps) => {
  if (!ethWalletAddress) {
    alert("Please connect your wallet...");
  }
  if (algoWalletAddress.length <= 0) {
    alert(`Please enter a valid Algorand address`);
    return;
  }

  if (!!ethWalletAddress)
    try {
      if (isNaN(parseInt(selectedNftId))) {
        alert(
          `Please enter a valid NFT ID. You entered this invalid value: "${selectedNftId}"`
        );
        return;
      }
      setButtonStep("submitting");
      const web3_ = new Web3(window.ethereum);
      const ctc = await nftContract(web3_, nftToBeBridgedAddress);
      ctc.methods
        .transferFrom(
          ethWalletAddress,
          "0x7a403d1f0CF58EDa5D3047d856D2525cbbc993f2",
          selectedNftId
        )
        .send({
          from: ethWalletAddress,
          gas: 300000,
          gasPrice: null,
        })
        .on("error", function (error: any, receipt: any) {
          setButtonStep("failed");

          alert(`There is an error: ${JSON.stringify(error)}`);
        })
        .on(
          "confirmation",
          async function (confirmationNumber: any, receipt: any) {
            //this is to make sure it only runs once and not infinitely
            while (count.current < 1) {
              await getEthNftUri({
                selectedNftId,
                nftToBeBridgedAddress,
                ethWalletAddress,
                setNftImageUrl,
                setNftUrl,
                setMetaData,
              });
              const deployAlgo = await deployAlgoToken({
                algoWalletAddress,
                ethWalletAddress,
                nftUrl,
                selectedNftId,
                algorandBridgeId,
                setNftClaimId,
                setButtonStep,
              });
              console.log("deployAlgo", deployAlgo);
              console.log(confirmationNumber, receipt);
              count.current = count.current + 1;
            }
          }
        );
    } catch (err: any) {
      setButtonStep("failed");

      alert(err.message);
    }
};

// =============== FROM-ALGO FUNCTIONS =====================

export type getAlgoNftUriProps = {
  nftToBeBridgedAddress: string;
  setNftUrl: Dispatch<SetStateAction<string>>;
  setNftImageUrl: Dispatch<SetStateAction<string>>;
};

export const getAlgoNftUri = async ({
  nftToBeBridgedAddress,
  setNftUrl,
  setNftImageUrl,
}: getAlgoNftUriProps) => {
  const acc = await reach.getDefaultAccount();
  const metadata = await acc.tokenMetadata(nftToBeBridgedAddress);
  let obj = JSON.stringify(metadata);
  console.log(metadata);

  setNftImageUrl("https://ipfs.io/ipfs/" + metadata?.image?.substring(7));
  setNftUrl(metadata.url);
  alert(metadata.url);
};

type deployAlgoLockProps = {
  algoWalletAddress: string;
  selectedNftId: string;
  status: any;
  algorandBridgeId: any;
  setButtonStep: Dispatch<SetStateAction<LoadingButtonStateType>>;
};

const deployAlgoLock = async ({
  algoWalletAddress,
  selectedNftId,
  status,
  algorandBridgeId,
  setButtonStep,
}: deployAlgoLockProps) => {
  try {
    const res = await fetch("api/deployAlgoLock", {
      method: "POST",
      body: JSON.stringify({
        algoNftId: selectedNftId,
        bridgerOnAlgorand: algoWalletAddress,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let data: any;
    res.json().then((x) => {
      console.log("I am running here");
      alert(x.success);
      console.log(x.success);
      data = x;
      if (data.contractId) {
        status.current = "lockCtcDeployed";
        algorandBridgeId.current = `${data.contractId}`;
        alert(
          `You now need to lock your Algorand NFT in the bridge contract: ${data.contractId}`
        );
        setButtonStep("submitting");
      } else {
        setButtonStep("failed");
        alert(`There was a problem deploying the bridge contract`);
      }
    });
  } catch (err) {
    status.current = "error";
    alert(`error: ${err}`);
  }
};

type bridgeAlgoToEthProps = deployAlgoLockProps & {
  ethNftId: any;
};
//triggered by submit of form
export const bridgeAlgoToEth = async ({
  algorandBridgeId,
  ethNftId,
  algoWalletAddress,
  selectedNftId,
  status,
  setButtonStep,
}: bridgeAlgoToEthProps) => {
  const lockNFT = async () => {
    try {
      await runAPI("lockNFT", algorandBridgeId.current);
      status.current = "nftLocked";
    } catch (err) {
      status.current = "error";
      alert(`error: ${err}`);
    }
  };
  //
  const finalBridgeStep = async () => {
    try {
      const res = await fetch("api/finalBridgeStep", {
        method: "POST",
        body: JSON.stringify({
          algoNftId: selectedNftId,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.ethNftId) {
        status.current = "bridged";
        ethNftId.current = `${data.contractId}`;
        alert(`Here is your ERC-721 NFT ID: ${data.contractId}`);
        setButtonStep("confirmed");
      } else {
        setButtonStep("failed");
        alert(`Authentication failed. Please try again.`);
      }
    } catch (err) {
      status.current = "error";
      alert(`error: ${err}`);
    }
  };
  //run the steps now
  if (status.current == "init" && algorandBridgeId.current === "") {
    deployAlgoLock({
      algoWalletAddress,
      selectedNftId,
      status,
      algorandBridgeId,
      setButtonStep,
    }).then(() => {
      if (status.current == "lockCtcDeployed")
        lockNFT().then(() => {
          if (status.current == "nftLocked") finalBridgeStep();
        });
    });
  } else if (status.current == "lockCtcDeployed") {
    lockNFT().then(() => {
      if (status.current == "nftLocked") finalBridgeStep();
    });
  } else if (status.current == "nftLocked") {
    finalBridgeStep();
  } else if (status.current == "error") {
    setButtonStep("failed");
    alert(`Error message returned from backend`);
  }
};
