// checkout.tsx (your main component file)
"use client";
import MaskButton from "@/components/MaskButton";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useInViewHook } from "@/hooks/inView";
import { useInputFields, InputFields } from "./inputs";
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
    const message = `Contact Information:\nEmail: ${email}\n\nShipping Address:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nAddress: ${address}\nCity: ${city}\nState: ${state}\nZip: ${zip}\n\nProduct Information:\nId: ${id}\nBrand: ${brand}\nCategory: ${category}\nPrice: ${price}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "556198516239";
    window.open(
      `http://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`,
      "_blank"
    );
  };

  // Check if the cart is empty
  const isEmptyCart = !price || !category || !brand || !image || !id;

  // Check if all input fields are filled
  const isFormValid =
    email && firstName && lastName && address && city && state && zip;

  if (isEmptyCart) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Your cart is empty</h1>
          <Link href="/" className="text-blue-500 underline">
            <MaskButton title={"Continue shopping"} 
             btnColor={"after:bg-green-500 w-36"} linkBasePath={"/"}/>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={fadeIn(1)}
      animate={inView ? "visible" : "hidden"}
      className="flex items-center justify-center w-full min-h-screen"
    >
      <div className="w-80 max-w-xl h-80 flex items-center justify-center">
        <div className="flex flex-col">
          <h1 className="text-center border-b-2 font-semibold mb-2">
            Product Information
          </h1>
          <div className="flex justify-between border-b">
            <p>Brand </p>
            <p>{brand}</p>
          </div>
          <div className="flex justify-between border-b">
            <p>Category</p>
            <p>{category}</p>
          </div>
          <div className="flex justify-between border-b">
            <p>Price</p>
            <p>{price}</p>
          </div>
        </div>
        {image && <Image src={image} alt={brand} width={200} height={200} />}
      </div>
      <div className="flex flex-col text-5xl items-start justify-start w-full max-w-xl gap-5">
        <div className="underline">
          <h1>Perfect-Phone</h1>
        </div>
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
        <div className="flex justify-between items-center">
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
    </motion.div>
  );
}
