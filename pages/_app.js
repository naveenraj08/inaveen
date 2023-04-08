import { Layout } from "@/components/layout";
import { PageLoader } from "@/components/pageLoader";
import "@/styles/globals.css";
import Router from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [Loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <Layout>{Loading ? <PageLoader /> : <Component {...pageProps} />}</Layout>
  );
}
