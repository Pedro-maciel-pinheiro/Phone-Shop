import { useInViewHook } from "@/hooks/inView";
import { motion } from "framer-motion";
import React from "react";

const RedHighlights = () => {
  const { ref, inView } = useInViewHook();
  return (
    <motion.div ref={ref} className="min-h-screen relative">
      <div
        className="ZeroNine h-screen w-full
          absolute z-10 bg-fixed bg-contain"
      />
      <div></div>
    </motion.div>
  );
};

export default RedHighlights;
