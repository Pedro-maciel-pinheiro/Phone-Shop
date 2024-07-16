"use client";
import { MenuRedmagic } from "@/Data/Menu_Redmagic";
import { useInViewHook } from "@/hooks/inView";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const RedHighlights = () => {
  const { ref, inView } = useInViewHook();
  const animationDelay = 0.5;
  return (
    <motion.div ref={ref} className="min-h-screen relative">
      <div
        className={`w-full h-full flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-2  max-w-7xl mx-auto relative z-10`}
      >
        {MenuRedmagic.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={
              inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: index * animationDelay, duration: 0.3 }}
            className={`w-full h-full flex flex-col ${data.grid}
          gap-2 items-center justify-center border border-white/40 bg-black "`}
          >
            <div className="relative flex flex-col w-full h-full ">
              <span className="text-white text-2xl absolute mt-2 mx-2 ">
                {data.title}
              </span>
              <Image
                src={data.image}
                alt={data.title}
                width={500}
                height={500}
                className={`object-cover w-full h-full `}  
              
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RedHighlights;
