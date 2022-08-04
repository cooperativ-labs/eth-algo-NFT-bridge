import { Form, Formik } from "formik";
import React, { FC, useState } from "react";
import FormButton from "./buttons/FormButton";
import LoadingButtonText, {
  LoadingButtonStateType,
} from "./buttons/LoadingButtonText";
import Input, { defaultFieldDiv } from "./form-components/Inputs";
import Select from "./form-components/Select";

const SwapForm: FC = () => {
  const [buttonStep, setButtonStep] = useState<LoadingButtonStateType>("idle");
  return (
    <>
      <Formik
        initialValues={{
          fromChain: "",
          fromAddress: "",
          fromAsset: "",
          toChain: "",
          toAddress: "",
          name: "",
        }}
        validate={(values) => {
          const errors: any = {}; /** @TODO : Shape */
          if (!values.name) {
            errors.name = "Please set an name";
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values);

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="">
            <Input
              className={defaultFieldDiv}
              required
              labelText="Your NFT's address"
              name="fromAsset"
              // placeholder="e.g. Cosy Apartments"
            />
            <Select
              required
              className={defaultFieldDiv}
              labelText="From"
              name="fromChain"
            >
              <option value="">Select a chain</option>
            </Select>
            <Select
              required
              className={defaultFieldDiv}
              labelText="To"
              name="toChain"
            >
              <option value="">Select a chain</option>
            </Select>

            <FormButton
              type="submit"
              disabled={isSubmitting}
              className="bg-cDarkBlue hover:bg-cYellow text-white hover:text-cDarkBlue font-bold uppercase mt-8 rounded-full p-4 w-full"
            >
              <LoadingButtonText
                state={buttonStep}
                idleText={`Send to ${values.toChain}`}
                submittingText={`Sending ${values.toChain}`}
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
