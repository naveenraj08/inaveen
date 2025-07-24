import Link from "next/link";
import React from "react";

export const Services = () => {
  return (
    <section className="py-20 pt-0 px-20 bg-white section">
      <div className="block">
        <h2 className="text-black text-lg font-medium relative title inline-flex items-center gap-x-2 uppercase">
          Services
        </h2>
      </div>

      <ul className="grid grid-cols-3 gap-5 pt-10">
        <li className="bg-neutral-100 p-10 border-gray-200 rounded-xl">
          <h3 className="text-black text-2xl flex gap-x-5 font-medium pb-6 mb-6 border-b-2 border-neutral-300">
            <span>01</span>
            <span>Custom Website Development</span>
          </h3>
          <p className="text-gray-600 mb-10">
            I craft fast, modern, and mobile-first websites using React,
            Next.js, or Vue.js tailored to your business or personal brand.
          </p>
          <Link
            href={"/"}
            className="mt-8 inline-block px-4 py-1.5 text-sm bg-white rounded-full text-black border border-gray-100 font-medium"
          >
            Read more
          </Link>
        </li>
        <li className="bg-neutral-100 p-10 border-gray-200 rounded-xl">
          <h3 className="text-black text-2xl flex gap-x-5 font-medium pb-6 mb-6 border-b-2 border-neutral-300">
            <span>01</span>
            <span>Custom Website Development</span>
          </h3>
          <p className="text-gray-600 mb-10">
            I craft fast, modern, and mobile-first websites using React,
            Next.js, or Vue.js tailored to your business or personal brand.
          </p>
          <Link
            href={"/"}
            className="mt-8 inline-block px-4 py-1.5 text-sm bg-white rounded-full text-black border border-gray-100 font-medium"
          >
            Read more
          </Link>
        </li>
        <li className="bg-neutral-100 p-10 border-gray-200 rounded-xl">
          <h3 className="text-black text-2xl flex gap-x-5 font-medium pb-6 mb-6 border-b-2 border-neutral-300">
            <span>01</span>
            <span>Custom Website Development</span>
          </h3>
          <p className="text-gray-600 mb-10">
            I craft fast, modern, and mobile-first websites using React,
            Next.js, or Vue.js tailored to your business or personal brand.
          </p>
          <Link
            href={"/"}
            className="mt-8 inline-block px-4 py-1.5 text-sm bg-white rounded-full text-black border border-gray-100 font-medium"
          >
            Read more
          </Link>
        </li>
        <li className="bg-neutral-100 p-10 border-gray-200 rounded-xl">
          <h3 className="text-black text-2xl flex gap-x-5 font-medium pb-6 mb-6 border-b-2 border-neutral-300">
            <span>01</span>
            <span>Custom Website Development</span>
          </h3>
          <p className="text-gray-600 mb-10">
            I craft fast, modern, and mobile-first websites using React,
            Next.js, or Vue.js tailored to your business or personal brand.
          </p>
          <Link
            href={"/"}
            className="mt-8 inline-block px-4 py-1.5 text-sm bg-white rounded-full text-black border border-gray-100 font-medium"
          >
            Read more
          </Link>
        </li>
        <li className="bg-neutral-100 p-10 border-gray-200 rounded-xl">
          <h3 className="text-black text-2xl flex gap-x-5 font-medium pb-6 mb-6 border-b-2 border-neutral-300">
            <span>01</span>
            <span>Custom Website Development</span>
          </h3>
          <p className="text-gray-600 mb-10">
            I craft fast, modern, and mobile-first websites using React,
            Next.js, or Vue.js tailored to your business or personal brand.
          </p>
          <Link
            href={"/"}
            className="mt-8 inline-block px-4 py-1.5 text-sm bg-white rounded-full text-black border border-gray-100 font-medium"
          >
            Read more
          </Link>
        </li>
        <li className="bg-neutral-100 p-10 border-gray-200 rounded-xl">
          <h3 className="text-black text-2xl flex gap-x-5 font-medium pb-6 mb-6 border-b-2 border-neutral-300">
            <span>01</span>
            <span>Custom Website Development</span>
          </h3>
          <p className="text-gray-600 mb-10">
            I craft fast, modern, and mobile-first websites using React,
            Next.js, or Vue.js tailored to your business or personal brand.
          </p>
          <Link
            href={"/"}
            className="mt-8 inline-block px-4 py-1.5 text-sm bg-white rounded-full text-black border border-gray-100 font-medium"
          >
            Read more
          </Link>
        </li>
      </ul>
    </section>
  );
};
