"use client";
import React, { useEffect, useState } from "react";


function ProductFilter({ products, setBrand, resetFilter }: any) {
  const [brandList, setBrandList] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("optionDefault");

  useEffect(() => {
    if (products) {
      generateBrandList();
    }
  }, [products]);

  const generateBrandList = () => {
    const brandSet = new Set<string>();
    products.forEach((element: any) => {
      brandSet.add(element.brand);
    });
    const sortedBrandList = Array.from(brandSet).sort();
    setBrandList(sortedBrandList);
  };

  const handleBrandClick = (brand: string) => {
    setSelectedBrand(brand);
    setBrand(brand);
  };

  return (
    <div className="w-full flex items-center justify-center gap-3  h-36 text-white">
      <button
        className={`py-2 font-semibold px-4 flex items-center justify-center rounded-xl h-8 transition-all duration-100 ${
          selectedBrand === "optionDefault"
            ? "bg-blue-500 text-white active:translate-y-1 "
            : "bg-gray-300 text-black active:translate-y-1"
        }`}
        onClick={() => handleBrandClick("optionDefault")}
      >
        All
      </button>
      {brandList.map((brand: string, index: number) => (
        <button
          key={index}
          className={`py-2 flex items-center justify-center font-semibold px-4 rounded-xl h-8 transition-all duration-100 active:translate-y-1 ${
            selectedBrand === brand
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => handleBrandClick(brand)}
        >
          {brand}
        </button>
      ))}
    </div>
  );
}

export default ProductFilter;
