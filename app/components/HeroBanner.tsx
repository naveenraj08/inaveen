import DarkVeil from "@/Backgrounds/DarkVeil/DarkVeil";
import { HeroStats } from "./HeroStats";
import { HeroDescription } from "./HeroDescription";

type HeroBannerProps = {
  data: {
    title: string;
    description: any;
    heroStatsCollection: {
      items: Array<{
        label: string;
        value: string;
      }>;
    };
    action: string;
  };
};

export const HeroBanner = ({ data }: HeroBannerProps) => {
  const {
    title,
    description,
    heroStatsCollection: { items },
    action,
  } = data;

  return (
    <section className="hero-banner relative w-full flex justify-center items-end pb-10 lg:pb-20">
      <div className="hero-content relative z-10 container mx-auto px-5 lg:px-10 xl:px-20">
        <h1 className="text-5xl sm:text-6xl lg:text-[80px] xl:text-[120px] text-gray-50 font-bold leading-[1.5] mb-10">
          {title}
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-end gap-5">
          <ul className="text-white w-full max-w-full grid grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item, idx) => (
              <HeroStats key={idx} label={item.label} value={item.value} />
            ))}
          </ul>
          <HeroDescription description={description} action={action} />
        </div>
      </div>
      <div className="absolute w-full h-full inset-0 z-0 opacity-50">
        <DarkVeil hueShift={110} speed={3} />
      </div>
    </section>
  );
};
