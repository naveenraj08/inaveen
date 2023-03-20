import Head from "next/head";
import { About } from "@/components/about";

export default function Home() {
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
