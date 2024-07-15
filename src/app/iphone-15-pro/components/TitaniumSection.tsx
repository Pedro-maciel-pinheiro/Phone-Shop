"use client";
import { useInViewHook, useInViewHookSlow } from "@/hooks/inView";
import { slideInFromBottom, slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const TitaniumSection = () => {
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
    <>
      <motion.div
        ref={ref}
        className="w-full min-h-screen flex flex-col bg-[#101010] transition-all duration-1000 overflow-hidden"
      >
        <motion.div
          className="mx-auto mt-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h1
            variants={slideInFromLeft(0.4)}
            className="text-3xl md:text-4xl  font-semibold text-white"
          >
            Explore the full story
          </motion.h1>
          <div className="text-xl font-semibold text-white mb-8 md:mb-2">
            <motion.p variants={slideInFromLeft(0.6)}>
              iPhone. Forged in titanium
            </motion.p>
          </div>
          <div className="flex flex-col items-center justify-center  w-full  h-full relative max-w-xl md:max-w-5xl">
            <div className=" w-[350px] md:w-[950px] h-[460px] mb-2 mx-auto">
              <video
                ref={videoRef}
                src="/video/titanium_video.mp4"
                muted
                className="rounded-t-xl w-[350px] md:w-full
                h-[500px]  object-cover md:object-center "
              /> 
            </div>
            <div
              className="flex flex-col md:flex-row gap-8
             items-center justify-center w-full h-full mb-4 mx-auto"
            >
              <div className="w-[350px] md:w-[460px] max-w-[460px]  h-[460px] ">
                <Image
                  src={"/img/titanium_2.jpg"}
                  alt={""}
                  width={480}
                  height={512}
                  className="object-cover rounded-xl w-[460px] h-[460px] "
                />
              </div>
              <div className=" w-[350px] md:w-[460px] max-w-[460px]  h-[460px] ">
                <Image
                  src={"/img/titanium_3.jpg"}
                  alt={""}
                  width={480}
                  height={512}
                  className="object-cover rounded-xl w-[460px] h-[460px] "
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex items-center justify-center  w-full  bg-[#101010]  "
      >
        <motion.div
          className="flex flex-col md:flex-row items-center 
        justify-center md:justify-between gap-8 md:gap-28 text-gray-400 
        text-xl md:text-2xl w-[350px] md:w-[950px] h-[350px] md:h-[250px] "
        >
          <motion.p variants={slideInFromBottom(2.5)}>
            <strong className="text-white font-semibold">iPhone 15</strong> Pro
            is the first iPhone to feature an aerospace‑grade titanium design,
            using the same alloy that spacecraft use for missions to Mars.
          </motion.p>
          <motion.p variants={slideInFromBottom(2.5)}>
            <strong className="text-white font-semibold">Titanium</strong> has
            one of the best strength‑to‑weight ratios of any metal, making these
            our lightest Pro models ever. You’ll notice the difference the
            moment you pick one up.
          </motion.p>
        </motion.div>
      </motion.div>
      </motion.div>

     
    </>
  );
};

export default TitaniumSection;
