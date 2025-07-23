import graphQLClient from "@/lib/client";
import { About } from "./components/About";
import { HeroBanner } from "./components/HeroBanner";
import { Navbar } from "./components/Navbar";
import { Project } from "./components/Project";
import { Services } from "./components/Services";
import { getBannerContent } from "./queries/getBannerContent";


export const revalidate = 60;

type BannerContentResponse = {
  heroBanner?: any;
};

export default async function Home() {
  const data: BannerContentResponse = await graphQLClient.request(
    getBannerContent
  );
  const banner = data?.heroBanner;

  return (
    <>
      <div className="page-wrapper bg-black">
        <Navbar />
        <main className="block">
          <HeroBanner data={banner} />
          <About />
          <Services />
          <Project />
        </main>
      </div>
    </>
  );
}
