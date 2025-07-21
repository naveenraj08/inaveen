"use client";
import { PinContainer } from "@/components/ui/3d-pin";
import React from "react";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
        className="bg-gray-100"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-semibold text-lg text-gray-800">
            Lorem ipsum dolor sit?
          </h3>
          <div className="text-sm !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              nisi vel corporis quis tempora repellendus reiciendis ducimus
              labore culpa,
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
