"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInFromBottom,
} from "@/utils/motion";

const validEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validPhone = (phone: any) => {
  const phoneRegex = /^\d{11}$/;
  return phoneRegex.test(phone);
};

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [messageSent, setMessageSent] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (name.length < 4) {
      newErrors.name = "The name must have at least 4 characters";
    }

    if (secondName.length < 4) {
      newErrors.secondName = "The surname must have at least 4 characters";
    }

    if (
      !validEmail(email) ||
      (!email.endsWith("gmail.com") && !email.endsWith("hotmail.com"))
    ) {
      newErrors.email =
        "Enter a valid email ending with gmail.com or hotmail.com";
    }

    if (!validPhone(phone)) {
      newErrors.phone = "The phone number must have exactly 11 digits";
    }

    if (Object.keys(newErrors).length === 0) {
      toast.success("Successfully submitted!");
      setMessageSent(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      setErrors(newErrors);
      toast.error("Something went wrong");
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen w-[320px] md:w-full md:-end-full mx-auto
      flex flex-col gap-3 items-center justify-center 
      mt-0 md:mt-0  mb-12 md:mb-0"
    >
      <motion.div variants={slideInFromLeft(0.8)}>
        <div className="flex flex-col items-center 
        justify-center text-center overflow-hidden">
          <h1 className="text-xl md:text-3xl">CONTACT US EASILY</h1>
          <h3 className="text-gray-600">Your exclusive consultant at Perfect Phone!</h3>
          <p className="text-pretty text-sm max-w-80 md:max-w-3xl mt-4 md:mt-12">
            Fill out the form below and our consultants will get in touch to assist you with your purchase, providing tips, product recommendations, and quotes according to your needs.
          </p>
        </div>
      </motion.div>
      <div className="w-full max-w-xl h-full flex flex-col gap-4 px-4 mt-6 md:mt-12">
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col md:flex-row justify-around w-full gap-3"
        >
          <div className="md:max-w-sm items-center gap-1.5 w-full">
            <Label htmlFor="name">First Name*</Label>
            <Input
              className="bg-slate-50"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="md:max-w-sm items-center gap-1.5 w-full">
            <Label htmlFor="secondName">Last Name*</Label>
            <Input
              className="bg-slate-50"
              type="text"
              id="secondName"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
              required
            />
            {errors.secondName && (
              <p className="text-red-500">{errors.secondName}</p>
            )}
          </div>
        </motion.div>
        <motion.div
          variants={slideInFromRight(1.2)}
          className="flex flex-col md:flex-row justify-around gap-3"
        >
          <div className="md:max-w-sm items-center gap-1.5 w-full">
            <Label htmlFor="email">Email*</Label>
            <Input
              className="bg-slate-50"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="md:max-w-sm items-center gap-1.5 w-full">
            <Label htmlFor="phone">Phone*</Label>
            <Input
              className="bg-slate-50"
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              minLength={11}
              maxLength={11}
              required
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(1.4)}
          className="flex flex-col justify-around w-full gap-3 mt-6 md:mt-2"
        >
          <motion.div
            variants={slideInFromRight(1.5)}
            className="w-full flex flex-col gap-4 mt-4"
          >
            <div className="text-[11px] md:text-sm flex items-center gap-2">
              <Checkbox id="terms" />
              <p className="font-medium">By clicking Send, I accept the </p>
              <p className="text-blue-400">Privacy Policy</p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <p className="font-medium text-[11px] md:text-sm">
                I want to receive personalized offers and news
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={slideInFromBottom(1.6)}
          className="flex flex-col items-center justify-center w-full mt-4"
        >
          <Button
            onClick={handleSubmit}
            className="w-36 transition-all active:translate-x-1"
            type="submit"
          >
            Send
          </Button>
          {messageSent && (
            <p className="mt-4 text-green-500">Message was sent!</p>
          )}
          <Toaster />
        </motion.div>
      </div>
    </motion.div>
  );
}
