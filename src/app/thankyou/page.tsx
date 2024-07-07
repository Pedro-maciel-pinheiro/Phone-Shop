"use client";
import CustomButton from "@/components/CustomButton";
import MaskButton from "@/components/MaskButton";
import { fadeIn, slideInFromBottom, slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

export default function ThankYou() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center min-h-screen w-full "
    >
      <motion.div
        variants={fadeIn(1)}
        className="bg-white p-8  mx-5 md:mx-0 border-2
        rounded-xl shadow-xl shadow-black/30 max-w-lg text-center"
      >
        <h1 className="text-3xl font-semiboldbold mb-8 underline">
          Thank You for Your Purchase!
        </h1>
        <motion.p
          variants={slideInFromLeft(1.2)}
          className="text-gray-700 mb-6"
        >
          We appreciate your business! If you have any questions, please email
          us at joaopedrolk98@gmail.com
        </motion.p>
        <motion.div variants={slideInFromBottom(1.5)} className="">
          <CustomButton title={"Continue Shopping"} LinkPath={"/"}   />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
