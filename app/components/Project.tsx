import React from "react";
import { AnimatedPinDemo } from "./ProjectItem";

type ProjectContentProps = {
  data: ProjectContent[]
}

type ProjectContent = {
  title?: string,
  projectListCollection?: Project[]
}

type Project = {
  title?: string,
  link?: string,
  descriptions?: string,
  sample?: Media
}

type Media = {
  url?: string,
  width?: number
  height?: number
}

export const Project = ({ data }: ProjectContentProps) => {
  const {
    title, projectListCollection } = data;

  return (
    <section className="py-10 lg:py-20 bg-white section">
      <div className="container px-5 lg:px-10 xl:px-20 mx-auto">

        <div className="block">
          <h2 className="text-black text-xl font-medium relative title inline-flex items-center gap-x-2 uppercase">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 lg:mt-20">

          {
            projectListCollection.items.map((item: Project, index) => (
              <AnimatedPinDemo key={index} data={item} />
            ))
          }
        </div>
      </div>
    </section>
  );
};
