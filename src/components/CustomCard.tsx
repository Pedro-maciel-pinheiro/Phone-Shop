"use client";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import MaskButton from "./MaskButton";
import { useInView } from "react-intersection-observer";

interface CustomCardProps {
  price: number;
  description: string;
  category: string;
  image: string;
  brand: string;
  link: number;
  linkBasePath: any;
  btnColor: string;
  btnTitle: string;
  bgColor: string;
}

const CustomCard = ({
  price,
  description,
  category,
  image,
  brand,
  link,
  linkBasePath,
  btnColor,
  btnTitle,
  bgColor,
}: CustomCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.8;
  return (
    <motion.div
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      variants={imageVariants}
      initial="hidden"
      className={`rounded-xl overflow-hidden transition-all duration-300 
       h-[700px] lg:h-full max-w-7xl  ${bgColor} 
       flex flex-col lg:flex-row items-center justify-evenly gap-5 mx-4 lg:mx-auto`}
    >
      <motion.div
        variants={imageVariants}
        transition={{ delay: animationDelay }}
        className="w-96  rounded-xl mt-2 
        overflow-hidden"
      >
        <Image
          className="hover:scale-105 object-contain transition-all duration-300"
          src={image}
          alt={brand}
          width={500}
          height={400}
        />
      </motion.div>
      <motion.div
        className="  px-2 py-2
      border-primary rounded-xl max-w-xl w-full flex flex-col gap-3"
      >
        <motion.div variants={slideInFromLeft(1.2)} className=" font-semibold">
          <p>Category: {category}</p>
          <p>Brand: {brand}</p>

          <p>Price ${price}</p>
        </motion.div>
        <motion.div variants={slideInFromRight(1.3)}>
          <p>About Phone {description}</p>
        </motion.div>

        <motion.div variants={slideInFromBottom(1)}
         className="w-full flex items-center justify-center md:justify-start " >
          <MaskButton
            title={btnTitle}
            btnColor={btnColor}
            linkBasePath={linkBasePath}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CustomCard;
