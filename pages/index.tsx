import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SwapForm from "../src/components/SwapForm";

const Application: NextPage = () => {
  return (
    <div
      data-test="component-landing"
      className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col w-screen h-screen p-20"
    >
      <Head>
        <title>
          Eth <> Algo NFT Bridge</>
        </title>
        <meta name="description" content="Bridge your Ethereum and Algo NFTs" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SwapForm />

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
