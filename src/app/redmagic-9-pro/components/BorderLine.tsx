"use client";
import { useInViewHook } from "@/hooks/inView";
import { BorderLineProps } from "@/types/types";
import {
  fadeIn,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const BorderLine = ({ pageNumber, title }: BorderLineProps) => {
  const { ref, inView } = useInViewHook();
  return (
    <motion.div
      ref={ref}
      initial={"hidden"}
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn(0.2)}
      className="w-full max-w-[1900px] h-20 md:h-16 bg-[#080808] backdrop-blur-3xl flex items-center  mx-auto mt-8 mb-8
      justify-center border-2 border-white/50 
      rounded-md overflow-hidden relative z-20"
    >
      <div className="flex w-full h-full items-center justify-center lg:justify-between">
        <span
          className={`w-36 lg:w-96 h-full  flex items-center justify-center  gap-2  text-3xl 
          ${inView ? "textGlowEffect opacity-100" : "opacity-0"} `}
        >
          <motion.span
            variants={slideInFromLeft(0.4)}
            className="bg-rose-600  w-3 lg:w-5 h-3 lg:h-5"
          />
          <motion.p
            variants={slideInFromLeft(0.3)}
            className="text-xl lg:text-3xl"
          >
            00{pageNumber}
          </motion.p>
        </span>
        <div className="w-full flex items-center justify-center text-[14px] sm:text-xl lg:text-3xl text-white text-center ">
          <motion.p variants={slideInFromBottom(0.4)}>{title}</motion.p>
        </div>
      </div>
      <motion.div
        variants={slideInFromRight(0.4)}
        className="border-l  w-48 md:w-96 bg-transparent md:bg-white"
      >
        <Image
          src={"/img/09_bg.webp"}
          alt={"background"}
          width={500}
          height={500}
          className="w-36 md:w-44 lg:56  object-fill mx-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default BorderLine;
