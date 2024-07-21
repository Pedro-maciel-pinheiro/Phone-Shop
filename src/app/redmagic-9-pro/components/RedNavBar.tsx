"use client";

import { fadeIn, slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RedMagicNavBar = () => {
  const [navScroll, setNavScroll] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
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

  const handleSetActiveSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className={`fixed flex w-full h-10 text-white z-50 
      backdrop-blur-3xl transition-all duration-1000 ${
        mobileNavOpen ? "h-96" : "h-10"
      }`}
    >
      <div className="flex-col lg:flex-row w-full flex  mx-2 gap-8 z-30">
        <Link
          className={`font-bold text-2xl transition-all duration-700 ${
            navScroll ? "textGlowEffect" : "text-rose-700"
          }`}
          href={"/redmagic-9-pro"}
        >
          REDMAGIC 9 Pro
        </Link>

        <div
          className={`hidden lg:flex transition-all duration-1000 font-semibold
             text-white/80 text-[15px] ${navScroll ? "gap-4" : "gap-2"}`}
        >
          <Link href={"/"} className="hover:text-white transition-all mt-2">
            Home
          </Link>
          <button
            className={`hover:text-white transition-all ${
              activeSection === "Design" ? "text-rose-600" : ""
            }`}
            onClick={() => handleSetActiveSection("Design")}
          >
            Design
          </button>
          <button
            className={`hover:text-white transition-all ${
              activeSection === "Highlights" ? "text-rose-600" : ""
            }`}
            onClick={() => handleSetActiveSection("Highlights")}
          >
            Highlights
          </button>
          <button
            className={`hover:text-white transition-all ${
              activeSection === "Performance" ? "text-rose-600" : ""
            }`}
            onClick={() => handleSetActiveSection("Performance")}
          >
            Performance
          </button>
          <button
            className={`hover:text-white transition-all ${
              activeSection === "Cooling" ? "text-rose-600" : ""
            }`}
            onClick={() => handleSetActiveSection("Cooling")}
          >
            Cooling
          </button>
          <button
            className={`hover:text-white transition-all ${
              activeSection === "Battery" ? "text-rose-600" : ""
            }`}
            onClick={() => handleSetActiveSection("Battery")}
          >
            Battery
          </button>
          <button
            className={`hover:text-white transition-all ${
              activeSection === "Experience" ? "text-rose-600" : ""
            }`}
            onClick={() => handleSetActiveSection("Experience")}
          >
            Experience
          </button>
          <button
            className={`hover:text-white transition-all ${
              activeSection === "Sound" ? "text-rose-600 " : " "
            }`}
            onClick={() => handleSetActiveSection("Sound")}
          >
            Sound
          </button>
        </div>

        <motion.div
          onClick={() => setMobileNavOpen(false)}
          initial={{ opacity: 0 }}
          animate={mobileNavOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`flex flex-col items-start lg:hidden
               justify-start transition-all font-semibold
              text-white/80 text-[15px] gap-2 mx-2
            `}
        >
          <Link href={"/"} className="hover:text-white transition-all mt-2">
            Home
          </Link>
          <button
            className={`hover:text-white transition-all ${
              activeSection === "Design" ? "text-rose-600" : ""
            }`}
            onClick={() => handleSetActiveSection("Design")}
          >
            Design
          </button>
          <button
            className={`hover:text-white transition-all ${
              activeSection === "Highlights" ? "text-rose-600" : ""
            }`}
            onClick={() => handleSetActiveSection("Highlights")}
          >
            Highlights
          </button>
          <button
            className={`hover:text-white transition-all ${
              activeSection === "Performance" ? "text-rose-600" : ""
            }`}
            onClick={() => handleSetActiveSection("Performance")}
          >
            Performance
          </button>
          <button
            className={`hover:text-white transition-all ${
              activeSection === "Cooling" ? "text-rose-600" : ""
            }`}
            onClick={() => handleSetActiveSection("Cooling")}
          >
            Cooling
          </button>
          <button
            className={`hover:text-white transition-all ${
              activeSection === "Battery" ? "text-rose-600" : ""
            }`}
            onClick={() => handleSetActiveSection("Battery")}
          >
            Battery
          </button>
          <button
            className={`hover:text-white transition-all ${
              activeSection === "Experience" ? "text-rose-600" : ""
            }`}
            onClick={() => handleSetActiveSection("Experience")}
          >
            Experience
          </button>
          <button
            className={`hover:text-white transition-all ${
              activeSection === "Sound" ? "text-rose-600 " : " "
            }`}
            onClick={() => handleSetActiveSection("Sound")}
          >
            Sound
          </button>
        </motion.div>
      </div>
      <div className="w-full flex justify-end items-center gap-4 absolute ">
        <div onClick={() => setMobileNavOpen((prev) => !prev)} className="z-50 ">
          <ChevronDown
            size={30}
            style={{
              transform: mobileNavOpen ? "scaleY(-1)" : "scaleY(1)",
            }}
            className="text-white 
                transition-all duration-700 block lg:hidden animate-pulse"
          />
        </div>
        <Link
          href={{
            pathname: "/checkout",
            query: {
              id: "0002",
              price: "750",
              category: "Phone",
              image: "/img/09_black_2.webp",
              image_2: "/img/09_black.webp",
              phoneColor: "Black",
              brand: "RedMagic",
            },
          }}
          className="transition-all duration-500 mt-2 z-40
           bg-rose-700 w-20 md:h-6 mx-2 rounded-sm flex items-center justify-center hover:ring-4
         hover:ring-rose-900 hover:ring-offset-2 hover:ring-offset-slate-50"
        >
          <button className="flex gap-2">
            <p>Buy</p>
            <p className="hidden md:block">Now</p>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default RedMagicNavBar;
