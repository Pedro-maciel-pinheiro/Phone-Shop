"use client";
import { useInViewHook } from "@/hooks/inView";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const RedBattery = () => {
  const { ref, inView } = useInViewHook();
  return (
    <motion.div ref={ref} className="  w-full flex flex-col gap-3 max-w-7xl mx-auto">
      <div
        className="flex flex-col mx-8
      gap-4 items-start justify-start text-white w-96 h-[180px]"
      >
        <h1
          className={`text-2xl md:text-2xl xl:text-3xl ${
            inView ? "textGlow-white" : ""
          }`}
        >
          {" "}
          56 Hours of Energy
        </h1>
        <p>
          Industry-leading battery performance and up to{" "}
          <strong className="text-rose-600">56</strong> hours of standby time
          delivered by a <strong className="text-rose-700">6500 mAh</strong>{" "}
          battery.
        </p>
      </div>
      <div className="w-full h-full">
        <Image
          src={"/img/red/baterry.webp"}
          alt="battery background"
          width={1000}
          height={1000}
          className="object-contain mx-auto"
        />
      </div>
      <div className="flex  items-end justify-end "> 
        <div className="flex flex-col items-center justify-end w-96 h-[220px] text-white mx-8">
          <h1
            className={`text-end text-2xl md:text-2xl xl:text-3xl ${
              inView ? "textGlow-white" : ""
            }`}
          >
            Recharge even faster than before
          </h1>
          <p className="text-end">
            Experience excellent charging speeds of 80W and recharge in less
            than 
             <strong className="text-rose-600">35 minutes</strong>, or plug and
            play using charge separation to preserve your battery.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default RedBattery;
