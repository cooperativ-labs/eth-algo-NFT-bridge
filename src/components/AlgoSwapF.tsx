import cn from "classnames";
import FormSection from "../containers/FormSection";
import Input, {
  defaultFieldDiv,
  inputFieldClass,
} from "./form-components/Inputs";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Select from "./form-components/Select";
import {
  connectAlgoWallet,
  getAlgoNftUri,
  shortenAddress,
} from "../utils/helpersChain";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";

type AlgoSwapFormProps = {
  isFrom: boolean;
  algoWalletAddress: string;
  nftToBeBridgedAddress: string;
  setMetaData: Dispatch<SetStateAction<undefined>>;
  setNftUrl: Dispatch<SetStateAction<string>>;
  setNftImageUrl: Dispatch<SetStateAction<string>>;
  setAlgoWalletAddress: Dispatch<SetStateAction<string>>;
};

const AlgoSwapF: React.FC<AlgoSwapFormProps> = ({
  isFrom,
  algoWalletAddress,
  nftToBeBridgedAddress,
  setAlgoWalletAddress,
  setNftUrl,
  setNftImageUrl,
}) => {
  useEffect(() => {
    if (nftToBeBridgedAddress && isFrom) {
      getAlgoNftUri({ nftToBeBridgedAddress, setNftUrl, setNftImageUrl });
    }
  }, [nftToBeBridgedAddress, isFrom, setNftUrl, setNftImageUrl]);
  return (
    <FormSection>
      <div className="flex items-center mb-5 ">
        <span className="flex items-center  text-xl font-semibold text-slate-600 dark:text-slate-400">
          {isFrom ? "From:" : "To:"}
        </span>
        <button
          className={cn(
            [
              !algoWalletAddress
                ? " text-white bg-blue-700 dark:bg-opacity-10 dark:border-2 dark:border-slate-200 "
                : "text-blue-700  dark:bg-opacity-10 border-2 border-blue-700 dark:border-slate-200 ",
            ],

            "flex pl-2  ml-3 font-medium text-sm items-center  p-1 rounded-full"
          )}
          onClick={(e) => {
            e.preventDefault();
            connectAlgoWallet(algoWalletAddress, setAlgoWalletAddress);
          }}
        >
          {!algoWalletAddress ? (
            "Connect Algorand Wallet"
          ) : (
            <div>{shortenAddress(algoWalletAddress)}</div>
          )}
          <div className="flex justify-center bg-white rounded-full p-1 h-6 w-6 ml-2">
            <img src="chain-icons/algorand-algo.svg" className="h-4" />
          </div>
        </button>
      </div>
      {!!algoWalletAddress && (
        <div className="flex items-center ">
          <Input
            className={defaultFieldDiv}
            fieldClass={inputFieldClass}
            required
            name="nftToBeBridgedAddress"
            placeholder={`Your Algorand NFT address`}
          />
        </div>
      )}
    </FormSection>
  );
};

export default AlgoSwapF;
