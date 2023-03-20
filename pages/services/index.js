import Head from "next/head";
import { Service } from "@/components/services";

export default function Home() {
  return (
    <>
      <Head>
        <title>inaveen - services</title>
        <meta name="description" content="Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Service />
    </>
  );
}
