"use client";
import ActiveSlider from "@/components/slider/ActiveSlider";
import DialogCard from "@/components/DialogCard";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { useInView } from "react-intersection-observer";


export default function Slider() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };


  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold:0.1,
  });


  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn(1)}
      className="flex flex-col items-center justify-center  

    w-full min-h-[80%] "
    >
      <motion.div
        variants={slideInFromLeft(1.2)}
        className="w-full max-w-[80%] text-3xl md:text-4xl font-semibold py-8"
      >
        <h1>Get to know iPhone.</h1>
      </motion.div>
      <motion.div className="w-full h-full" variants={fadeIn(1.5)}>
        <ActiveSlider onItemClick={handleItemClick} />
      </motion.div>
      <DialogCard
        isOpen={selectedItem! != null}
        closeModal={() => setSelectedItem(null)}
        phoneInfo={selectedItem}
      />
    </motion.div>
  );
}
