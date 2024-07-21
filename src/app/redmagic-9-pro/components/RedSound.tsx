"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInViewHook } from "@/hooks/inView";
import { fadeIn, slideInFromLeft, slideInFromRight } from "@/utils/motion";

const RedSound = () => {
  const { ref, inView } = useInViewHook();
  return (
    <motion.div
      ref={ref}
      initial={"hidden"}
      animate={inView ? "visible" : "hidden"}
      className="min-h-screen w-full flex items-center justify-center max-w-6xl mx-auto"
    >
      <div
        className="ZeroNine h-screen w-full
          absolute z-10 bg-fixed bg-contain"
      />
      <div className="border w-full h-full lg:h-[700px]  z-20 relative bg-[#000000]">
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-6 mx-8 p-4 md:p-0">
          <motion.div variants={slideInFromLeft(0.4)} className="flex flex-col text-white font-semibold w-80">
            <h1 className="text-lg mb-2 textGlow-white md:text-2xl">Audio from Another World</h1>
            <p className="text-sm md:text-lg">
              The sound quality matches the immaculate screen{"."} REDMAGIC 9 Pro
              features dual <strong className="textGlowEffect"> 1115K </strong>
              speakers and 5 magnetic sound units{","} which deliver DTS:X ULTRA
              certified high-fidelity audio.
            </p>
          </motion.div>
          <motion.div variants={fadeIn(0.7)} className="overflow-hidden">
            <Image
              src={"/img/red/sound.webp"}
              alt="sound img"
              width={700}
              height={700}
              className="object-contain w-[350px] lg:w-[550px]  hover:scale-105 transition-all duration-300 mx-auto"
            />
          </motion.div>
        </div>
        <span className="h-1 w-full bg-white flex"/>
        <div className="flex flex-col lg:flex-row-reverse items-center justify-evenly gap-6 mx-8 md:mt-8 p-4 md:p-0">
          <motion.div variants={slideInFromRight(0.6)} className="flex flex-col w-80 text-white font-semibold">
            <h1 className="text-lg mb-2 textGlow-white md:text-2xl">From One Powerful Camera to Two</h1>
            <p className="text-sm md:text-lg">
              We{"'"}ve integrated 
              <strong className="textGlowEffect"> two 50MP camera </strong> lenses
              and our first anti-shake optical system into REDMAGIC 9 Pro for
              exquisite wide-angle shots and greater image clarity{"."}
            </p>
          </motion.div>
          <motion.div variants={fadeIn(0.7)} className="overflow-hidden rounded-xl">
            <Image
              src={"/img/red/cam.webp"}
              alt="sound img"
              width={700}
              height={700}
              className="object-contain w-[300px] lg:w-[550px] rounded-xl hover:scale-105 transition-all duration-300 mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RedSound;
