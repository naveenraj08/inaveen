import React from "react";
import { AnimatedPinDemo } from "./ProjectItem";

export const Project = () => {
  return (
    <section className="py-20 px-20 bg-white section">
      <div className="block">
        <h2 className="text-black text-lg font-medium relative title inline-flex items-center gap-x-2 uppercase">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-5">
        <AnimatedPinDemo />
      </div>
    </section>
  );
};
