import React, { useRef, useState } from "react";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import FormSection from "../containers/FormSection";
import Input, {
  defaultFieldDiv,
  inputFieldClass,
} from "./form-components/Inputs";
import Select from "./form-components/Select";
import cn from "classnames";
import { connectAlgoWallet, shortenAddress } from "../utils/helpersChain";

type AlgoSwapFormProps = {
  isFrom: boolean;
  algoWalletAddress: string;
  setAlgoWalletAddress: (uri: string) => void;
};

const AlgoSwapForm: React.FC<AlgoSwapFormProps> = ({
  isFrom,
  algoWalletAddress,
  setAlgoWalletAddress,
}) => {
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
            connectAlgoWallet(setAlgoWalletAddress);
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

      {/* <div className="flex items-center ">
        <Input
          className={defaultFieldDiv}
          fieldClass={inputFieldClass}
          required
          name="nftToBeBridgedAddress"
          placeholder={`Your Algorand address`}
        />
      </div> */}
    </FormSection>
  );
};

export default AlgoSwapForm;
