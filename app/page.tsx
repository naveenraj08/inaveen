import graphQLClient from "@/lib/client";
import { About } from "./components/About";
import { HeroBanner } from "./components/HeroBanner";
import { Navbar } from "./components/Navbar";
import { Project } from "./components/Project";
import { Services } from "./components/Services";
import { getBannerContent } from "./queries/getBannerContent";
import { getAboutContent } from "./queries/getAboutContent";
import { getServiceContent } from "./queries/getServiceContent";
import { getProjectsContent } from "./queries/getProjectContent";


export const revalidate = 60;

type BannerContentResponse = {
  heroBanner?: any;
  aboutMe?: any;
  services?: any;
  projects?: any;
};

export default async function Home() {
  const data: BannerContentResponse = await graphQLClient.request(
    getBannerContent
  );

  const aboutData: BannerContentResponse = await graphQLClient.request(
    getAboutContent
  );

  const serviceData: BannerContentResponse = await graphQLClient.request(
    getServiceContent
  );

  const projectData: BannerContentResponse = await graphQLClient.request(
    getProjectsContent
  );


  const banner = data?.heroBanner;
  const aboutContent = aboutData?.aboutMe;
  const serviceContent = serviceData?.services;
  const projectContent = projectData?.projects;

  return (
    <>
      <div className="page-wrapper bg-black">
        <Navbar />
        <main className="block">
          <HeroBanner data={banner} />
          <About data={aboutContent} />
          <Services data={serviceContent} />
          <Project data={projectContent} />
        </main>
      </div>
    </>
  );
}
