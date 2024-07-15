"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Clerk from "@/components/clerk/clerk";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [navScroll, setNavScroll] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const changeNavBar = () => {
      if (window.scrollY >= 80) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeNavBar);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeNavBar);
      }
    };
  }, []);

  const isNavbarHidden = pathname === "/showcase" || pathname === "/redmagic9";

  return (
    <div
      className={
        navScroll
          ? "w-full fixed rounded-md z-50  hidden md:block transition-colors duration-500  backdrop-blur supports-backdrop-blur:bg-white"
          : "w-full fixed h-12  bg-transparent z-50 transition-all duration-700 hidden md:block "
      }
    >
      {!isNavbarHidden && (
        <div
          className={
            navScroll
              ? "flex  items-center justify-center relative mt-1  transition-all duration-500 text-black "
              : "flex  items-center justify-center relative  mt-2  transition-all duration-500 text-black"
          }
        >
          <div className=" w-full ">
            <div className="flex items-center justify-center gap-6">
              <Link
                href={"/"}
                className=" active:translate-y-1 transition-all "
              >
                Home
              </Link>
              <Link
                href={"/phone"}
                className=" active:translate-y-1 transition-all "
              >
                Phone
              </Link>
              <Link
                href={"/phonecase"}
                className=" active:translate-y-1 transition-all "
              >
                Phone Case
              </Link>
              <Link
                href={"/iphone-15-pro"}
                className=" active:translate-y-1 transition-all "
              >
                iPhone-15-pro
              </Link>
              <Link
                href={"/redmagic-9-pro"}
                className=" active:translate-y-1 transition-all "
              >
                RedMagic-9
              </Link>
              <Link
                href={"/contact"}
                className=" active:translate-y-1 transition-all "
              >
                Contact
              </Link>
              
              <div className={"absolute right-0 mr-2 mt-4"}>
              <Clerk />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
