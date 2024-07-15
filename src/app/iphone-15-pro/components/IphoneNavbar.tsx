"use client";
import { ChevronDown, Divide } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const IphoneNavbar = () => {
  const [navScroll, setNavScroll] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const changeWhileScroll = () => {
      if (window.scrollY >= 80) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeWhileScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeWhileScroll);
      }
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed  w-full  transition-all duration-1000
       z-50  backdrop-blur-xl border-white/50  ${
         navScroll ? "h-12 border-b " : "h-[58px] "
       } ${mobileNavOpen ? "h-56 " : "h-12"}`}
      >
        <div className="flex mt-2">
          <div className="w-full flex items-center justify-start mx-2 gap-8  ">
            <Link
              className={`text-yellow-100  font-bold 
           transition-all duration-700 ${
             navScroll
               ? "textColor text-2xl lg:text-3xl"
               : " text-lg lg:text-2xl"
           }`}
              href="#iphone-15-pro"
            >
              iPhone 15 Pro
            </Link>
            <div
              className={`hidden md:flex text-white/80 text-sm md:text-lg transition-all duration-1000 ${
                navScroll ? "gap-4" : "gap-2"
              }`}
            >
              <Link className="hover:text-white transition-all" href={"/"}>
                Home
              </Link>
              <Link
                className="hover:text-white transition-all"
                href={"#Highlights"}
              >
                Highlights
              </Link>
              <Link
                className="hover:text-white transition-all"
                href={"#Design"}
              >
                Design
              </Link>
              <Link
                className="hover:text-white transition-all"
                href={"#Performance"}
              >
                Performance
              </Link>
              <Link
                className="hover:text-white transition-all"
                href={"#Action"}
              >
                Action
              </Link>
            </div>
          </div>

          <div className=" flex items-center justify-end md:items-end gap-6 z-50 ">
            <div onClick={() => setMobileNavOpen((prev) => !prev)}>
              <ChevronDown
                size={30}
                style={{
                  transform: mobileNavOpen ? "scaleY(1)" : "scaleY(-1)",
                }}
                className="text-white 
                 transition-all duration-700 block md:hidden"
              />
            </div>
            <Link
              href={{
                pathname: "/checkout",
                query: {
                  price: "999",
                  category: "Phone",
                  image: "/img/Iphone-show.png",
                  brand: "Apple",
                },
              }}
            >
              <button
                className={` text-white transition-all duration-500 bg-blue-500 
          w-16 md:w-36 h-6 mx-2 rounded-sm flex text-end hover:ring-4 
           hover:ring-blue-700 hover:ring-offset-2 hover:ring-offset-slate-50 ${
             navScroll ? "mb-2" : " mt-0"
           }`}
              >
                <div className="flex gap-2 items-center justify-center w-full h-full font-bold">
                  <p>Buy</p>
                  <p className="hidden md:block">Now</p>
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div
          onClick={() => setMobileNavOpen(false)}
          className={`transition-all duration-700 overflow-hidden${
            mobileNavOpen
              ? "translate-y-0 flex flex-col gap-2 px-2 items-start justify-start w-full h-96  z-50 text-white opacity-100 mt-2"
              : " flex flex-col gap-2 px-2 mt-2 opacity-0 -translate-x-40"
          }`}
        >
          <Link className="hover:text-white transition-all" href={"/"}>
            Home
          </Link>
          <Link
            className="hover:text-white transition-all"
            href={"#Highlights"}
          >
            Highlights
          </Link>
          <Link className="hover:text-white transition-all" href={"#Design"}>
            Design
          </Link>
          <Link
            className="hover:text-white transition-all"
            href={"#Performance"}
          >
            Performance
          </Link>
          <Link className="hover:text-white transition-all" href={"#Action"}>
            Action
          </Link>
        </div>
      </nav>

      <nav className="block md:hidden ">
        <div
          className={`w-full  fixed transition-all duration-1000 z-30  mt-64
             ${
               mobileNavOpen
                 ? "opacity-100 h-screen -translate-y-52 backdrop-blur-3xl"
                 : "opacity-0 backdrop-blur-3xl h-0 -translate-y-0"
             } `}
        ></div>
      </nav>
    </>
  );
};

export default IphoneNavbar;
