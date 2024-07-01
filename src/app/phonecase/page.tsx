import Products from "@/components/products/products";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDataPhoneCase } from "@/helper";
import { ProductsProps } from "@/types/types";

import React from "react";

const PhoneCase = async () => {
  const products: ProductsProps[] = await getDataPhoneCase();

  return (
    <div className="min-h-screen w-full">
      <Products
        products={products}
        linkBasePath={"/singleproductcase"}
        Style={""}
      />
    </div>
  );
};

export default PhoneCase;
