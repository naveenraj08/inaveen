import { About } from "./components/About";
import { HeroBanner } from "./components/HeroBanner";
import { Navbar } from "./components/Navbar";
import { Project } from "./components/Project";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <>
      <div className="page-wrapper bg-black">
        <Navbar />
        <main className="block">
          <HeroBanner />
          <About />
          <Services />
          <Project />
        </main>
      </div>
    </>
  );
}
