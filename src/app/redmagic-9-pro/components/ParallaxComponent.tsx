"use client";
import React, { useEffect, useState } from "react";
import { invariant, motion } from "framer-motion";
import { useInViewHook } from "@/hooks/inView";
import { ChevronDown } from "lucide-react";

import Image from "next/image";
import { RedMagicData } from "@/Data/Carousel_redmagic";
import {
  fadeIn,
  slideInFromLeft,
  slideInFromRight,
  smoothTransition,
  underlineVariant,
} from "@/utils/motion";

const ParallaxComponent: React.FC = () => {
  const { ref, inView } = useInViewHook();
  const [navScroll, setNavScroll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(RedMagicData[0]);

  useEffect(() => {
    const changeWhileScroll = () => {
      if (window.scrollY >= 5) {
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
    <div className="relative min-h-screen w-full overflow-hidden">
        <div
        className="ZeroNine h-screen w-full
          absolute z-10 bg-fixed bg-contain"
      />
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
        className=" flex flex-col items-center 
        mt-16 justify-center text-white text-xl md:text-4xl"
      >
        <div
          className={
            navScroll
              ? "-translate-y-96 transition-all duration-1000 z-10"
              : "transition-all duration-1000 translate-y-0 z-10"
          }
        >
          <Image
            className="w-80 md:w-full"
            src="/img/red/logo.png"
            alt="red magic logo"
            width={500} height={500}
          />

          <div className="flex gap-1">
            <p>The Cold That Never Ends</p>
            <ChevronDown size={45} className="animate-bounce" />
          </div>
        </div>
      </motion.div>
      <div
        className=" relative w-full  mx-auto z-10
         h-screen  flex flex-col items-center justify-center"
      >
        <div className="flex flex-col lg:flex-row w-full max-w-7xl 
        items-center justify-evenly relative ">
          <motion.div
            className="hidden xl:flex flex-col gap-6 z-20 "
            initial="hidden"
            animate={navScroll ? "visible" : "hidden"}
          >
            <motion.h1
              variants={slideInFromLeft(0.2)}
              className="font-semibold text-2xl text-white "
            >
              Ultra Smooth and Elegant Finish
            </motion.h1>
            <motion.p
              variants={slideInFromLeft(0.4)}
              className="text-gray-500 w-80 text-lg"
            >
              REDMAGIC 9 Pro features a sleek, flat back design with durable
              glass, and no camera bump in sight, providing a super comfortable
              feel. Custom lights on the turbofan and shoulder triggers add a
              unique touch to its impressive profile.
            </motion.p>
          </motion.div>

          <motion.div
            key={selectedImage.label}
            initial="hidden"
            animate="visible"
            variants={smoothTransition}
            className="overflow-hidden flex items-center justify-center z-20 w-full h-[550px] 
             md:h-full"
          >
            <Image
             
              src={selectedImage.frontImg}
              alt={selectedImage.label}
              width={500}
              height={500}
              className={
                navScroll
                  ? "transition-all duration-1000 w-[258px]  scale-50 md:scale-75 z-30 -rotate-12 translate-x-20 md:translate-x-10 opacity-100 "
                  : "transition-all duration-1000 w-[258px]  scale-50 md:scale-75 z-30 -rotate-2 -translate-x-36 opacity-0 "
              }
            />
            <Image
              
              src={selectedImage.backImg}
              alt={selectedImage.label}
             
              width={500}
              height={500}
              className={
                navScroll
                  ? "transition-all duration-1000 w-[258px] scale-50 md:scale-75 z-20 -rotate-12 -translate-y-16 opacity-100  -translate-x-16"
                  : "transition-all duration-1000 w-[258px]  scale-50 md:scale-75 z-20 -rotate-2 -translate-y-2 opacity-0  translate-x-16"
              }
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={navScroll ? "visible" : "hidden"}
            variants={slideInFromRight(0.6)}
            className="flex flex-col-reverse md:flex-col items-center justify-center w-96 h-36 mb-16 z-20 gap-3"
          >
            <div className="flex gap-3 mt-3 md:mb-2">
              
              <div className="text-white font-semibold w-24 text-lg md:text-xl">
                {selectedImage.label}
              </div>
              {RedMagicData.map((image, index) => (
                <div key={index} className="w-16 md:w-8 flex items-center justify-center ">
                  <button  onClick={() => setSelectedImage(image)}>
                    <Image 
                      className={`rounded-sm transition-all duration-300 cursor-pointer ${
                        selectedImage.frontImg &&
                        selectedImage.backImg === image.backImg &&
                        image.frontImg
                          ? "ring-4 ring-rose-600 ring-offset-2 ring-offset-slate-50"
                          : "border-2"
                      }`}
                      src={image.color_icon}
                      alt={image.alt}
                      width={30}
                      height={30}
                    />
                  </button>
                </div>
              ))}
            </div>
            <motion.div
              animate={navScroll ? "visible" : "hidden"}
              variants={slideInFromRight(0.5)}
              className="text-white text-2xl
          flex flex-col items-center justify-center"
            >
              <p>{selectedImage.ram}</p>
              <motion.span
                variants={underlineVariant(2)}
                className="w-36 h-1 bg-rose-700 "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxComponent;
