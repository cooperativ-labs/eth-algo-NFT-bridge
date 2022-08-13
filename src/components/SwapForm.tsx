import FormButton from "./buttons/FormButton";
import LoadingButtonText, {
  LoadingButtonStateType,
} from "./buttons/LoadingButtonText";
import React, { FC, useState } from "react";
import { Form, Formik } from "formik";
import Web3 from "web3";
import { nftContract } from "../../ethContracts/erc721";
declare let window: any;
import EthSwapForm from "./EthSwapForm";
import AlgoSwapForm from "./AlgoSwapForm";
import ImageSection from "../containers/ImageSection";
import { callAPI, getNftUri, optInToNFT } from "../utils/helpersChain";

const SwapForm: FC = () => {
  const [buttonStep, setButtonStep] = useState<LoadingButtonStateType>("idle");
  const [ethWalletAddress, setEthWalletAddress] = useState<string>("");
  const [algoWalletAddress, setAlgoWalletAddress] = useState<string>("");
  const [nftUrl, setNftUrl] = useState<string>("");
  const [nftImageUri, setNftImageURI] = useState<string>("");
  const [metaData, setMetaData] = useState<any>("");
  const [nftClaimId, setNftClaimId] = useState<string>("");
  const [algorandBridgeId, setAlgorandBridgeId] = useState<string>("");

  console.log({ nftUrl, nftImageUri, metaData, nftClaimId, algorandBridgeId });

  //triggered by submit of form
  const bridgeNFT = async (
    selectedNftId: string,
    nftToBeBridgedAddress: string
  ) => {
    if (!ethWalletAddress) {
      alert("Please connect your wallet...");
    }
    if (algoWalletAddress.length <= 0) {
      alert(`Please enter a valid Algorand address`);
      return;
    }

    const deployAlgoToken = async () => {
      if (algoWalletAddress == "") {
        alert("Please enter your Algorand address");
        return;
      }
      try {
        console.log("deploying algo token");
        const res = await fetch("../../pages/api/bridgeToAlgo", {
          // @Sunday - Problem here
          method: "POST",
          body: JSON.stringify({
            ethRecAddr: ethWalletAddress,
            ethNftCtcId: nftToBeBridgedAddress,
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
        const data = await res.json();
        if (data.contractId) {
          setAlgorandBridgeId(data.contractId);
          setNftClaimId(data.NFTid);
          console.log(await optInToNFT(data.NFTid));
          alert(
            `This Algorand Bridge contract now holds your NFT waiting to be claimed (write it down): ${data.contractId}`
          );

          alert(
            `This is the ID of your "NFT" waiting for you to claim after opting in:  ${data.NFTid}. You will be able to claim your NFT on Algorand on the next prompt`
          );
          console.log(algorandBridgeId);

          const apiReturn = await callAPI(algorandBridgeId, "claimNFT"); // @Sunday - NOT SURE ABOUT THIS
          console.log(apiReturn);
          return apiReturn;
        } else {
          setButtonStep("failed");
          alert(`Server authentication failed. Please try again`);
        }
      } catch (err) {
        alert(`error: ${err}`);
      }
    };

    if (!!ethWalletAddress)
      try {
        if (isNaN(parseInt(selectedNftId))) {
          alert(
            `Please enter a valid NFT ID. You entered this invalid value: "${selectedNftId}"`
          );
          return;
        }
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
              await getNftUri(
                selectedNftId,
                nftToBeBridgedAddress,
                ethWalletAddress,
                setNftImageURI,
                setNftUrl,
                setMetaData
              );
              const deployAlgo = await deployAlgoToken();
              console.log("deployAlgo", deployAlgo);
              console.log(confirmationNumber, receipt);
              setButtonStep("confirmed");
            }
          );
      } catch (err: any) {
        setButtonStep("failed");

        alert(err.message);
      }
  };

  const shortenAddress = (address: string) => {
    return address.slice(0, 6) + "..." + address.slice(-4);
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
          bridgeNFT(values.selectedNftId, values.nftToBeBridgedAddress);
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
            <EthSwapForm
              isFrom={true}
              nftToBeBridgedAddress={values.nftToBeBridgedAddress}
              selectedNftId={values.selectedNftId}
              setNftImageURI={setNftImageURI}
              ethWalletAddress={ethWalletAddress}
              setEthWalletAddress={setEthWalletAddress}
              setNftUrl={setNftUrl}
              setMetaData={setMetaData}
            />
            <AlgoSwapForm
              isFrom={false}
              algoWalletAddress={algoWalletAddress}
              setAlgoWalletAddress={setAlgoWalletAddress}
            />

            <FormButton
              type="submit"
              disabled={isSubmitting}
              className="bg-cDarkBlue hover:bg-cYellow text-white hover:text-cDarkBlue font-bold uppercase mt-8 rounded-full p-4 w-full"
            >
              <LoadingButtonText
                state={buttonStep}
                idleText={`Send ${
                  values.nftToBeBridgedAddress
                    ? shortenAddress(values.nftToBeBridgedAddress)
                    : ""
                } ${
                  values.toWalletAddress
                    ? `to ${shortenAddress(values.toWalletAddress)}`
                    : ""
                }`}
                submittingText={`Sending ${values.nftToBeBridgedAddress}`}
                confirmedText="Created!"
                failedText="Oops. Something went wrong"
              />
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SwapForm;
