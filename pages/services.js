import { PageBanner } from "@/components/page-banner";
import { Service } from "@/components/services";
import Head from "next/head";

export default function () {
  return (
    <>
      <Head>
        <title>inaveen - services</title>
        <meta name="description" content="Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageBanner pageTitle="What I Can Do" currentPage="Services" />
      <Service />
    </>
  );
}
