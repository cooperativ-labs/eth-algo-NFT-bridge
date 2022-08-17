import FormButton from "./buttons/FormButton";
import LoadingButtonText, {
  LoadingButtonStateType,
} from "./buttons/LoadingButtonText";
import React, { FC, useEffect, useRef, useState } from "react";
import { Form, Formik } from "formik";
declare let window: any;
import AlgoSwapF from "./AlgoSwapF";
import EthSwapF from "./EthSwapF";
import ImageSection from "../containers/ImageSection";
import { bridgeAlgoToEth } from "../utils/helpersChain";

const SwapFormR: FC = () => {
  const [buttonStep, setButtonStep] = useState<LoadingButtonStateType>("idle");
  const [ethWalletAddress, setEthWalletAddress] = useState<string>("");
  const [algoWalletAddress, setAlgoWalletAddress] = useState<string>("");
  const [nftUrl, setNftUrl] = useState<string>("");
  const [nftImageUri, setNftImageUrl] = useState<string>("");
  const [metaData, setMetaData] = useState<any>("");
  const algorandBridgeId = useRef<string>("");
  const ethNftId = useRef<string>("");
  const status = useRef<string>("init");

  // this is the function that executes and call the callAPI

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
          const { selectedNftId, nftToBeBridgedAddress } = values;
          bridgeAlgoToEth({
            algorandBridgeId,
            ethNftId,
            algoWalletAddress,
            selectedNftId,
            status,
            setButtonStep,
          });
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
              nftToBeBridgedAddress={values.nftToBeBridgedAddress}
              setAlgoWalletAddress={setAlgoWalletAddress}
              setNftUrl={setNftUrl}
              setMetaData={setMetaData}
              setNftImageUrl={setNftImageUrl}
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
                    ? values.nftToBeBridgedAddress
                    : ""
                } ${
                  values.toWalletAddress ? `to ${values.toWalletAddress}` : ""
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
