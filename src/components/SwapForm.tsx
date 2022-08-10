import AlgoLogo from "chain-icons/algorand-algo.svg";
import EthLogo from "../../public/chain-icons/ethereum-eth-logo.svg";
import FormButton from "./buttons/FormButton";
import FormSection from "../containers/FormSection";
import Input, { defaultFieldDiv } from "./form-components/Inputs";
import LoadingButtonText, {
  LoadingButtonStateType,
} from "./buttons/LoadingButtonText";
import NonInput from "./form-components/NonInput";
import React, { FC, useState } from "react";
import Select from "./form-components/Select";
import { ErrorMessage, Form, Formik } from "formik";

const selectFieldClass =
  "text-lg font-semibold text-slate-100 dark:text-slate-300 border-2 bg-sky-800 border-sky-800 dark:bg-white dark:bg-opacity-10 my-1 p-3 pl-5 w-64 rounded-full shadow-xl focus:border-blue-900 focus:outline-none";
const inputFieldClass =
  "text-lg font-semibold text-slate-800 dark:text-slate-300 border-2 bg-sky-50 border-sky-800 dark:bg-white dark:bg-opacity-10 my-1 p-3 pl-5 rounded-full shadow-inner focus:border-blue-900 focus:outline-none ";
const nonInputFieldClass =
  "text-lg font-semibold text-slate-800 dark:text-slate-300 border-2 bg-sky-100 border-sky-800 dark:bg-white dark:bg-opacity-10 my-1 p-3 pl-5 rounded-full shadow-inner focus:border-blue-900 focus:outline-none ";

const SwapForm: FC = () => {
  const [buttonStep, setButtonStep] = useState<LoadingButtonStateType>("idle");

  const shortenAddress = (address: string) => {
    return address.slice(0, 6) + "..." + address.slice(-4);
  };
  return (
    <>
      <Formik
        initialValues={{
          fromChain: "",
          fromAssetAddress: "",
          toChain: "",
          toWalletAddress: "",
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

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="">
            <FormSection>
              <div className="flex items-center md:grid md:grid-cols-5 md:gap-4">
                <div className="text-xl font-semibold text-slate-600 dark:text-slate-400">
                  From:
                </div>
                <div className="flex flex-col col-span-4">
                  <Select
                    required
                    className={defaultFieldDiv}
                    fieldClass={selectFieldClass}
                    name="fromChain"
                  >
                    <option value="">Select a chain</option>

                    <option value="Ethereum">
                      {/* <Image src={EthLogo} /> */}
                      Ethereum
                    </option>
                    <option value="Algorand">
                      {/* <Image src={AlgoLogo} /> */}
                      Algorand
                    </option>
                  </Select>
                  <Input
                    className={defaultFieldDiv}
                    fieldClass={inputFieldClass}
                    required
                    name="fromAssetAddress"
                    placeholder={`Your NFT's ${values.fromChain} address`}
                  />
                </div>
              </div>
            </FormSection>
            <FormSection>
              <div className="flex items-center md:grid md:grid-cols-5 md:gap-4">
                <div className="text-xl font-semibold text-slate-600 dark:text-slate-400">
                  To:
                </div>
                <div className="flex flex-col col-span-4">
                  <Select
                    required
                    className={defaultFieldDiv}
                    fieldClass={selectFieldClass}
                    name="toChain"
                  >
                    <option value="">Select a chain</option>
                    <option value="Ethereum">
                      {/* <img src="chain-icons/ethereum-eth-logo.svg" /> */}
                      Ethereum
                    </option>
                    <option value="Algorand">
                      {/* <img src="chain-icons/algorand-algo.svg" /> */}
                      Algorand
                    </option>
                  </Select>
                  <NonInput
                    className={defaultFieldDiv}
                    fieldClass={nonInputFieldClass}
                  >
                    {`Your receiving wallet address`}
                  </NonInput>
                </div>
              </div>
            </FormSection>
            <FormButton
              type="submit"
              disabled={isSubmitting}
              className="bg-cDarkBlue hover:bg-cYellow text-white hover:text-cDarkBlue font-bold uppercase mt-8 rounded-full p-4 w-full"
            >
              <LoadingButtonText
                state={buttonStep}
                idleText={`Send ${
                  values.fromAssetAddress
                    ? shortenAddress(values.fromAssetAddress)
                    : ""
                } ${
                  values.toWalletAddress
                    ? `to ${shortenAddress(values.toWalletAddress)}`
                    : ""
                }`}
                submittingText={`Sending ${values.fromAssetAddress}`}
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
