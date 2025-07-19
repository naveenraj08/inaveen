import DarkVeil from "@/Backgrounds/DarkVeil/DarkVeil";
import { RippleButton } from "@/components/animate-ui/buttons/ripple";
import { LinkPreview } from "@/components/ui/link-preview";

export const HeroBanner = () => {
  return (
    <section className="min-h-screen w-full flex justify-center items-end pb-20">
      <div className="hero-content relative z-10 container mx-auto px-20">
        <h1 className="text-[120px] text-gray-50 font-bold leading-[1.5] mb-10">
          Naveen Raj
        </h1>

        <div className="flex justify-between items-end gap-5">
          <ul className="text-white w-full grid grid-cols-3 gap-5">
            <li className="text-left text-white text-4xl font-bold border-b border-white/10">
              4<span className="text-3xl">+</span>
              <span className="block text-sm font-medium pt-2 pb-5 text-gray-400">
                Years of experience
              </span>
            </li>
            <li className="text-left text-white text-4xl font-bold border-b border-white/10">
              20<span className="text-3xl">+</span>
              <span className="block text-sm font-medium pt-2 pb-5 text-gray-400">
                Successful Project
              </span>
            </li>
          </ul>
          <div className="text-white max-w-lg">
            <div className="text-base">
              Hi, I'm Naveen Raj® — a{" "}
              <LinkPreview
                url="https://www.credly.com/badges/fda9d120-a86d-45e1-ab7d-a5ca54b69b0d/"
                imageSrc="/asset/certified.png"
                isStatic
                className="font-bold bg-clip-text text-white"
              >
                Certified Expert Frontend Developer
              </LinkPreview>{" "}
              with a passion for building sleek, high-performance interfaces.
              Also exploring fullstack technologies with strong enthusiasm
            </div>

            <RippleButton
              rippleClassName="bg-black/80"
              className={
                "inline-flex h-12 text-sm font-medium items-center gap-x-8 mt-10 px-3 pl-5 py-4 bg-white text-black rounded-full hover:bg-white"
              }
            >
              Let's Talk
              <span className="p-2 rounded-full bg-[#00FF66]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </RippleButton>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full inset-0 z-0 opacity-50">
        <DarkVeil hueShift={110} speed={3} />
      </div>
    </section>
  );
};
