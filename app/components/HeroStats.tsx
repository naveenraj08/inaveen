import React from "react";

type HeroStatsProps = {
  label: string;
  value: string;
};

export const HeroStats = ({ label, value }: HeroStatsProps) => {
  return (
    <li className="text-left text-white text-xl lg:text-4xl font-bold border-b border-white/10">
      {value}
      <span className="text-xl lg:text-3xl">+</span>
      <span className="block text-sm font-medium pt-2 pb-5 text-gray-400">
        {label}
      </span>
    </li>
  );
};
