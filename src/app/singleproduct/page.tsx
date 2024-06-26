import CustomCard from "@/components/CustomCard";
import { getSingleProduct } from "@/helper";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProduct = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = await getSingleProduct(_id);

  return (
    <div
      className=" bg-primary 
      min-h-screen w-full flex items-center justify-center
      "
    >
      <div className="w-full max-w-lg mx-4 md:mx-0 md:max-w-xl lg:max-w-7xl max-h-[600px]  mb-36">
        <CustomCard
          bgColor={"bg-orange-400 p-4 shadow-xl shadow-black/30 border-2"}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          brand={product.brand}
          link={product._id}
          linkBasePath={{
            pathname: "/checkout",
            query: {
              price: product.price,
              category: product.category,
              image: product.image,
              brand: product.brand,
              id: product._id,
            },
          }}
          btnColor={
            "after:bg-white hover:text-black hover:border-primary hover:border"
          }
          btnTitle={"Buy Now "}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
