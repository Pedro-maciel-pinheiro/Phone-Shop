"use client"
import { useInViewHook } from "@/hooks/inView";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const RedCooling = () => {
  const { ref, inView } = useInViewHook();
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="min-h-screen w-full flex flex-col justify-center items-center "
    >
      <div className="w-full h-full max-w-6xl mx-auto flex justify-around text-white">
        <div className={`text-2xl md:text-3xl xl:text-4xl ${inView ? "textGlow-white" : ""}`}>
          Reduce Temperature 
          <p>Even Faster</p>
        </div>
        <p className="flex flex-col w-80 font-semibold">
          With a new generation of REDMAGIC, we present the Magic Cooling System
          ICE 13.0, with the highest cooling VC measuring 10182 mm², resulting
          in a notable decrease of up to 25° C in the temperature of the CPU
          core.
        </p>
      </div>
      <div className="max-w-[1400px]">
        <video
           ref={videoRef}
          className="w-full h-full "
          src="/video/cooling.mp4"
           
        />
      </div>
      <div></div>
    </motion.div>
  );
};

export default RedCooling;
