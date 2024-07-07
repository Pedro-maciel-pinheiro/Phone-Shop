"use client";

import MaskButton from "@/components/MaskButton";
import { useInViewHook } from "@/hooks/inView";
import { Product, ProductsListProps, ProductsProps } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsList = ({ ApiData }: ProductsListProps) => {
  const { ref, inView } = useInViewHook();
  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-96 md:max-w-4xl xl:max-w-7xl 
      transition-all mx-auto grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-3 "
    >
      {ApiData.map((item, index) => (
        <motion.div
          className="w-full shadow-xl shadow-black/30 border-2 overflow-hidden flex flex-col items-center justify-center rounded-xl"
          key={item._id}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * animationDelay, duration: 0.3 }}
        >
          <div className=" rounded-xl   overflow-hidden w-full mx-auto mb-3">
            <div className="w-full flex justify-start items-center p-2 text-xl font-semibold ">
              <h1>{item.brand} {item.category}</h1>
            </div>
            <Link
              href={{
                pathname: "singleproduct",
                query: { _id: item._id },
              }}
              key={item._id}
            >
              <Image
                className=" rounded-xl hover:scale-105 transition-all duration-300 "
                src={item.image}
                alt={item.brand}
                width={450}
                height={350}
              />
            </Link>
            <div className="flex items-center justify-around gap-12 w-full p-4">
              <div className="font-semibold">Price: ${item.price}</div>
              <MaskButton
                
                title={"Learn more"}
                btnColor={"after:bg-white hover:text-black"}
                linkBasePath={{
                  pathname: "singleproduct",
                  query: { _id: item._id },
                }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductsList;
