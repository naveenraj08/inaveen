import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";

import { NavLink } from "./navlink";
import { HumburgerMenu } from "./mobile-menu";
import { Logo } from "./logo";

export const Header = () => {
  const [Breakpoint, setBreakpoint] = useState(0);
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setBreakpoint(window.innerWidth);
      if (window.innerWidth < 991) {
        setshowMobileMenu(true);
      } else {
        setshowMobileMenu(false);
      }
    });

    if (window.innerWidth < 991) {
      setshowMobileMenu(true);
    } else {
      setshowMobileMenu(false);
    }

    Router.events.on("routeChangeComplete", (url) => {
      setshowMobileMenu(false);
    });
  }, [Breakpoint]);

  return (
    <div className="relative z-10">
      <div className="mx-auto container px-6">
        <div className="flex items-center justify-between py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-lg text-slate-500">
              <Logo />
            </Link>
          </div>
          <div className="space-x-5 flex justify-between items-center">
            {showMobileMenu === true ? (
              <HumburgerMenu />
            ) : (
              <>
                <NavLink title="About" link="/about" id="about-page-01" />
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
