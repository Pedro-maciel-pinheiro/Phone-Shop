"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { orbitron } from "@/types/types";
import { Button } from "./ui/button";
import MaskButton from "./MaskButton";

const SpecialProducts = () => {
  // const [hoverState, setHoverState] = useState({

  //   iphone: false,
  //   redMagic: false,
  // });

  // const handleMouseEnter = (product: string) => {
  //   setHoverState((prev) => ({ ...prev, [product]: true }));
  // };
  // const handleMouseLeave = (product: string) => {
  //   setHoverState((prev) => ({ ...prev, [product]: false }));
  // };

  return (
    <motion.div
      className=" flex flex-col gap-8 max-w-7xl 
     h-[400px] sm:h-[500px] md:h-[500px] w-full  mx-auto mb-16 overflow-hidden shadow-2xl"
    >
      <motion.div className="w-full h-full flex relative  rounded-sm ">
        <Link href={"/redmagic-9-pro"} className="flex w-full h-full 
        rounded-sm overflow-hidden object-cover">
          <Image
            src={"/img/red/redmagic_bg.webp"}
            alt="redmagic background"
            width={1400}
            height={1400}
            className="object-cover rounded-xl 
             hidden md:block hover:scale-105 transition-all duration-300"
          />
        </Link>
        <Image
          src={"/img/red/redmagic_bg_mobile.webp"}
          alt="redmagic background"
          width={1400}
          height={1400}
          className="object-contain block md:hidden scale-150"
        />
        <div
          className={`${orbitron.className} flex flex-col items-center md:items-start
          
         w-96 h-full bg-[#00000015] absolute max-w-7xl  rounded-xl `}
        >
          <div
            className="w-full md:w-auto flex flex-col items-center
            md:items-start md:mt-8 md:mx-4 md:p-4 p-2"
          >
            <h1 className="textGlowEffect font-semibold text-3xl mb-1">
              RED MAGIC 9 PRO{" "}
            </h1>
            <div
              className={`w-full md:w-80 flex flex-col items-center md:items-baseline
               text-white/90 text-lg  font-semibold`}
            >
              <h1 className="mb-3">The calm that never gives up</h1>
              <div className="flex flex-col gap-2  text-[10px] md:text-sm">
                <p className="hidden md:block">
                  Experience the next level of mobile gaming
                </p>
                <p className="text-sm">
                  from <strong className="textGlowEffect">750 USD</strong>
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex  items-center md:justify-around md:mx-8
           gap-5 mt-4 md:mt-10 md:w-72  "
          >
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
            >
              <Button
                className="w-28 h-6  md:h-9 rounded-sm border border-white/80
               active:translate-y-1 transition-all bg-rose-700 hover:bg-green-500 duration-700"
              >
                Buy Now
              </Button>
            </Link>

            <MaskButton
              title={"Learn More"}
              btnColor={
                "after:bg-rose-600 bg-transparent w-28 h-6 md:h-9 rounded-sm border"
              }
              linkBasePath={"/redmagic-9-pro"}
            />
            {/* <Link href={""}>
              <Button className="w-28 h-8 rounded-sm border-2 border-white/80
               active:translate-y-1 transition-all bg-transparent hover:bg-rose-600">
                Learn More
              </Button>
            </Link> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SpecialProducts;
