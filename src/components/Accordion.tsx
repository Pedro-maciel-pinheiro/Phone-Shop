"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AccordionData } from "@/Data/data";
import { StaticImageData } from "next/image";
import { fadeIn } from "@/utils/motion";
import { ChevronUp } from "lucide-react";
import { useInViewHook } from "@/hooks/inView";

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { ref, inView } = useInViewHook();

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const getImageSrc = (backgroundImage: string | StaticImageData): string => {
    return typeof backgroundImage === "string"
      ? backgroundImage
      : backgroundImage.src;
  };

  const isActive = (index: number): boolean => {
    return activeIndex === index;
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn(0.1)}
      className="flex flex-col-reverse md:flex-row border shadow-xl mx-4
    items-center  justify-center md:justify-between rounded-xl overflow-hidden
     w-full h-full max-h-[800px] gap-8 md:gap-0 md:max-h-[600px] max-w-7xl bg-gray-50 px-8"
    >
      <div className="w-full md:w-1/2">
        {AccordionData.map((item, index) => (
          <motion.div
            key={index}
            className="border-b w-full md:w-96 "
            initial="hidden"
            animate={activeIndex ? "visible" : "visible"}
            variants={fadeIn(0.2)}
          >
            <button
              className="w-full text-left p-4 focus:outline-none font-bold "
              onClick={() => toggleAccordion(index)}
              disabled={isActive(index)}
            >
              <div className="flex  w-full justify-between ">
                {item.title}
                <ChevronUp
                  className={`transition-all duration-500 ${
                    isActive(index) ? "text-gray-500" : "text-black"
                  }`}
                  style={{
                    transform: isActive(index) ? "scaleY(1)" : "scaleY(-1)",
                  }}
                />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isActive(index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden"
                >
                  <motion.div className="p-4">{item.content}</motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center ">
        {activeIndex !== null && (
          <div className="w-full ">
            <motion.img
              key={activeIndex}
              variants={fadeIn(0.1)}
              src={getImageSrc(AccordionData[activeIndex].backgroundImage)}
              alt={`Image for ${AccordionData[activeIndex].title}`}
              className="object-contain w-96 md:w-full md:max-w-2xl mx-auto md:mx-0 "
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Accordion;
