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
import { callAPI, getNftUri, optInToNFT } from "../utils/helpersChain";
import * as backendCtc from '../../reachBackend/test.main'


const SwapFormR: FC = () => {
  const [buttonStep, setButtonStep] = useState<LoadingButtonStateType>("idle");
  const [ethWalletAddress, setEthWalletAddress] = useState<string>("");
  const [algoWalletAddress, setAlgoWalletAddress] = useState<string>("");
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
          console.log('I am running here')
          alert(x.success);
          console.log(x.success) 
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
        })
        
      } catch (err) {
        status.current = "error"
        alert(`error: ${err}`);
      }
    }
    //
    const lockNFT = async () => {
      let res = await runAPI("lockNFT");
      if(res) status.current = "nftLocked"
    }
    //
    const finalBridgeStep = async () => {
      try {
        const res = await fetch("api/finalBridgeStep", {
          method: "POST",
          body: JSON.stringify({
            algoNftId: nft
          }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (data.ethNftId) {
          status.current = "bridged";
          ethNftId.current = `${data.contractId}`;
          alert(
            `Here is your ERC-721 NFT ID: ${data.contractId}`
          );
          setButtonStep("confirmed");
        } else {
          setButtonStep("failed");
          alert(`Authentication failed. Please try again.`);
        }
      } catch (err) {
        status.current = "error"
        alert(`error: ${err}`);
      }
    }
    //run the steps now
    if(status.current == "init" && algorandBridgeId.current === "") {
      deployAlgoLock().then(() => {
        if(status.current == "lockCtcDeployed") lockNFT().then(() =>{ 
          if (status.current == "nftLocked") finalBridgeStep()})});
    } else if(status.current == "lockCtcDeployed") {
      lockNFT().then(() => {
        if (status.current == "nftLocked") finalBridgeStep()
      })
    } else if (status.current == "nftLocked") {
      finalBridgeStep();
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
