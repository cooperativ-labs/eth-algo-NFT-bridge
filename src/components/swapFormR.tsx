import FormButton from "./buttons/FormButton";
import LoadingButtonText, {
  LoadingButtonStateType,
} from "./buttons/LoadingButtonText";
import React, { FC, useState, useRef, useEffect } from "react";
import { Form, Formik } from "formik";
declare let window: any;
import EthSwapF from "./EthSwapF";
import AlgoSwapF from "./AlgoSwapF";
import ImageSection from "../containers/ImageSection";
import { callAPI, getAlgoNftBalance, getNftUri, optInToNFT } from "../utils/helpersChain";
import * as backendCtc from '../../reachBackend/algoToEth.main.mjs'


const SwapFormR: FC = () => {
  const [buttonStep, setButtonStep] = useState<LoadingButtonStateType>("idle");
  const [ethWalletAddress, setEthWalletAddress] = useState<string>("");
  const [algoWalletAddress, setAlgoWalletAddress] = useState<string>("");
  const [pubKey, setPubKey] = useState<string>("");
  const [nftUrl, setNftUrl] = useState<string>("");
  const [nftImageUri, setNftImageURI] = useState<string>("");
  const [metaData, setMetaData] = useState<any>("");
  const algorandBridgeId = useRef<string>("");
  const ethNftId = useRef<string>("");
  const status = useRef<string>("init");

  //triggered by submit of form
  const bridgeNFT = async (nft: string ) => {
    //
    const deployAlgoLock = async () => {
      try {
        setButtonStep("submitting");
        const res = await fetch("api/deployAlgoLock", {
          method: "POST",
          body: JSON.stringify({
            algoNftId: nft,
            bridgerOnAlgorand: algoWalletAddress,
          }),
          headers: { "Content-Type": "application/json" },
        });
        let data : any; 
        res.json().then((x) => {
          alert(x.success);
          data = x;
          if (data.contractId) {
            status.current = "lockCtcDeployed";
            algorandBridgeId.current = `${data.contractId}`;
            alert(
              `You now need to lock your Algorand NFT in the bridge contract: ${data.contractId}`
            );
          } else {
            setButtonStep("failed");
            alert(`There was a problem deploying the bridge contract`);
          }
        })
        
      } catch (err) {
        status.current = "error"
        alert(`error: ${err}`);
        setButtonStep("failed");
      }
    }
    //
    const lockNFT = async () => {
      let bal = 1000000 * (await getAlgoNftBalance(nft)); 
      if(bal > 0 ) {
        let count = 0;
        while(count == 0){
          count++;
          runAPI("lockNFT")
          .then(() => {
          status.current = "nftLocked" 
          return true
          }).catch((err) => status.current = "error");
        }
      }
      else {
        alert(`balance of NFT is ${bal}`);
        alert("You do not have this nft in your wallet: " + nft);
        setButtonStep("failed");
        return false
      }
    }
    //
    const finalBridgeStep = async () => {
      try {
        const res = await fetch("api/finalAlgoBridgeStep", {
          method: "POST",
          body: JSON.stringify({
            algoNftId: nft,
            algoBridgeId: algorandBridgeId.current,
            bridgerOnAlgorand: pubKey,
            bridgerOnEth: ethWalletAddress,
            nftUri: nftUrl,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (data.success) {
          status.current = "bridged";
          ethNftId.current = `${data.ethNftId}`;
          alert(
            `${data.success} and ${data.nftContractId}`
          );
          setButtonStep("confirmed");
        } else if(data.failure) {
          setButtonStep("failed");
          alert(`${data.failure}`);
        } else if(data.error) {
          setButtonStep("failed");
          alert(`${data.error}`);
        }
      } catch (err) {
        status.current = "error"
        alert(`error: ${err}`);
        setButtonStep("failed");
      }
    }
    //run the steps now
    if(status.current == "init" && algorandBridgeId.current === "") {
      deployAlgoLock().then(() => {
        setTimeout(() => {
          if(status.current == "lockCtcDeployed") {
            alert(`about to lock NFT now`)
            let count = 0;
            while(count == 0){
              count++;
              lockNFT().then((x) =>{ 
                setTimeout(() => {
                  if (status.current == "nftLocked" ) {
                    finalBridgeStep()
                  }
                },37000)
              })
            }
          }
        },2000)
        });
    } else if (status.current == "error") {
      setButtonStep("failed");
      alert(`Error message returned from backend`);
      }
  }

  const shortenAddress = (address: string) => {
    return address.slice(0, 6) + "..." + address.slice(-4);
  };

// this is the function that executes and call the callAPI
const runAPI = (apiName:any) => {
  let input: any = [];
  let res = callAPI(backendCtc, algorandBridgeId.current, apiName, input);
  return res;
};
  return (
    <>
      <Formik
        initialValues={{
          fromChain: "",
          nftToBeBridgedAddress: "",
          toChain: "",
          toWalletAddress: "",
          selectedNftId: "",
        }}
        validate={(values) => {
          const errors: any = {}; /** @TODO : Shape */

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          bridgeNFT(values.nftToBeBridgedAddress);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="">
            {nftImageUri && (
              <ImageSection>
                <div className="flex justify-center">
                  <img src={nftImageUri} alt="NFT-image" />
                </div>
              </ImageSection>
            )}
            <AlgoSwapF
              isFrom={true}
              algoWalletAddress={algoWalletAddress}
              nftToBeBridgedAddress= {values.nftToBeBridgedAddress}
              setAlgoWalletAddress={setAlgoWalletAddress}
              setPubKey={setPubKey}
              setNftUrl={setNftUrl}
                setMetaData={setMetaData}
                setNftImageURI={setNftImageURI}
            />
            <EthSwapF
              isFrom={false}
              ethWalletAddress={ethWalletAddress}
              setEthWalletAddress={setEthWalletAddress}
            />
            <FormButton
              type="submit"
              disabled={isSubmitting}
              className="bg-cDarkBlue hover:bg-cYellow text-white hover:text-cDarkBlue font-bold uppercase mt-8 rounded-full p-4 w-full"
            >
              <LoadingButtonText
                state={buttonStep}
                idleText={`Bridge ${
                  values.nftToBeBridgedAddress
                    ? (values.nftToBeBridgedAddress)
                    : ""
                } ${
                  values.toWalletAddress
                    ? `to ${(values.toWalletAddress)}`
                    : ""
                }`}
                submittingText={`Bridging ${values.nftToBeBridgedAddress}`}
                confirmedText="Bridged!"
                failedText="Oops. Something went wrong"
              />
            </FormButton>
          </Form>
        )}
      </Formik>
      {/* <button onClick = {deployAlgoToken}>Test BackEnd</button> */}
    </>
  );
};

export default SwapFormR;