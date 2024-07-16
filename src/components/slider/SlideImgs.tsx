"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function SlideImgs() {
  const slide = useRef<HTMLDivElement | null>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isBackDisabled, setIsBackDisabled] = useState(false);

  useEffect(() => {
    const currentSlide = slide.current;
    if (currentSlide) {
      setSlideWidth(currentSlide.scrollWidth - currentSlide.offsetWidth);
    }
  }, []);

  const handleNext = () => {
    if (slide.current) {
      const newPos = Math.min(currentPosition + 200, slideWidth);
      setCurrentPosition(newPos);

      if (newPos >= slideWidth) {
        setIsNextDisabled(true);
      }
      setIsBackDisabled(false);

      if (newPos > 0) {
        setIsBackDisabled(false);
      }
    }
  };

  const handleBack = () => {
    if (slide.current) {
      const newPos = Math.max(currentPosition - 300, 0);
      setCurrentPosition(newPos);

      if (newPos <= 0) {
        setIsBackDisabled(true);
      }
      setIsNextDisabled(false);

      if (newPos < slideWidth) {
        setIsNextDisabled(false);
      }
    }
  };

  return (
    <div
      className=" w-full 
    flex items-center justify-center h-full flex-col max-w-7xl "
    >
      <motion.div
        ref={slide}
        className="w-full max-w-7xl h-full overflow-hidden"
      >
        <motion.div
          animate={{ x: -currentPosition }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="flex gap-4 w-full"
        >
          <Image
            className="rounded-badge object-cover"
            src={"/img/img_1.jpg"}
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="rounded-badge object-cover"
            src={"/img/img_2.jpg"}
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="rounded-badge object-cover"
            src={"/img/img_3.jpg"}
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="rounded-badge object-cover"
            src={"/img/img_3.jpg"}
            alt=""
            width={300}
            height={300}
          />
         
          <Image
            className="rounded-badge object-cover"
            src={"/img/img_3.jpg"}
            alt=""
            width={300}
            height={300}
          />
          <Image
            className="rounded-badge object-cover"
            src={"/img/img_3.jpg"}
            alt=""
            width={300}
            height={300}
          />
        </motion.div>
      </motion.div>
      <div
        className="w-full 
       flex gap-4 items-end justify-end my-5 "
      >
        <button
          className={
            isBackDisabled
              ? "bg-gray-200 rounded-full p-1 transition-all duration-150"
              : "bg-gray-200 rounded-full p-1 active:translate-x-1 transition-all duration-150"
          }
          onClick={handleBack}
          disabled={isBackDisabled}
        >
          <ChevronLeft
            className={isBackDisabled ? "text-slate-500 " : "text-black"}
          />
        </button>
        <button
          className={
            isNextDisabled
              ? "bg-gray-200 rounded-full p-1 transition-all duration-150"
              : "bg-gray-200 rounded-full p-1 active:-translate-x-1 transition-all duration-150"
          }
          onClick={handleNext}
          disabled={isNextDisabled}
        >
          <ChevronRight
            className={isNextDisabled ? "text-slate-500 " : "text-black"}
          />
        </button>
      </div>
    </div>
  );
}
