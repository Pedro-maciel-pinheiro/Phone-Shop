import MaskButton from "@/components/MaskButton";
import Products from "@/components/products/page";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phonecase");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const PhoneCase = async () => {
  const products = await getData();

  return (
    <div className="min-h-screen w-full">
      <Products products={products} linkBasePath={"/singleproductcase"}/>
    </div>
  );
};

export default PhoneCase;
