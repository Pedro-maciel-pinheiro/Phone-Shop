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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (name.length < 4) {
      newErrors.name = "O nome deve ter no mínimo 4 caracteres";
    }

    if (secondName.length < 4) {
      newErrors.secondName = "O nome deve ter no mínimo 4 caracteres";
    }

    if (
      !validEmail(email) ||
      (!email.endsWith("gmail.com") && !email.endsWith("hotmail.com"))
    ) {
      newErrors.email =
        "Insira um email válido terminando com gmail.com ou hotmail.com";
    }

    if (!validPhone(phone)) {
      newErrors.phone = "O número de telefone deve ter exatamente 10 números";
    }

    if (Object.keys(newErrors).length === 0) {
      toast.success("Successfully toasted!");
      console.log("deu bom");
    } else {
      setErrors(newErrors);
      toast.error("algo deu errado");
      console.log("deu ruim");
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen w-full flex flex-col gap-3 items-center justify-center transition-all duration-200 mt-20 md:mt-0  mb-12 md:mb-0"
    >
      <motion.div variants={slideInFromLeft(0.8)}>
        <div className="flex flex-col  items-center justify-center text-center overflow-hidden ">
          <h1 className="text-xl md:text-3xl">RESERVE COM MAIS PRATICIDADE</h1>
          <h3 className="text-gray-600">
            Seu consultor exclusivo dentro da MLC Cruzeiros!
          </h3>
          <p className="text-pretty text-sm max-w-80 md:max-w-3xl mt-4 md:mt-12">
            Preencha o formulário abaixo e nossos consultores entrarão em
            contato para reservar sua viagem, com dicas, roteiros e orçamentos
            de acordo com o que você procura.
          </p>
        </div>
      </motion.div>
      <div className=" w-full max-w-xl  h-full flex flex-col  gap-4 px-4 mt-6 md:mt-12">
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col md:flex-row justify-around w-full  gap-3"
        >
          <div className=" md:max-w-sm items-center gap-1.5 w-full">
            <Label htmlFor="nome">Nome*</Label>
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
          <div className=" md:max-w-sm items-center gap-1.5 w-full">
            <Label htmlFor="sobrenome">Sobrenome*</Label>
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
          className="flex flex-col md:flex-row justify-around   gap-3"
        >
          <div className=" md:max-w-sm items-center gap-1.5 w-full">
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
          <div className=" md:max-w-sm items-center gap-1.5 w-full">
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
          <div>
            <p>Escolha um horário:</p>
          </div>
          <div className="flex flex-col md:flex-row  gap-3 w-full">
            <div className="w-full"></div>

            <div className="w-full">
              <p className="text-sm font-medium">Hora</p>
            </div>
          </div>
          <motion.div
            variants={slideInFromRight(1.5)}
            className="w-full  flex flex-col gap-4 mt-4"
          >
            <div className="flex gap-2 items-center">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Ou me ligue assim que possível</Label>
            </div>
            <div className="text-sm flex items-center gap-2">
              <Checkbox id="terms" />
              <p className="font-medium">Ao clicar em Enviar, aceito a </p>
              <p className="text-orange-400">Política de Privacidade</p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <p className="font-medium text-sm">
                Eu quero receber ofertas personalizadas e notícias
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={slideInFromBottom(1.6)}
          className="flex  justify-center w-full mt-4"
        >
          <Button
            onClick={handleSubmit}
            className="w-36 
           bg-orange-600 active:translate-x-1"
            type="submit"
          >
            Enviar
          </Button>
          <Toaster />
        </motion.div>
      </div>
    </motion.div>
  );
}
