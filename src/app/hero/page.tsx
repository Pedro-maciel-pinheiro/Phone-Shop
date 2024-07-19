"use client";
import PhoneVideo from "@/components/PhoneVideo";
import Logo from "@/components/logo/Logo";

import { slideInFromBottom, slideInFromTop } from "@/utils/motion";
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
        <div className="w-full   flex items-center justify-center">
          <Logo
            textStyle={"text-2xl md:text-5xl lg:text-6xl"}
            underlineDelay={7}
            flexStyle={"items-center justify-center"}
            underlineWidth={" md:max-w-[350px] lg:max-w-[450px]"}
          />
        </div>
        <PhoneVideo />
      </motion.div>
    </motion.div>
  );
}
