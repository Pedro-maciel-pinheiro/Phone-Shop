"use client";
import { useInViewHook, useInViewHookSlow } from "@/hooks/inView";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const InsideVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInViewHook();

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
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="h-[60vh]  md:h-screen w-full bg-black  md:bg-stone-950 flex flex-col items-center justify-center "
    >
      <div className="flex p-2 px-8 md:px-10 w-full max-w-7xl text-2xl md:text-4xl text-white font-semibold">
        <motion.h1 variants={slideInFromTop(0.3)}>Get the highlights</motion.h1>
      </div>
      <motion.div className="flex mx-8 relative overflow-hidden w-full h-full md:w-auto md:h-auto  max-w-7xl">
        <video
          ref={videoRef}
          src="/video/inside_phone.mp4"
          muted
          className="rounded-sm md:rounded-xl object-cover md:object-none"
        />

        <motion.div className="flex flex-col text-[15px] md:text-2xl text-white font-bold absolute p-8">
          <motion.p variants={slideInFromLeft(0.4)}>Enter A17 Pro.</motion.p>
          <motion.p variants={slideInFromLeft(0.5)}>
            Game‑changing chip.{" "}
          </motion.p>
          <motion.p variants={slideInFromLeft(0.6)}>
            Groundbreaking performance.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InsideVideo;
