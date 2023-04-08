import Link from "next/link";
import React from "react";

export const PageBanner = ({ pageTitle, currentPage }) => {
  return (
    <section className="page__banner-container mb-10">
      <div className="container px-6 min-h-[340px] flex justify-center items-center">
        <div>
          <h1 className="uppercase text-3xl mb-5 text-gray-200 font-semibold md:text-4xl">
            {pageTitle}
          </h1>
          <div>
            <ul className="list list-none flex justify-center items-center gap-2">
              <li className="text-gray-300 text-base">
                <Link href="/">Home</Link>
              </li>
              <li className="text-gray-300 text-base">/</li>
              <li className="text-gray-300 text-base">{currentPage}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
