"use client";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import React from "react";

type ProjectItemProps = {
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

export function AnimatedPinDemo({ data }: ProjectItemProps) {

  const { title, descriptions, sample, link } = data;

  return (
    <div className="h-[24rem] w-full flex items-center justify-center ">
      <PinContainer
        title={link}
        href={link}
        className="bg-gray-100 h-full"
      >
        <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 w-full h-full ">
          <h3 className="max-w-xs !pb-2 !m-0 font-semibold text-lg text-gray-800">
            {title}
          </h3>
          <div className="text-sm flex-1 !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {descriptions}
            </span>
          </div>
          <div className="flex w-full mt-4">
            <Image className="aspect-16/9 rounded-lg object-cover" src={sample?.url} width="290" height="160" alt={title} />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
