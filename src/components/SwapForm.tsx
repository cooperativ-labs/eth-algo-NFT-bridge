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
import { getNftUri, optinToNFT, runAPI } from "../utils/helpersChain";

const SwapForm: FC = () => {
  const [buttonStep, setButtonStep] = useState<LoadingButtonStateType>("idle");
  const [showBridgeButton, setShowBridgeButton] = useState<boolean>(false);
  const [ethWalletAddress, setEthWalletAddress] = useState<string>("");
  const [algoWalletAddress, setAlgoWalletAddress] = useState<string>("");
  const [nftImageUri, setNftImageURI] = useState<string>("");
  const [nftClaimId, setNftClaimId] = useState<string>("");
  const [algorandBridgeId, setAlgorandBridgeId] = useState<string>("");
  const [bridgeRunning, setBridgeRunning] = useState<boolean>(true);

  //triggerd by submit of form
  const bridgeNFT = async (
    selectedNftId: number,
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
        const res = await fetch("api/bridgeToAlgo", {
          method: "POST",
          body: JSON.stringify({
            ethRecAddr: ethWalletAddress,
            ethNftCtcId: nftToBeBridgedAddress,
            bridgerOnEth: ethWalletAddress,
            bridgerOnAlgo: algoWalletAddress,
            name: "",
            url: URL,
            //We probably need to transfer the metadata of the NFT to the Algorand contract
            metadataHash: "metaDataHash",
            tokenId: selectedNftId,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (data.contractId) {
          setShowBridgeButton(true);
          setAlgorandBridgeId(data.contractId);
          setNftClaimId(data.NFTid);
          optinToNFT(data.NFTid);
          alert(
            `This Algorand Bridge contract now holds your NFT waiting to be claimed (write it down): ${data.contractId}`
          );

          alert(
            `This is the ID of your "NFT" waiting for you to claim after opting in:  ${data.NFTid}. You will be able to claim your NFT on Algorand on the next prompt`
          );
          runAPI("claimNFT");
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
        if (isNaN(selectedNftId)) {
          alert(
            `Please enter a valid NFT ID. You entered this invalid value: "${selectedNftId}"`
          );
          return;
        }
        setShowBridgeButton(true);
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
            setBridgeRunning(false);
            alert(`There is an error: ${JSON.stringify(error)}`);
          })
          .on("confirmation", function (confirmationNumber: any, receipt: any) {
            let count = 0;
            while (count < 1 && bridgeRunning === true) {
              getNftUri(
                selectedNftId,
                nftToBeBridgedAddress,
                ethWalletAddress,
                setNftImageURI
              );
              deployAlgoToken();
              count++;
            }
            if (bridgeRunning == false) {
              console.log(confirmationNumber, receipt);
              setButtonStep("confirmed");
            }
          });
      } catch (err: any) {
        setButtonStep("failed");
        setBridgeRunning(false);
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
          selectedNftId: null,
        }}
        validate={(values) => {
          const errors: any = {}; /** @TODO : Shape */
          if (values.fromChain === values.toChain) {
            errors.fromChain = "From and To chains must be different";
            errors.toChain = "From and To chains must be different";
          }

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
