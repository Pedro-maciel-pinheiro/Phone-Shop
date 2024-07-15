"use client";

import { fadeIn, smoothScale } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RedMagicNavBar = () => {
  const [navScroll, setNavScroll] = useState(false);

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
    <motion.div
      initial="hidden"
      animate={"visible"}
      variants={fadeIn(0.3)}
      className={`fixed flex w-full  h-10  text-white z-50 
         bg-black transition-all duration-700 ${navScroll ?"":""}`
       
      }
    >
      <div className=" w-full  flex items-end mx-2 gap-8  ">
        <Link
          className={`font-bold text-2xl transition-all duration-700 ${
            navScroll ? " textGlowEffect " : "text-rose-700 "
          }`}
          href={"/redmagic-9-pro"}
        >
          REDMAGIC 9 Pro
        </Link>

        <div className={`flex transition-all duration-1000  text-white/80 text-lg ${navScroll ?"gap-4":"gap-2"}`}>
          <Link className="hover:text-white transition-all" href={""}>
            Design
          </Link>
          <Link className="hover:text-white transition-all" href={""}>
            Highlights
          </Link>
          <Link className="hover:text-white transition-all" href={""}>
            Performance
          </Link>
          <Link className="hover:text-white transition-all" href={""}>
            Cooling
          </Link>
          <Link className="hover:text-white transition-all " href={""}>
            Battery
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-end items-end gap-4">
        <Link className="text-white/80 font-semibold" href={"/specifications"}>
          Specifications
        </Link>

        <button
          className="transition-all duration-500 bg-rose-700 w-36 h-6 mx-2  rounded-sm flex text-end hover:ring-4
         hover:ring-rose-900 hover:ring-offset-2 hover:ring-offset-slate-50"
        >
          <p className="flex items-center justify-center w-full h-full">
            Buy Now
          </p>
        </button>
      </div>
    </motion.div>
  );
};

export default RedMagicNavBar;
