"use client";
import { useInViewHook } from "@/hooks/inView";
import {
  fadeIn,
  slideInFromBottom,
  slideInFromRight,
  slideInFromTop,
  underlineVariant,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const RedPerformance = () => {
  const { ref, inView } = useInViewHook();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn(1)}
      className="flex flex-col  items-center justify-center h-full 
       min-h-[700px] w-full max-w-[1900px] overflow-hidden"
    >
      <div
        className="ZeroNine h-screen w-full
          absolute z-10 bg-fixed bg-contain"
      />
      <motion.div
        animate={inView ? "visible" : "hidden"}
        className={`w-full h-full mb-8 flex flex-col md:flex-row z-20
      font-semibold transition-all duration-1000
        justify-around max-w-7xl text-white 
         
        `}
      >
        <div className="flex flex-col justify-center">
          <div
            className="flex w-full  flex-col text-2xl md:text-3xl xl:text-4xl 
          justify-center items-center  textGlow-white"
          >
            The Fastest Chip Ever
          </div>
          <motion.span
            className="w-56 h-1 bg-white mt-2 max-w-80 md:max-w-96  mx-auto"
            variants={underlineVariant(3)}
          />
        </div>

        <div className="w-96 mx-auto md:mx-0 mt-4 text-center md:mt-0 md:text-start">
          REDMAGIC 9 Pro offers the highest standard of performance available in
          the industry with the most latest Snapdragon 8 Gen 3 chipset.
        </div>
      </motion.div>
      <motion.div
        className=" flex flex-col w-[380px] md:w-full max-w-6xl
        lg:flex-row relative z-10 backdrop-blur-xl
         bg-white/5 border overflow-hidden rounded-md"
      >
        <Image
          src={"/img/red/performance-page.webp"}
          alt="performance background image"
          width={1000}
          height={1000}
          className="object-contain mt-2 mb-2 w-full h-full"
        />
        <div
          className="flex flex-col items-center justify-center 
         w-96 md:w-56  h-44 lg:h-[300px] font-semibold "
        >
          <div
            className="grid md:flex grid-cols-2  md:flex-row lg:flex-col items-center justify-around
           w-full sm:w-[700px] md:w-full h-full relative lg:w-[200px]  mx-auto"
          >
            <div className="flex mx-auto justify-center items-center gap-2">
              <span
                className={`flex gap-1 text-white font-semibold text-xl md:text-3xl  overflow-hidden ${
                  inView ? "textGlowEffect" : "text-white"
                }`}
              >
                <motion.div variants={slideInFromTop(0.3)}>
                  <ArrowUpRight size={30} className="text-rose-700 " />
                </motion.div>
                32%
              </span>
              <motion.p
                variants={slideInFromRight(0.2)}
                className="text-[10px] w-28 text-white"
              >
                Desempenho da CPU
              </motion.p>
            </div>
            <div className="flex mx-auto justify-center items-center gap-2">
              <span
                className={`flex gap-1 text-white font-semibold text-xl md:text-3xl  overflow-hidden ${
                  inView ? "textGlowEffect" : "text-white"
                }`}
              >
                <motion.div variants={slideInFromTop(0.4)}>
                  <ArrowUpRight size={30} className="text-rose-700 " />
                </motion.div>
                34%
              </span>
              <motion.p
                variants={slideInFromRight(0.2)}
                className="text-[10px] w-28 text-white"
              >
                Desempenho da GPU
              </motion.p>
            </div>
            <div className="flex mx-auto justify-center items-center gap-2">
              <span
                className={`flex gap-1 text-white font-semibold text-xl md:text-3xl  overflow-hidden ${
                  inView ? "textGlow-blue" : "text-white"
                }`}
              >
                <motion.div variants={slideInFromBottom(0.5)}>
                  <ArrowDownRight size={30} className="text-blue-800" />
                </motion.div>
                34%
              </span>
              <motion.p
                variants={slideInFromRight(0.2)}
                className="text-[10px] w-28 text-white"
              >
                Consumo de Energia da CPU
              </motion.p>
            </div>
            <div className="flex mx-auto justify-center items-center gap-2">
              <span
                className={`flex gap-1 text-white font-semibold text-xl md:text-3xl  overflow-hidden ${
                  inView ? "textGlow-blue" : "text-white"
                }`}
              >
                <motion.div variants={slideInFromBottom(0.6)}>
                  <ArrowDownRight size={30} className="text-blue-800" />
                </motion.div>
                38%
              </span>
              <motion.p
                variants={slideInFromRight(0.2)}
                className="text-[10px] w-28 text-white"
              >
                Consumo de Energia da GPU
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="z-20 flex flex-col md:flex-row gap-8 items-start justify-between w-full h-full max-w-6xl mt-16 ">
        <div
          className="mx-auto md:mx-0 flex flex-col  w-[380px] md:w-[600px] p-2 h-[600px] rounded-xl
        items-center justify-center bg-[#111111] backdrop-blur-3xl border md:border-none"
        >
          <Image
            src={"/img/red/genshin.webp"}
            alt={""}
            width={500}
            height={500}
            className="rounded-xl object-contain mb-4 md:mb-0"
          />
          <div className="text-white font-semibold max-w-[500px]  mb-3 md:mb-0">
            <h1 className="mt-2 mb-2 text-xl">
              Stable, Taking You to the Next Level
            </h1>
            <p>
              Multitask without compromising performance. REDMAGIC 9 Pro
              maintains the performance stability without a single drop in frame
              rate after 1 hour of gameplay, split-screen tasks or watching
              videos on HD.
            </p>
            <p>*All data above is from REDMAGIC Labs</p>
          </div>
        </div>
        <div
          className="mx-auto md:mx-0 flex flex-col gap-4 items-center  w-[380px] md:w-[600px] p-2 h-[600px] rounded-xl
         justify-center bg-[#111111] backdrop-blur-3xl  border md:border-none"
        >
          <video
            src="/video/genshin.mov"
            muted
            autoPlay
            loop
            className="w-full h-full rounded-xl max-w-[447px] max-h-[274px] mx-auto md:mx-0"
          />
          <div className="text-white font-semibold mb-3 md:mb-0 mt-2">
            <h1 className="mt-2 mb-2 text-xl">
              Unwavering Stability, Unbeatable Accuracy
            </h1>
            <p>
              Navigate through the game in real time, achieving victories with
              120Hz precision, incredible 1600nits of brightness and a truly
              borderless display or interruptions.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RedPerformance;
