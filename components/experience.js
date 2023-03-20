import Image from "next/image";
import React from "react";
import ExperiencePicture from "../public/assets/experience.png";
import Link from "next/link";
export const Experience = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-between items-center py-[80px] gap-[50px] container px-6 md:flex-row xl:gap-[100px]">
        <div className="left-block block w-full">
          <div className="w-full">
            <div className="text-left content text-sm text-slate-500">
              <h2 className="uppercase text-4xl mb-5 text-slate-900 font-semibold">
                2+ Years of Experience
              </h2>
              <p className="mb-5">
                "It takes a lot of time to get experience, and once you have it
                you ought to go on using it."
              </p>
              <p className="mb-8 pr-5">
                With my fine experience, I have developed many front-end
                components that met our Client's requirements in various sectors
                like E-commerce, Education, and Health care projects with the
                help of Web development languages.
              </p>

              {/* <div className='connect-with-me w-full flex justify-start items-center gap-5'>

                                <Link href="#" role="link" className='inline-block px-4 py-4 text-sm uppercase text-white font-semibold !rounded-md transition-all duration-300 facebook-clay'>
                                    <span>
                                        <svg width="20" height="20" x="0" y="0" viewBox="0 0 155.139 155.139" className=""><g><path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" fill="currentColor"></path></g></svg>
                                    </span>
                                </Link>


                                <Link href="#" role="link" className='inline-block px-4 py-4 text-sm uppercase text-white font-semibold !rounded-md transition-all duration-300 linkedin-clay'>
                                    <span>
                                        <svg width="20" height="20" x="0" y="0" viewBox="0 0 100 100" ><g><path d="M90 90V60.7c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3H38.3V90h16.6V63.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26H90zM11.3 36.6h16.6V90H11.3zM19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z" fill="currentColor"></path></g></svg>
                                    </span>
                                </Link>

                                <Link href="#" role="link" className='inline-block px-4 py-4 text-sm uppercase text-white font-semibold !rounded-md transition-all duration-300 instagram-clay'>
                                    <span>
                                        <svg width="20" height="20" x="0" y="0" viewBox="0 0 511 511.9"><g><path d="M510.95 150.5c-1.2-27.2-5.598-45.898-11.9-62.102-6.5-17.199-16.5-32.597-29.6-45.398-12.802-13-28.302-23.102-45.302-29.5-16.296-6.3-34.898-10.7-62.097-11.898C334.648.3 325.949 0 256.449 0s-78.199.3-105.5 1.5c-27.199 1.2-45.898 5.602-62.097 11.898-17.204 6.5-32.602 16.5-45.403 29.602-13 12.8-23.097 28.3-29.5 45.3-6.3 16.302-10.699 34.9-11.898 62.098C.75 177.801.449 186.5.449 256s.301 78.2 1.5 105.5c1.2 27.2 5.602 45.898 11.903 62.102 6.5 17.199 16.597 32.597 29.597 45.398 12.801 13 28.301 23.102 45.301 29.5 16.3 6.3 34.898 10.7 62.102 11.898 27.296 1.204 36 1.5 105.5 1.5s78.199-.296 105.5-1.5c27.199-1.199 45.898-5.597 62.097-11.898a130.934 130.934 0 0 0 74.903-74.898c6.296-16.301 10.699-34.903 11.898-62.102 1.2-27.3 1.5-36 1.5-105.5s-.102-78.2-1.3-105.5zm-46.098 209c-1.102 25-5.301 38.5-8.801 47.5-8.602 22.3-26.301 40-48.602 48.602-9 3.5-22.597 7.699-47.5 8.796-27 1.204-35.097 1.5-103.398 1.5s-76.5-.296-103.403-1.5c-25-1.097-38.5-5.296-47.5-8.796C94.551 451.5 84.45 445 76.25 436.5c-8.5-8.3-15-18.3-19.102-29.398-3.5-9-7.699-22.602-8.796-47.5-1.204-27-1.5-35.102-1.5-103.403s.296-76.5 1.5-103.398c1.097-25 5.296-38.5 8.796-47.5C61.25 94.199 67.75 84.1 76.352 75.898c8.296-8.5 18.296-15 29.398-19.097 9-3.5 22.602-7.7 47.5-8.801 27-1.2 35.102-1.5 103.398-1.5 68.403 0 76.5.3 103.403 1.5 25 1.102 38.5 5.3 47.5 8.8 11.097 4.098 21.199 10.598 29.398 19.098 8.5 8.301 15 18.301 19.102 29.403 3.5 9 7.699 22.597 8.8 47.5 1.2 27 1.5 35.097 1.5 103.398s-.3 76.301-1.5 103.301zm0 0" fill="currentColor"></path><path d="M256.45 124.5c-72.598 0-131.5 58.898-131.5 131.5s58.902 131.5 131.5 131.5c72.6 0 131.5-58.898 131.5-131.5s-58.9-131.5-131.5-131.5zm0 216.8c-47.098 0-85.302-38.198-85.302-85.3s38.204-85.3 85.301-85.3c47.102 0 85.301 38.198 85.301 85.3s-38.2 85.3-85.3 85.3zM423.852 119.3c0 16.954-13.747 30.7-30.704 30.7-16.953 0-30.699-13.746-30.699-30.7 0-16.956 13.746-30.698 30.7-30.698 16.956 0 30.703 13.742 30.703 30.699zm0 0" fill="currentColor"></path></g></svg>
                                    </span>
                                </Link>


                            </div> */}
            </div>
          </div>
        </div>
        <div className="right-block block relative w-full">
          <Image src={ExperiencePicture} alt="Experience of My Carrer" />
        </div>
      </div>
    </div>
  );
};
