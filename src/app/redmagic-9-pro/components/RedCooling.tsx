"use client";
import { useInViewHook } from "@/hooks/inView";
import {
  slideInFromLeft,
  slideInFromRight,
  underlineVariant,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const RedCooling = () => {
  const { ref, inView } = useInViewHook();
  
  return (
    <>
      <motion.div
        ref={ref}
        className="h-[500px] md:h-[650px] w-full 
        flex flex-col justify-center items-center "
      >
        <div
          className="flex flex-col md:flex-row justify-center items-center 
        md:justify-around w-80 md:w-full h-full max-w-6xl mx-auto  text-white"
        >
          <div
            className={`w-80 md:w-96 text-2xl md:text-3xl xl:text-4xl mb-4 ${
              inView ? "textGlow-white" : ""
            }`}
          >
            <h1>Reduce Temperature</h1>
            <p>Even Faster</p>
          </div>
          <p className="flex flex-col w-80 text-sm">
            With a new generation of REDMAGIC, we present the Magic Cooling
            System ICE 13.0, with the highest cooling VC measuring 10182 mm²,
            resulting in a notable decrease of up to 25° C in the temperature of
            the CPU core.
          </p>
        </div>
        <div className="max-w-[1400px]">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full "
            src="/video/cooling.mp4"
          />
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col  gap-5 "
      >
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-4">
          <motion.div variants={slideInFromRight(0.4)}>
            <Image
              src={"/img/red/cooling_1.webp"}
              alt="cooling image"
              width={500}
              height={500}
              className="object-contain w-[380px] md:w-[500px] xl:w-[600px]"
            />
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.4)}
            className="flex flex-col w-96 text-white gap-4 "
          >
            <h1
              className={`text-xl md:text-2xl xl:text-3xl ${
                inView ? "textGlow-white" : ""
              }`}
            >
              Stunning and Powerful Appearance
            </h1>
            <span className="flex items-center justify-center w-full h-1">
              <motion.span
                className="w-full h-[2px] bg-white"
                variants={underlineVariant(3)}
              />
              <ChevronRight className="hidden md:block" />
            </span>
            <p className="text-sm md:text-lg  xl:text-xl">
              Customize the lights of the unique turbofan and see the magic of
              cooling 22,000 RPM come to life.
            </p>
          </motion.div>
        </div>
        <span className="flex items-center justify-center w-full h-1">
          <motion.span
            className="w-full h-[2px] bg-white"
            variants={underlineVariant(3)}
          />
        </span>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <motion.div variants={slideInFromLeft(0.6)}>
            <Image
              src={"/img/red/cooling_2.webp"}
              alt="cooling image"
              width={500}
              height={500}
              className="object-contain w-[350px] md:w-[500px] xl:w-[600px]"
            />
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.6)}
            className="flex flex-col  w-96 text-white  gap-4"
          >
            <h1
              className={`text-start md:text-end  text-xl md:text-2xl xl:text-3xl ${
                inView ? "textGlow-white" : ""
              }`}
            >
              More Space for the Cold
            </h1>
            <span className="flex flex-row-reverse items-center justify-center w-full h-1">
              <motion.span
                className="w-full h-[2px] bg-white"
                variants={underlineVariant(3)}
              />
              <ChevronLeft className="hidden md:block" />
            </span>
            <p className="text-start md:text-end  text-sm md:text-lg  xl:text-xl">
              With the new design, the cooling chamber has a wider structure and
              is 18% larger to allow for greater airflow.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default RedCooling;
