import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavigationBar from "../src/components/NavigationBar";
import SwapForm from "../src/components/SwapForm";
import FormCard from "../src/containers/FormCard";

const Application: NextPage = () => {
  return (
    <div
      data-test="component-landing"
      className="bg-gradient-to-r from-white via-sky-50 to-blue-50 dark:from-slate-800 dark:via-sky-900 dark:to-blue-900 flex flex-col w-screen h-screen"
    >
      <Head>
        <title>{`Eth <> Algo NFT Bridge`}</title>
        <meta name="description" content="Bridge your Ethereum and Algo NFTs" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <div className="my-auto items-center h-full mt-24 md:mt-36">
        <FormCard center>
          <SwapForm />
        </FormCard>
      </div>

      <footer className={""}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={""}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Application;
