"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SpecialProducts = () => {
  const [hoverState, setHoverState] = useState({
    iphone: false,
    redMagic: false,
  });

  const handleMouseEnter = (product: string) => {
    setHoverState((prev) => ({ ...prev, [product]: true }));
  };
  const handleMouseLeave = (product: string) => {
    setHoverState((prev) => ({ ...prev, [product]: false }));
  };
  return (
    <motion.div
      className=" flex flex-col gap-8 max-w-7xl 
     h-full w-full  mx-auto mb-16"
    >
      <h1
        className="flex items-center justify-center 
      textGlow-white text-3xl"
      >
        Special Products
      </h1>
      <div
        className="flex flex-col md:flex-row w-full h-full
       items-center justify-between gap-2 mx-auto"
      >
        <div className="flex flex-col items-center justify-center border-2 rounded-xl p2 shadow-2xl">
          <div className="text-lg font-bold">iPhone 15 pro for $999</div>
          <div
            className="max-w-[400px]"
            onMouseEnter={() => handleMouseEnter("iphone")}
            onMouseLeave={() => handleMouseLeave("iphone")}
          >
            <Link href={"/iphone-15-pro"}>
              <Image
                src={"/img/Iphone-show.png"}
                alt={"iPhone 15 pro"}
                width={800}
                height={800}
                className={`object-contain w-[400px] h-[400px] transition-all duration-700
                     ${
                       hoverState.iphone
                         ? "-translate-x-16 rotate-6"
                         : "translate-x-0"
                     }`}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-2 rounded-xl p2 shadow-2xl ">
          <div className="text-lg font-bold">Red Magic 9 for $650</div>
          <div
            onMouseEnter={() => handleMouseEnter("redMagic")}
            onMouseLeave={() => handleMouseLeave("redMagic")}
            className="max-w-[400px]"
          >
            <Link href={"/redmagic-9-pro"}>
              <Image
                src={"/img/09_black_2.webp"}
                alt={"Red Magic 9"}
                width={800}
                height={800}
                className={`object-contain w-[400px] h-[400px] transition-all duration-700
                    ${
                      hoverState.redMagic
                        ? "translate-x-16 rotate-6"
                        : "translate-x-0"
                    }`}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpecialProducts;
