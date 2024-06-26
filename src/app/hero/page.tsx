"use client";
import PhoneVideo from "@/components/PhoneVideo";

import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="min-h-screen w-full  flex items-center transition-all duration-500 "
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={slideInFromBottom(0.5)}
        className="h-full w-full px-24 mx-auto 
      flex flex-col items-center justify-center "
      >
        <motion.div
          variants={slideInFromTop(0.9)}
          className="flex justify-start items-start w-full px-3"
        >
          {" "}
        </motion.div>
        <PhoneVideo />
      </motion.div>
    </motion.div>
  );
}
