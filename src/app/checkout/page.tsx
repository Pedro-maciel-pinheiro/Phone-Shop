// pages/checkout.tsx
"use client";
import MaskButton from "@/components/MaskButton";
import { fadeIn } from "@/utils/motion";
import { color, motion } from "framer-motion";
import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useInViewHook } from "@/hooks/inView";
import { useInputFields, InputFields } from "@/app/checkout/inputs";
import { Button } from "@/components/ui/button";

export default function CheckOut() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckOutContent />
    </Suspense>
  );
}

function CheckOutContent() {
  const searchParams = useSearchParams();
  const price = searchParams.get("price");
  const category = searchParams.get("category");
  const brand = searchParams.get("brand");
  const image = searchParams.get("image");
  const image_2 = searchParams.get("image_2");
  const phoneColor = searchParams.get("phoneColor");
  const id = searchParams.get("id");

  const { ref, inView } = useInViewHook();

  const {
    email,
    setEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    city,
    setCity,
    state,
    setState,
    zip,
    setZip,
  } = useInputFields();

  const handleSendMessage = () => {
    const message = `Contact Information:\nEmail: ${email}\n\nShipping Address:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nAddress: ${address}\nCity: ${city}\nState: ${state}\nZip: ${zip}\n\nProduct Information:\nId: ${id}\nBrand: ${brand}\nCategory: ${category}\nPrice: ${price}\nColor: ${phoneColor} `;
   
   
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "556198516239";
    window.open(
      `http://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`,
      "_blank"
    );
  };

  const isEmptyCart = !price || !category || !brand || !image || !id;
  const isFormValid =
    email && firstName && lastName && address && city && state && zip;

  if (isEmptyCart) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Your cart is empty</h1>
          <Link href="/" className="text-blue-500 underline">
            <MaskButton
              title={"Continue shopping"}
              btnColor={"after:bg-green-500 w-36"}
              linkBasePath={"/"}
            />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={fadeIn(0.2)}
      animate={inView ? "visible" : "hidden"}
      className="flex items-center justify-center w-full min-h-screen"
    >
      <div
        className="flex flex-col-reverse md:flex-row  mt-36 mb-36
      items-center md:items-baseline  w-full max-w-4xl"
      >
        <div className="flex flex-col w-[300px] md:w-1/2 md:pr-5 ">
          <h1 className="text-3xl font-bold mb-4">Shipping Information</h1>
          <InputFields
            email={email}
            setEmail={setEmail}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            address={address}
            setAddress={setAddress}
            city={city}
            setCity={setCity}
            state={state}
            setState={setState}
            zip={zip}
            setZip={setZip}
          />
          <div className="flex justify-between items-center mt-5">
            <Link
              href="/"
              className="active:translate-y-1 transition-all duration-75 hover:font-semibold"
            >
              <button className="underline text-xl">{"<"} Return</button>
            </Link>
            <MaskButton
              linkBasePath={""}
              title={"Pay"}
              btnColor={"after:bg-green-500"}
              handleclick={handleSendMessage}
              disable={!isFormValid}
            />
          </div>
        </div>
        <div className="flex flex-col w-[300px] md:w-1/2 md:pl-5 mx-auto md:mx-0">
          <h1 className="text-3xl font-bold mb-4">Product Information</h1>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between border-b pb-2">
              <p>Brand</p>
              <p>{brand}</p>
            </div>
            <div className="flex justify-between border-b pb-2">
              <p>Category</p>
              <p>{category}</p>
            </div>
            <div className="flex justify-between border-b pb-2">
              <p>Price</p>
              <p>{price}</p>
            </div>
            <div className="flex justify-between border-b pb-2">
              <p>Color</p>
              <p>{phoneColor}</p>
            </div>
            <div className="flex p-2 border rounded-xl bg-stone-400">
              {image_2 && (
                <Image
                  className="mx-auto object-contain w-[200px] h-[190px]"
                  src={image_2}
                  alt={brand}
                  width={200}
                  height={200}
                />
              )}
              <Image
                className="mx-auto object-contain w-[200px] h-[190px]"
                src={image}
                alt={brand}
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
