"use client"
import { useInViewHookSlow } from "@/hooks/inView";
import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";





const InsideVideo = () => {
  const {ref,inView} = useInViewHookSlow()
  return (
    <motion.div  className="h-full  md:h-[700px] w-full bg-black  md:bg-stone-950 flex flex-col items-center justify-center ">
      <motion.div className="flex mx-8 relative overflow-hidden">
        <video src="/video/inside_phone.mp4" autoPlay muted 
        className="rounded-sm md:rounded-xl "
        />
        <motion.div ref={ref} initial="hidden" animate={inView? "visible":"hidden"} 
        className="flex flex-col text-[14px] md:text-2xl text-white font-bold absolute p-8">
          <motion.p variants={slideInFromLeft(0.2)} >Enter A17 Pro.</motion.p>
          <motion.p variants={slideInFromLeft(0.4)} >Game‑changing chip. </motion.p>
          <motion.p variants={slideInFromLeft(0.6)} >Groundbreaking performance.</motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InsideVideo;
