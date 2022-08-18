import React, { useRef, useEffect, Dispatch, SetStateAction } from "react";
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
  nftToBeBridgedAddress: string;
  setNftUrl: Dispatch<SetStateAction<string>>;
    setMetaData: Dispatch<SetStateAction<undefined>>;
    setNftImageURI: (uri: string) => void;
  setAlgoWalletAddress: (uri: string) => void;
  setPubKey: (uri: string) => void;
};

const AlgoSwapF: React.FC<AlgoSwapFormProps> = ({
  isFrom,
  algoWalletAddress,
  nftToBeBridgedAddress,
  setAlgoWalletAddress,
  setNftUrl,
  setPubKey,
}) => {
  useEffect(() => {
    const connect = async () => {
      const reach = loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
      reach.setWalletFallback(
        reach.walletFallback({
          providerEnv: "TestNet",
          MyAlgoConnect,
        })
      );
      const acc = await reach.getDefaultAccount();
      let metadata = await acc.tokenMetadata(nftToBeBridgedAddress);
      let obj = (JSON.stringify(metadata));
      setNftUrl(metadata.url);
      alert(metadata.url);
      //
    };
    if (nftToBeBridgedAddress) connect()
  }, [nftToBeBridgedAddress])
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
            connectAlgoWallet(setAlgoWalletAddress, setPubKey);
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