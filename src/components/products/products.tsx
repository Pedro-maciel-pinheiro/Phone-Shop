"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import MaskButton from "../MaskButton";
import { ProductsProps } from "@/types/types";
import { motion } from "framer-motion";



interface Props {
  products: ProductsProps[];
  linkBasePath: string;
  Style: string;
}

const Products: React.FC<Props> = ({ products, linkBasePath, Style }) => {
  
  return (
    <div
      className={`w-full max-w-96 md:max-w-4xl xl:max-w-7xl transition-all mx-auto grid grid-cols-1 xl:grid-cols-3 gap-3 ${Style}`}
    >
      {products.map((item, index) => {
        const animationDelay = 0.5;
        return (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 20 }}
            animate={animationDelay ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * animationDelay, duration: 0.3 }}
          >
            <Card className="shadow-xl duration-100">
              <CardContent>
                <div>
                  <CardHeader>
                    <CardTitle>
                      {item.brand} {item.category}
                    </CardTitle>
                    <Link
                      href={{
                        pathname: linkBasePath,
                        query: { _id: item._id },
                      }}
                      key={item._id}
                      className="overflow-hidden"
                    >
                      <Image
                        src={item.image}
                        alt={item.brand}
                        width={400}
                        height={400}
                        className="hover:scale-105 transition-all duration-300 object-contain"
                      />
                    </Link>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center">
                    <div className="font-semibold">${item.price}</div>
                    <div>
                      <MaskButton
                        title={"Learn more"}
                        btnColor={"after:bg-white hover:text-black"}
                        linkBasePath={{
                          pathname: linkBasePath,
                          query: { _id: item._id },
                        }}
                      />
                    </div>
                  </CardFooter>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Products;
