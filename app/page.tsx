import { About } from "./components/About";
import { HeroBanner } from "./components/HeroBanner";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="page-wrapper bg-black">
        <Navbar />
        <main className="block">
          <HeroBanner />
          <About />
        </main>
      </div>
    </>
  );
}
