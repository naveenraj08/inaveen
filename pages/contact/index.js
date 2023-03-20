import Head from "next/head";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>inaveen - contact</title>
        <meta name="description" content="Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact />
    </>
  );
}
