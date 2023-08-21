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
                              xmlns="http://www.w3.org/2000/svg"
                              width="150"
                              height="40"
                              viewBox="0 0 160.623 32.084"
                            >
                              <g
                                id="Group_2"
                                transform="translate(-22.102 -81.75)"
                              >
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
                                  />
                                  <path
                                    d="M 26.41000175476074 82.75 C 28.41000175476074 82.75 30.25000190734863 84.13081359863281 30.25000190734863 85.64314270019531 C 30.25000190734863 87.15547180175781 25.7700023651123 90.75 25.7700023651123 90.75 C 25.7700023651123 90.75 22.25000190734863 87.15547180175781 22.25000190734863 85.64314270019531 C 22.25000190734863 84.13081359863281 24.41000175476074 82.75 26.41000175476074 82.75 Z"
                                    id="beautiful-copy"
                                    stroke="none"
                                    fill="#263f69"
                                  />
                                </g>
                                <path
                                  d="M24.95,94.633s-2.067,16.917,4.067,16.583,12.7-16.256,14.2-16.067c2.783.35.38,16.359,1.4,14.933,1.667-2.333,5.727-9.565,7.669-11.733,2.431-2.717,4.052-1.518,4.667.388.539,1.67-1.052,6.683.6,9.55s3.076,2.243,5.4.863c3.9-2.317,7.246-10.556,9.533-12.067,4.45-2.939,8.267.533,7.8.6-9.8-5.267-12.133,5.4-11.733,9.2s4.313,3.5,5.713,2.267a7.892,7.892,0,0,0,2.588-3.4c1-2,.413-4.113,1.013-4.113s.353,4.472,1.3,6.65,3.825,3.65,7.375,0,4.65-9.55,4.65-9.55.647-4.5.863-2.75-.012,10.45,2.037,13.45,4.5,0,6.563-3.687a23.03,23.03,0,0,0,1.633-5.45c.45-2.9-.367-6.442.733-5.667.538.379.867,4.2,2.521,7.017a4.863,4.863,0,0,0,6.9,1.4c3.75-3.1,1.338,3.512,3.413,3.3s8.937-6.9,4.437-10-6.762,4-6.25,7.7,4.975,10.7,13.013,4.2c1.382-1.118,2.943-4.131,3.512-4.625.994-.851.978,3.306,3.688,2.213,0,0,3.541-2.078,4.475-4.45s.438-3.616-.738-5.037c-.654-.792-5.025-1.775-6.675,4.775s5.875,13.363,11.85,8.15,7.262-14.55,9.95-14.4-1.137,12.512.8,15,2.2-3.575,5.8-8.488c1.249-1.7,4.65-7.112,6.8-3.712,1.053,1.666.219,5.273.25,8.162.011,1.1.625,6.066,4.65,4.487s7.15-9.57,8.05-9.2"
                                  id="beautiful-copy"
                                  fill="none"
                                  stroke="#263f69"
                                  strokeLinecap="round"
                                  strokeLinejoin="bevel"
                                  strokeWidth="4"
                                />
                              </g>
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
