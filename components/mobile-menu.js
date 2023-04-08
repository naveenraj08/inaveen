import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { NavLink } from "./navlink";

export const HumburgerMenu = () => {
  const [ShowMenu, setShowMenu] = useState(false);

  return (
    <div>
      <button
        type="button"
        role="button"
        onClick={() => setShowMenu(!ShowMenu)}
      >
        <span>
          <svg
            width="25"
            height="25"
            x="0"
            y="0"
            viewBox="0 0 512 512"
            className=""
          >
            <g>
              <path
                d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H153.6c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H256c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </span>
      </button>

      <Transition.Root show={ShowMenu} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setShowMenu}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-14">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative bg-white w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="relative flex justify-between bg-white p-8 pb-0 items-center">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          <span>
                            <svg
                              width="130"
                              height="50"
                              viewBox="0 0 663.4 163.2"
                            >
                              <defs>
                                <radialGradient
                                  id="radial-gradient"
                                  cx="0.516"
                                  cy="0.625"
                                  r="1.666"
                                  gradientTransform="matrix(0.154, -0.988, 0.296, 0.046, 0.252, 1.106)"
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop offset="0" stopColor="#744fe4" />
                                  <stop offset="1" stopColor="#263f69" />
                                </radialGradient>
                              </defs>
                              <path
                                id="Path_1"
                                data-name="Path 1"
                                d="M30,.6Q10,.6,10-36.8a128.032,128.032,0,0,1,5-37q7.8-25.6,17.6-25.6,5.8,0,9.2,7.8a25.62,25.62,0,0,1,2.6,11.8q0,8-4.8,28.2Q35-34,35-29.8T37.1-24a8.011,8.011,0,0,0,5,1.6q2.9,0,7.3-3.8t8.8-8.3q4.4-4.5,8.1-8.3t5.1-3.8q2.8,0,2.8,6.8,0,14-14.1,27.3T30,.6Zm8.2-116.2a30.168,30.168,0,0,1-5.4-17.2q0-9.2,2.9-15.3a38.822,38.822,0,0,1,5.5-9,7.863,7.863,0,0,1,6-2.9q5.6,0,10.2,8.3T62-137.8q0,10.4-7.3,16.3A25.556,25.556,0,0,1,38.2-115.6ZM90.8-99.8q7.2,0,13.6,13.8a30.986,30.986,0,0,1,23.3-9.8q13.9,0,20.9,6.1t7,17.2A91.014,91.014,0,0,1,152.7-50q-2.9,11.4-4.2,16.3a32.871,32.871,0,0,0-1.3,8.1q0,3.2,2.2,3.2,3,0,7.4-3.8t8.8-8.3q4.4-4.5,8.1-8.3t5.1-3.8q2.8,0,2.8,6.8,0,14-13.8,27Q144.6.8,138.2.8a1.158,1.158,0,0,1-.8-.2q-16,0-16-25.6a90.8,90.8,0,0,1,2.1-20.2q2.1-9.2,3.1-13.4a37,37,0,0,0,1-8.6q0-7.2-8.3-7.2T103.5-62.1A77.551,77.551,0,0,0,93.4-36.6v1.4a49.891,49.891,0,0,0,2.1,14q2.1,7.2,2.1,10,0,6.8-17,13.4a13.054,13.054,0,0,1-4.6,1q-5,0-6.9-5.2T67.2-18.2q0-28.4,2.2-41A88.842,88.842,0,0,1,83-94.2Q86.6-99.8,90.8-99.8ZM294.4-47.2q3.6,0,3.6,9.2,0,5-4.2,12.1a53.877,53.877,0,0,1-10.9,13A61.622,61.622,0,0,1,268-3.2,37.908,37.908,0,0,1,252,.6Q241.4.6,237.8-18A43.626,43.626,0,0,1,224.2-3.9q-8.4,5.5-22.5,5.5T179-7.2a28.781,28.781,0,0,1-8.4-21.4q0-34,22.6-53.6,9.6-8.2,17.9-10.8a58.2,58.2,0,0,1,17.5-2.6q9.2,0,15,3.2,2.8-5.8,6.4-5.8,7,0,13.3,6.1t6.3,11.5a141.488,141.488,0,0,1-8.2,15.8q-1.6,9.2-1.6,25.8T264-22.4q5.2,0,25.2-20.8Q292.8-47.2,294.4-47.2ZM200-35.2q0,15.4,11.4,15.4,12.2-.2,20.2-13a40.5,40.5,0,0,0,4.6-10.8q0-22.4,4-38.4A52.754,52.754,0,0,0,212-66.4Q200-54,200-35.2ZM319.6-88q0,13.4-4.8,30.4.4,6.4.4,12.4a58.9,58.9,0,0,0,.8,10.4q3,8,7.6,9.8,4,0,8.8-6.9a152.13,152.13,0,0,0,9.8-16.5,69.024,69.024,0,0,1-2.4-17.4q0-14.4,4.4-21,5.4-8.4,16.4-8.4t14.6,8.4a17.786,17.786,0,0,1,1.4,7.2A33.816,33.816,0,0,1,373-64.9a182.44,182.44,0,0,1-11.6,19.7q3.6,10.6,10.8,10.6a22.251,22.251,0,0,0,15.2-6.2q2.4-2.4,4.1-4.2a4.872,4.872,0,0,1,3.5-1.8q2.8,0,2.8,6.6,0,12.4-7.1,18.1t-17.9,5.7q-14.2,0-22.6-12.4Q326.8,1.6,311,1.6q-6.2,0-12.2-17.6t-9.2-47.6q-2.4-19,2.8-27.2,4.4-6.4,17.2-6.4,4.8,0,7.4,2.9A9.265,9.265,0,0,1,319.6-88ZM435.4-21.8q15.6,0,30.2-12.4a84.064,84.064,0,0,0,8.8-8.5q3.4-3.9,5.2-3.9,2.8,0,2.8,5.6a31.758,31.758,0,0,1-3,12.5,41.854,41.854,0,0,1-10,13.5Q452.2,1.2,422.2,1.2q-23.8,0-32.4-17.2-3-6-3-17.2a68.068,68.068,0,0,1,4.4-23.3,69.7,69.7,0,0,1,11.7-20.9,53.4,53.4,0,0,1,16.9-13.7A44.463,44.463,0,0,1,440.3-96q10.9,0,16.8,5.4a18.1,18.1,0,0,1,5.9,14q0,8.6-4.3,14.1a35.208,35.208,0,0,1-11.1,9.2,101.866,101.866,0,0,1-15.1,6.6q-8.3,2.9-16.3,6.5v5q.2,7.2,6,10.2A30.129,30.129,0,0,0,435.4-21.8ZM432-78.2q-10.4,0-14.4,24.2,4.2-2.8,7.9-5t6.5-4.2q6-4.4,6.2-10Q438.2-78.2,432-78.2Zm87,56.4q15.6,0,30.2-12.4a84.066,84.066,0,0,0,8.8-8.5q3.4-3.9,5.2-3.9,2.8,0,2.8,5.6a31.757,31.757,0,0,1-3,12.5A41.854,41.854,0,0,1,553-15Q535.8,1.2,505.8,1.2,482,1.2,473.4-16q-3-6-3-17.2a68.068,68.068,0,0,1,4.4-23.3,69.7,69.7,0,0,1,11.7-20.9,53.4,53.4,0,0,1,16.9-13.7A44.463,44.463,0,0,1,523.9-96q10.9,0,16.8,5.4a18.1,18.1,0,0,1,5.9,14q0,8.6-4.3,14.1a35.208,35.208,0,0,1-11.1,9.2,101.864,101.864,0,0,1-15.1,6.6q-8.3,2.9-16.3,6.5v5q.2,7.2,6,10.2A30.128,30.128,0,0,0,519-21.8Zm-3.4-56.4q-10.4,0-14.4,24.2,4.2-2.8,7.9-5t6.5-4.2q6-4.4,6.2-10Q521.8-78.2,515.6-78.2Zm67-21.6q7.2,0,13.6,13.8a30.986,30.986,0,0,1,23.3-9.8q13.9,0,20.9,6.1t7,17.2A91.012,91.012,0,0,1,644.5-50q-2.9,11.4-4.2,16.3a32.873,32.873,0,0,0-1.3,8.1q0,3.2,2.2,3.2,3,0,7.4-3.8t8.8-8.3q4.4-4.5,8.1-8.3t5.1-3.8q2.8,0,2.8,6.8,0,14-13.8,27Q636.4.8,630,.8a1.158,1.158,0,0,1-.8-.2q-16,0-16-25.6a90.805,90.805,0,0,1,2.1-20.2q2.1-9.2,3.1-13.4a37,37,0,0,0,1-8.6q0-7.2-8.3-7.2T595.3-62.1a77.551,77.551,0,0,0-10.1,25.5v1.4a49.892,49.892,0,0,0,2.1,14q2.1,7.2,2.1,10,0,6.8-17,13.4a13.054,13.054,0,0,1-4.6,1q-5,0-6.9-5.2T559-18.2q0-28.4,2.2-41a88.842,88.842,0,0,1,13.6-35Q578.4-99.8,582.6-99.8Z"
                                transform="translate(-10 160)"
                                fill="url(#radial-gradient)"
                              />
                            </svg>
                          </span>
                        </Dialog.Title>
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setShowMenu(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <span>
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll">
                      <div className="relative flex space-y-5 flex-1 flex-col p-8">
                        <NavLink
                          title="About"
                          link="/about"
                          id="about-page-01"
                        />
                        <NavLink
                          title="Services"
                          link="/services"
                          id="services-page-01"
                        />
                        <NavLink
                          title="Contact Me"
                          link="/contact"
                          id="contact-page-01"
                        />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
