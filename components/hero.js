import React from "react";
import Image from "next/image";
import HeroBackground from "../public/assets/hero-illustration.png";
import Link from "next/link";
export const Hero = () => {
  return (
    <>
      <div className="w-full add-custom-background">
        <div className="flex flex-col justify-center items-center h-screen container px-6 xl:gap-[100px] md:flex-row md:justify-between">
          <div className="left-block block w-full">
            <div className="banner_content">
              <h3 className="uppercase text-xl mb-2 text-slate-600 font-medium add-strike md:text-2xl">
                <span>Hello</span>
                <span className="strike"></span>
              </h3>
              <h1 className="uppercase text-5xl mb-5 mt-3 text-slate-900 font-black md:text-6xl">
                I'm Naveen Raj
              </h1>
              <h5 className="uppercase text-2xl text-slate-700 font-medium">
                Frontend Developer
              </h5>

              <div className="mt-8 inline-flex justify-between items-center gap-6">
                <Link
                  href="#"
                  role="link"
                  className="px-8 py-4 text-sm uppercase text-white font-semibold rounded-full transition-all duration-300 block clay"
                >
                  <span>Hire Me</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="right-block hidden relative w-full lg:block xl:-top-10 xl:-right-24">
            <Image
              src={HeroBackground}
              width="600"
              alt="Hero Background Picture"
            />
          </div>
        </div>
      </div>
    </>
  );
};
