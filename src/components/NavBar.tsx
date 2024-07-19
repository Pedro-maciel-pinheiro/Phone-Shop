"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LinksData } from "@/Data/LinksData";
import { motion } from "framer-motion";
import {
  letterVariant,
  slideInFromLeft,
  underlineVariant,
} from "@/utils/motion";
import { ChevronDown, ShoppingCart } from "lucide-react";
import MaskButton from "./MaskButton";

export default function NavBar() {
  const [navScroll, setNavScroll] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
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

  const isNavbarHidden =
    pathname === "/iphone-15-pro" || pathname === "/redmagic-9-pro";

  return (
    <>
      {!isNavbarHidden && (
        <nav
          className={`fixed  w-full  transition-all duration-1000
       z-50  backdrop-blur-xl border-white   ${
         navScroll
           ? "h-12 border-b-2 bg-[#0c0c0c83] backdrop-blur-3xl text-white/90 "
           : "h-[58px] text-black"
       } ${mobileNavOpen ? "h-64" : "h-12 "}`}
        >
          <div className="flex mt-2 relative ">
            <div className="w-full ">
              <div
                className={`w-full flex items-end  justify-start gap-4 font-semibold `}
              >
                <Link className={`text-2xl mx-2 ${navScroll?"textGlow-white":""}`} href={"/"}>
                  Perfect-Phone
                </Link>
                <div className={`hidden md:flex transition-all duration-200 ${navScroll?"gap-3":"gap-2"}`}>
                  {LinksData.map((data) => (
                    <Link href={data.linkPath}>{data.title}</Link>
                  ))}
                </div>
              </div>
            </div>

            <div className=" md:hidden flex items-center justify-end md:items-end gap-6 z-50  mb-4 ">
              <div onClick={() => setMobileNavOpen((prev) => !prev)}>
                <ChevronDown
                  size={30}
                  style={{
                    transform: mobileNavOpen ? "scaleY(-1)" : "scaleY(1)",
                  }}
                  className={`${navScroll ? "text-white" : "text-black "}
                  
                 transition-all duration-700 block md:hidden`}
                />
              </div>
            </div>
            <div className="mx-2 z-50 flex items-center justify-center mb-4 font-semibold ">
              <Link
                href={"/checkout"}
                className=" items-center font-semibold
                justify-center transition-all text-white
                 duration-500 bg-black w-20 mt-[7px]
                  md:h-6 mx-2  rounded-sm flex text-end hover:ring-4
         hover:ring-yellow-600 hover:ring-offset-2 hover:ring-offset-slate-50 "
              >
                <button >
                  <div>Checkout</div>
                </button>
              </Link>
            </div>
          </div>

          <div
            onClick={() => setMobileNavOpen(false)}
            className={`transition-all duration-700 overflow-hidden block md:hidden
            ${navScroll ? "text-white" : "text-black "}
            ${
              mobileNavOpen
                ? " translate-y-0 flex flex-col gap-2 px-2 items-start justify-start w-full h-96  z-50  opacity-100 mt-2"
                : " flex flex-col gap-2 px-2 mt-2 opacity-0 -translate-x-40"
            }`}
          >
            {LinksData.map((data, index) => (
              <Link
                key={index}
                href={data.linkPath}
                className=" font-semibold hover:translate-x-2 transition-all"
              >
                {data.title}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <nav className="block md:hidden ">
        <div
          className={`w-full  fixed transition-all duration-1000 z-30  mt-64
             ${
               mobileNavOpen
                 ? "opacity-100 h-screen -translate-y-52 backdrop-blur-3xl bg-black/20"
                 : "opacity-0 backdrop-blur-3xl h-0 -translate-y-0"
             } `}
        ></div>
      </nav>
    </>
  );
}
