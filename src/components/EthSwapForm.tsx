import React, { useEffect, useRef, useState } from "react";
import Web3 from "web3";
import FormSection from "../containers/FormSection";
import Input, {
  defaultFieldDiv,
  inputFieldClass,
} from "./form-components/Inputs";
import Select from "./form-components/Select";
declare let window: any;
import cn from "classnames";
import {
  checkNftBalance,
  connectEthWallet,
  getNftUri,
  shortenAddress,
} from "../utils/helpersChain";

type EthSwapFormProps = {
  isFrom: boolean;
  ethWalletAddress: string;
  nftToBeBridgedAddress: string;
  selectedNftId: number | string;
  setNftImageURI: (uri: string) => void;
  setEthWalletAddress: (uri: string) => void;
};

const EthSwapForm: React.FC<EthSwapFormProps> = ({
  isFrom,
  ethWalletAddress,
  nftToBeBridgedAddress,
  selectedNftId,
  setNftImageURI,
  setEthWalletAddress,
}) => {
  const [nftBalance, setNftBalance] = useState<string>("");

  useEffect(() => {
    const web3 = new Web3(window.ethereum);
    window.ethereum.on("accountsChanged", async () => {
      const accounts = await web3.eth.getAccounts();
      setEthWalletAddress(accounts[0]);
    });
  });

  const createSelectionList = () => {
    const list = [];
    for (let i = 0; i < parseInt(nftBalance); i++) {
      list.push(i);
    }
    return list;
  };

  useEffect(() => {
    if (!!nftToBeBridgedAddress) {
      checkNftBalance(nftToBeBridgedAddress, ethWalletAddress, setNftBalance);
      if (selectedNftId) {
        getNftUri(
          selectedNftId as number,
          nftToBeBridgedAddress,
          ethWalletAddress,
          setNftImageURI
        );
      }
    }
  }, [nftToBeBridgedAddress, selectedNftId]);

  return (
    <FormSection>
      <div className="flex items-center mb-5 ">
        <span className="flex items-center  text-xl font-semibold text-slate-600 dark:text-slate-400">
          {isFrom ? "From:" : "To:"}
        </span>
        <button
          className={cn(
            [
              !ethWalletAddress
                ? " text-white bg-emerald-700 dark:bg-opacity-10 dark:border-2 dark:border-slate-200 "
                : "text-emerald-700  dark:bg-opacity-10 border-2 border-emerald-700 dark:border-slate-200 ",
            ],

            "flex pl-2  ml-3 font-medium text-sm items-center  p-1 rounded-full"
          )}
          onClick={(e) => {
            e.preventDefault();
            connectEthWallet(ethWalletAddress, setEthWalletAddress);
          }}
        >
          {!ethWalletAddress ? (
            "Connect Ethereum Wallet"
          ) : (
            <div>{shortenAddress(ethWalletAddress)}</div>
          )}
          <div className="flex justify-center bg-white rounded-full p-1 h-6 w-6 ml-2">
            <img src="chain-icons/ethereum-eth-logo.svg" className="h-4" />
          </div>
        </button>
      </div>
      {!!ethWalletAddress && (
        <div className="flex items-center ">
          <Input
            className={defaultFieldDiv}
            fieldClass={inputFieldClass}
            required
            name="nftToBeBridgedAddress"
            placeholder={`Your NFT's Ethereum address`}
          />
        </div>
      )}
      {!!ethWalletAddress && nftToBeBridgedAddress && (
        <Select name="selectedNftId" className={""}>
          <option value="">Select a NFT</option>
          {createSelectionList().map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </Select>
      )}
    </FormSection>
  );
};

export default EthSwapForm;
