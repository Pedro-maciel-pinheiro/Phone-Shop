"use client";
import { useInViewHook } from "@/hooks/inView";
import { fadeIn, slideInFromBottom, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const RedPerformance = () => {
  const { ref, inView } = useInViewHook();
  return (
    <div className="flex flex-col  items-center justify-center h-full min-h-[700px] w-full max-w-[1900px] overflow-hidden">
      <div
        className="ZeroNine h-screen w-full
          absolute z-10 bg-fixed bg-contain"
      />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn(0.1)}
        className=" flex flex-col
        lg:flex-row relative z-10 backdrop-blur-xl
         bg-white/5 border overflow-hidden rounded-md"
      >
        <Image
          src={"/img/red/performance-page.webp"}
          alt="performance background image"
          width={1000}
          height={1000}
          className="object-contain mt-2 mb-2"
        />
        <div
          className="flex flex-col items-center justify-center 
         w-96 md:w-full  h-44 lg:h-[300px] font-semibold "
        >
          <div
            className="grid md:flex grid-cols-2  md:flex-row lg:flex-col items-center justify-around
           w-full sm:w-[700px] md:w-full h-full relative lg:w-[200px]  mx-auto"
          >
            <div className="flex mx-auto justify-center items-center gap-2">
              <span
                className={`flex gap-1 text-white font-semibold text-xl md:text-3xl  overflow-hidden ${ inView? "textGlowEffect":"text-white"}`}
              
              >
                <motion.div variants={slideInFromTop(0.3)}>
                  <ArrowUpRight size={30} className="text-rose-700 " />
                </motion.div>
                32%
              </span>
              <motion.p variants={slideInFromRight(0.2)}
              className="text-[10px] w-28 text-white">Desempenho da CPU</motion.p>
            </div>
            <div className="flex mx-auto justify-center items-center gap-2">
              <span
                className={`flex gap-1 text-white font-semibold text-xl md:text-3xl  overflow-hidden ${ inView? "textGlowEffect":"text-white"}`}
               
              >
                <motion.div variants={slideInFromTop(0.4)}>
                  <ArrowUpRight size={30} className="text-rose-700 " />
                </motion.div>
                34%
              </span>
              <motion.p variants={slideInFromRight(0.2)}
              className="text-[10px] w-28 text-white">Desempenho da GPU</motion.p>
            </div>
            <div className="flex mx-auto justify-center items-center gap-2">
              <span className={`flex gap-1 text-white font-semibold text-xl md:text-3xl  overflow-hidden ${ inView? "textGlow-blue":"text-white"}`}>
                <motion.div variants={slideInFromBottom(0.5)}>
                  <ArrowDownRight size={30} className="text-blue-800" />
                </motion.div>
                34%
              </span>
              <motion.p variants={slideInFromRight(0.2)}
               className="text-[10px] w-28 text-white">
                Consumo de Energia da CPU
              </motion.p>
            </div>
            <div className="flex mx-auto justify-center items-center gap-2">
              <span className={`flex gap-1 text-white font-semibold text-xl md:text-3xl  overflow-hidden ${ inView? "textGlow-blue":"text-white"}`}>
                <motion.div variants={slideInFromBottom(0.6)}>
                  <ArrowDownRight size={30} className="text-blue-800" />
                </motion.div>
                38%
              </span>
              <motion.p variants={slideInFromRight(0.2)}
              className="text-[10px] w-28 text-white">
                Consumo de Energia da GPU
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RedPerformance;
