"use client"
import { useInViewHook } from "@/hooks/inView";
import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const TextCard = () => {
  const { ref, inView } = useInViewHook();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInFromLeft(0.5)}
      className="text-3xl md:text-4xl font-semibold mb-16 "
    >
      <p>Explore our.. </p>
      <p>extensive inventory of phones</p>
    </motion.div>
  );
};

export default TextCard;
