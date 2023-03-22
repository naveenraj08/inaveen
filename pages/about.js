import { About } from "@/components/about";
import Head from "next/head";

export default function () {
  return (
    <>
      <Head>
        <title>inaveen - about</title>
        <meta name="description" content="Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <About />
    </>
  );
}
