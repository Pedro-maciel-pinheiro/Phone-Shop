"use client";
import { useInViewHook, useInViewHookSlow } from "@/hooks/inView";
import { fadeIn, underlineHeight, underlineVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const RedExperience = () => {
  const { ref, inView } = useInViewHookSlow();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="min-h-screen w-full max-w-7xl mx-auto"
    >
      <div className="flex w-full text-white z-20">
        <div className="flex flex-col items-start justify-start gap-2 mx-8">
          <h1
            className={`text-2xl md:text-2xl xl:text-3xl ${
              inView ? "textGlow-white" : ""
            }`}
          >
            Still the Best Gaming Display
          </h1>
          <motion.span
            className="w-full h-[2px] bg-white"
            variants={underlineVariant(3)}
          />
          <div className="max-w-[500px] flex items-start justify-start">
            <p className=" text-sm ">
              A REDMAGIC dominou a tecnologia UDC, que oferece uma proporção
              tela-corpo de <strong className="text-rose-600"> 93,7% </strong> e
              permite que você visualize a vitória sem interrupções. Desfrute de
              um contraste mais profundo, cores vibrantes e mais brilho na tela
              de materiais luminescentes do BOE Q9+.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-36  relative">
        <Image
          src={"/img/red/screen.webp"}
          alt="screen background img "
          width={1200}
          height={1200}
          className="object-contain mx-auto "
        />
      </div>

      <motion.div
        className="flex flex-wrap gap-4 items-center justify-center  p-2
        w-full h-full text-white"
      >
        <div className="flex justify-center 
        items-center w-44 h-48 ">
          <div
        className={`flex flex-col items-center justify-center 
         gap-1 text-sm 
         transition-all duration-1000
         w-44 h-full text-center px-2 
         
          `}
          >
            <h1> Borderless Display </h1>
            <p>True Full Screen</p>

            <span className="flex w-full h-2 items-center justify-center">
              <motion.span
                variants={underlineVariant(2)}
                className="flex items-center justify-center
              w-full h-[2px]  bg-white"
              />
            </span>
            <h1>2160 Hz</h1>
            <p>Dimming PWM de</p>
          </div>
          <div className="h-64 mx-2">
            <motion.span
              variants={underlineHeight(2)}
              className="flex 
              w-[2px]    bg-white "
            />
          </div>
        </div>


        <div className="flex justify-center 
        items-center w-44 h-48 ">
          <div
        className={`flex flex-col items-center justify-center 
         gap-1 text-sm 
         transition-all duration-1000
         w-44 h-full text-center px-2 
         
          `}
          >
            <h1>93.7%</h1>
            <p>Screen-to-Body Ratio</p>
            <span className="flex w-full h-2 items-center justify-center">
              <motion.span
                variants={underlineVariant(3)}
                className="flex items-center justify-center
              w-full h-[2px]  bg-white"
              />
            </span>
            <h1>2480x1116</h1>
            <p>Of Resolution</p>
          </div>
          <div className="h-64 mx-2">
            <motion.span
              variants={underlineHeight(3)}
              className="flex 
              w-[2px]    bg-white "
            />
          </div>
        </div>
        <div className="flex justify-center 
        items-center w-44 h-48 ">
          <div
        className={`flex flex-col items-center justify-center 
         gap-1 text-sm  
         transition-all duration-1000
         w-44 h-48 text-center px-2 
         
          `}
          >
            <h1>120 Hz</h1>
            <p>Update Rate</p>

            <span className="flex w-full h-2 items-center justify-center mt-5">
              <motion.span
                variants={underlineVariant(3.2)}
                className="flex items-center justify-center
              w-full h-[2px]  bg-white"
              />
            </span>
            <h1>ΔE1</h1>
            <p>Color Accuracy</p>
          </div>
          <div className=" mx-2 h-64">
            <motion.span
              variants={underlineHeight(3.2)}
              className="flex 
              w-[2px]    bg-white "
            />
          </div>
        </div>
        <div className="flex justify-center 
        items-center w-44 h-48 ">
          <div
        className={`flex flex-col items-center justify-center 
         gap-1 text-sm 
         transition-all duration-1000
         w-44 h-full text-center px-2 
         
          `}
          >
            <h1>1600</h1>
            <p>Nits</p>
            <p>Peak Brightness</p>

            <span className="flex w-full h-2 items-center justify-center mb-1">
              <motion.span
                variants={underlineVariant(3.5)}
                className="flex items-center justify-center
              w-full h-[2px]  bg-white"
              />
            </span>
            <h1>960 Hz</h1>
            <p>Multifunctional </p>
          </div>
          <div className="mx-2 h-64 ">
            <motion.span
              variants={underlineHeight(3.5)}
              className="flex 
              w-[2px]    bg-white "
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RedExperience;
