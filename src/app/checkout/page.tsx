"use client";
import MaskButton from "@/components/MaskButton";
import { fadeIn, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function CheckOut() {
  const searchParams = useSearchParams();
  let price = searchParams.get("price");
  let category = searchParams.get("category");
  let brand: any = searchParams.get("brand");
  let image: any = searchParams.get("image");
  let id = searchParams.get("id");

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.8;

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleSendMessage = () => {
    const message = `Contact Information:\nEmail: ${email}\n\nShipping Address:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nAddress: ${address}\nCity: ${city}\nState: ${state}\nZip: ${zip}\n\nProduct Information:\nId: ${id}\nBrand: ${brand}\nCategory: ${category}\nPrice: ${price}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "556198516239";
    window.open(
      `http://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={fadeIn(1)}
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: animationDelay }}
      className="flex  items-center justify-center w-full min-h-screen"
    >
      <div
        className="w-80 max-w-xl h-80 flex 
      items-center justify-center "
      >
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
        <Image src={image} alt={brand} width={200} height={200} />
      </div>
      <div className="flex flex-col text-5xl items-start justify-start w-full max-w-xl gap-5">
        <div className="underline">
          <h1>Perfect-Phone</h1>
        </div>
        <div className="flex flex-col w-full max-w-xl gap-4 border-2 shadow-xl rounded-xl p-5">
          <div className="text-xl font-semibold">
            <h1>Contact Information</h1>
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="input input-bordered  w-full active:bg-gray-100
             bg-white focus:bg-gray-100"
          />
          <div className="text-xl font-semibold">
            <h1>Shipping address</h1>
          </div>
          <div className="flex gap-2">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First name"
              className="input input-bordered w-full bg-white focus:bg-gray-100"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last name"
              className="input input-bordered w-full bg-white focus:bg-gray-100"
            />
          </div>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Address"
            className="input input-bordered w-full  bg-white focus:bg-gray-100"
          />
          <div className="flex gap-2">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="City"
              className="input input-bordered w-full  bg-white focus:bg-gray-100"
            />
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              type="text"
              placeholder="State"
              className="input input-bordered w-full  bg-white focus:bg-gray-100"
            />
            <input
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              type="text"
              placeholder="Zip"
              className="input input-bordered w-full bg-white focus:bg-gray-100"
            />
          </div>
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
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
