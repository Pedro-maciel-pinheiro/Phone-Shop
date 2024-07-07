"use client";
import { useInViewHook } from "@/hooks/inView";
import { LogoProps } from "@/types/types";
import { letterVariant, underlineVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";




export default function Logo({ flexStyle,textStyle,underlineDelay,underlineWidth}:LogoProps) {
  const { ref, inView } = useInViewHook();
  const text = "Perfect-Phone";
  return (
    <motion.div ref={ref} className={`w-full flex flex-col ${flexStyle} transition-all`}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className=" text-black "
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index * 0.1}
            variants={letterVariant}
            className={textStyle}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={underlineVariant(underlineDelay)}
        style={{ width: 0 }}
        className={`h-1 w-full max-w-[250px]  ${underlineWidth} bg-black mb-2 rounded-xl `}
      />
    </motion.div>
  );
};


