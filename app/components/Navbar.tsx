import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="p-3 px-5 w-full max-w-max mx-auto rounded-full flex items-center gap-10 justify-between fixed top-3 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
      <div className="logo inline-block p-1">
        <Link
          href="/"
          className="inline-flex text-white items-center justify-center relative z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="25"
            viewBox="0 0 160.623 32.084"
          >
            <g id="Group_2" transform="translate(-22.102 -81.75)">
              <g
                id="Path_1"
                transform="translate(0 -1)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="bevel"
              >
                <path
                  d="M26.41,82.75c-2,0-4.16,1.381-4.16,2.893s3.52,5.107,3.52,5.107,4.48-3.595,4.48-5.107S28.41,82.75,26.41,82.75Z"
                  stroke="none"
                ></path>
                <path
                  d="M 26.41000175476074 82.75 C 28.41000175476074 82.75 30.25000190734863 84.13081359863281 30.25000190734863 85.64314270019531 C 30.25000190734863 87.15547180175781 25.7700023651123 90.75 25.7700023651123 90.75 C 25.7700023651123 90.75 22.25000190734863 87.15547180175781 22.25000190734863 85.64314270019531 C 22.25000190734863 84.13081359863281 24.41000175476074 82.75 26.41000175476074 82.75 Z"
                  className="brand-path"
                  stroke="none"
                  fill="currentColor"
                ></path>
              </g>
              <path
                d="M24.95,94.633s-2.067,16.917,4.067,16.583,12.7-16.256,14.2-16.067c2.783.35.38,16.359,1.4,14.933,1.667-2.333,5.727-9.565,7.669-11.733,2.431-2.717,4.052-1.518,4.667.388.539,1.67-1.052,6.683.6,9.55s3.076,2.243,5.4.863c3.9-2.317,7.246-10.556,9.533-12.067,4.45-2.939,8.267.533,7.8.6-9.8-5.267-12.133,5.4-11.733,9.2s4.313,3.5,5.713,2.267a7.892,7.892,0,0,0,2.588-3.4c1-2,.413-4.113,1.013-4.113s.353,4.472,1.3,6.65,3.825,3.65,7.375,0,4.65-9.55,4.65-9.55.647-4.5.863-2.75-.012,10.45,2.037,13.45,4.5,0,6.563-3.687a23.03,23.03,0,0,0,1.633-5.45c.45-2.9-.367-6.442.733-5.667.538.379.867,4.2,2.521,7.017a4.863,4.863,0,0,0,6.9,1.4c3.75-3.1,1.338,3.512,3.413,3.3s8.937-6.9,4.437-10-6.762,4-6.25,7.7,4.975,10.7,13.013,4.2c1.382-1.118,2.943-4.131,3.512-4.625.994-.851.978,3.306,3.688,2.213,0,0,3.541-2.078,4.475-4.45s.438-3.616-.738-5.037c-.654-.792-5.025-1.775-6.675,4.775s5.875,13.363,11.85,8.15,7.262-14.55,9.95-14.4-1.137,12.512.8,15,2.2-3.575,5.8-8.488c1.249-1.7,4.65-7.112,6.8-3.712,1.053,1.666.219,5.273.25,8.162.011,1.1.625,6.066,4.65,4.487s7.15-9.57,8.05-9.2"
                className="brand-path"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="bevel"
                strokeWidth="4"
              ></path>
            </g>
          </svg>
        </Link>
      </div>
      <ul className="flex items-center gap-5">
        <li className="inline-block">
          <a href="/" className="text-white text-sm p-1">
            Home
          </a>
        </li>
        <li className="inline-block">
          <a href="/about" className="text-white text-sm p-1">
            About
          </a>
        </li>
        <li className="inline-block">
          <a href="/project" className="text-white text-sm p-1">
            Project
          </a>
        </li>
        <li className="inline-block">
          <a href="/service" className="text-white text-sm p-1">
            Service
          </a>
        </li>
        <li className="inline-block">
          <a href="/contact" className="text-white text-sm p-1">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
