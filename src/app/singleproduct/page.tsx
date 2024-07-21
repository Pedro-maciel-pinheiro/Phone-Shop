import CustomCard from "@/components/CustomCard";
import Logo from "@/components/logo/Logo";
import { getSingleProduct } from "@/helper";
import React from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProduct = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = await getSingleProduct(_id);

  return (
    <>
      <div
        className="  
      min-h-screen w-full flex items-center justify-center
      "
      >
        <div className="w-full max-w-lg mx-4 md:mx-0 md:max-w-xl lg:max-w-7xl max-h-[600px]  mb-36">
          <div className="w-full flex items-center justify-center ">
            <Logo
              textStyle={"text-4xl md:text-5xl"}
              underlineDelay={3.5}
              flexStyle={"items-center md:items-start mx-auto"}
              underlineWidth={"max-w-56  md:max-w-[310px]"}
            />
          </div>
          <div className="w-full h-full  ">
            <CustomCard
              bgColor={"bg-stone-700 p-4 shadow-xl shadow-black/30 border-2 text-white"}
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
                "after:bg-white hover:text-black hover:border-primary hover:border "
              }
              btnTitle={"Buy Now "}
            />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default SingleProduct;
