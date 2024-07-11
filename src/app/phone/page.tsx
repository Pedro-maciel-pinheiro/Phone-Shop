"use client";
import ProductFilter from "@/components/ProductFilter";
import Products from "@/components/products/products";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { PhoneWallpaper } from "@/Data/data";

import PhoneSlider from "@/components/phoneSlider/PhoneSlider";
import { getApiList, filterProductList } from "@/utils/productFilter";
import { useInViewHook } from "@/hooks/inView";
import Logo from "@/components/logo/Logo";

export default function PhonePage() {
  const [productList, setProductList] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    getApiList(setProductList, setFilteredProducts);
  }, []);

  const handleFilterProductList = (brand: string) => {
    filterProductList(brand, productList, setFilteredProducts);
  };

  const resetFilter = () => {
    setFilteredProducts(productList);
  };

  const { ref, inView } = useInViewHook();

  return (
    <motion.div
      ref={ref}
      variants={slideInFromTop(0.5)}
      animate={inView ? "visible" : "hidden"}
      initial="hidden"
      className="min-h-screen w-full flex flex-col items-center justify-center mx-auto"
    >
      <div className="mt-36 w-full h-full">
        <div className="w-full flex items-start justify-start">
          <Logo
            textStyle={"text-2xl md:text-5xl"}
            underlineDelay={3.5}
            flexStyle={"items-start max-w-[80%] mx-auto"} 
            underlineWidth={"md:max-w-[310px]"}          />
        </div>
        <PhoneSlider DataHolder={PhoneWallpaper} />
        <ProductFilter
          products={productList}
          setBrand={handleFilterProductList}
          resetFilter={resetFilter}
        />
      </div>

      <div>
        <Products
          products={filteredProducts}
          linkBasePath={"/singleproduct"}
          Style={"py-10"}
        />
      </div>
    </motion.div>
  );
}
