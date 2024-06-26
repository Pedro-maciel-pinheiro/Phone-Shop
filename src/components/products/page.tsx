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
import { Button } from "../ui/button";

interface ProductsProps {
  _id: number;
  title: string;
  price: number;
  previousPrice: number;
  description: string;
  category: string;
  image: string;
  isNew: boolean;
  brand: string;
  quantity: number;
  link: string;
}

interface Props {
  products: ProductsProps[];
  linkBasePath: string;
}

export default function Products({ products, linkBasePath }: Props) {
  return (
    <div
      className="max-w-96 md:max-w-4xl xl:max-w-7xl transition-all 
     mx-auto grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-2  py-10"
    >
      {products.map((item) => (
        <Card className="shadow-xl  duration-100 ">
          <CardContent className="">
            <div>
              <CardHeader>
                <CardTitle>
                  {item?.brand} {item?.category}
                </CardTitle>
                <Link
                  href={{ pathname: linkBasePath, query: { _id: item?._id } }}
                  key={item._id}
                  className="overflow-hidden "
                >
                  <Image
                    src={item?.image}
                    alt={item?.brand}
                    width={400}
                    height={400}
                    className="hover:scale-105 transition-all duration-200 object-contain"
                  />
                </Link>
              </CardHeader>
              <CardFooter className="flex justify-between items-center">
                <div className="font-semibold">${item?.price}</div>
                <div>
                  <MaskButton
                    title={"Learn more"}
                    btnColor={"after:bg-white hover:text-black"}
                    key={item._id}
                    linkBasePath={{
                      pathname: linkBasePath,
                      query: { _id: item?._id },
                    }}
                  />
                </div>
              </CardFooter>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
