"use client";
import { ImageCarouselData } from "@/Data/Carousel_imges";
import { useInViewHookSlow } from "@/hooks/inView";
import { fadeIn, slideInFromLeft, smoothTransition } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const ImageCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(ImageCarouselData[0]);
  const {ref, inView} =useInViewHookSlow()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black">
      <motion.div ref={ref}  initial="hidden" animate={inView?"visible":"hidden"}
        className="w-full text-4xl max-w-4xl flex items-start justify-start
       text-gray-400 font-semibold  mb-16"
      >
        <motion.h1 variants={slideInFromLeft(0.2)}>Take a closer look.</motion.h1>
      </motion.div>
      <motion.div 
        key={selectedImage.alt}
        initial="initial"
        animate="animate"
        variants={smoothTransition}
        className="w-full flex justify-center mb-4"
      >
        <Image
          
          className="object-contain"
          src={selectedImage.imageData}
          alt={selectedImage.color}
          width={selectedImage.width}
          height={selectedImage.height}
        />
      </motion.div>
      <label className="text-white text-center text-lg mt-16 mb-2 font-semibold">
        {selectedImage.label}
      </label>
      <div  className="flex filter   items-center justify-center gap-2 bg-stone-800 p-3 rounded-full  border-2 border-white/80 mb-16">
        {ImageCarouselData.map((image, index) => (
          <div className="w-8 flex items-center justify-center ">
            <button
              key={index}
              className={` border w-5 h-5  rounded-full  transition-all duration-300 ${
                selectedImage.imageData === image.imageData
                  ? "ring-2 ring-purple-500 ring-offset-2 ring-offset-slate-50"
                  : "border-transparent"
              } ${image.color}`}
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
