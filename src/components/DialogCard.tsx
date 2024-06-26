"use client";
import { ServiceDataProps } from "@/constant";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface PhoneInfoProps {
  isOpen: boolean;
  closeModal: () => void;
  phoneInfo: ServiceDataProps | null;
}

const DialogCard = ({ isOpen, closeModal, phoneInfo }: PhoneInfoProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>
          <div className="fixed inset-0 ">
            <div className="flex min-h-full  items-center justify-center ">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-500"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-0 "
                leaveTo="opacity-0 "
              >
                <DialogPanel
                  className="relative w-full
               max-w-5xl max-h-[100vh] transform rounded-xl shadow-xl mx-3 md:mx-0
                bg-white transition-all flex flex-col gap-5 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-xl my-2 -mx-5 active:translate-y-1 transition-all
                      flex justify-end items-end w-full "
                  >
                    <X className="bg-gray-200 rounded-full" />
                  </button>
                  <div
                    className="w-full max-w-2xl mx-auto text-xl md:text-3xl  flex flex-col justify-start items-start
                    text-start  gap-2 "
                  > 
                    <p className="text-gray-500 text-lg md:text-xl">{phoneInfo?.title}</p>
                    <p className="w-80 font-semibold">{phoneInfo?.subtitle}</p>
                  </div>
                  <div
                    className="flex-1 flex flex-col items-center justify-center gap-3 
                  p-5 bg-slate-100 rounded-xl max-w-2xl mx-auto mb-5"
                  >
                    <div
                      className="relative font-semibold
                    w-full h-full rounded-xl text-xl flex flex-col gap-2"
                    >
                      <p className=" text-lg md:text-2xl">{phoneInfo?.firstLoremText}</p>
                      <p className="text-sm">{phoneInfo?.segundLoremText}</p>
                      
                    </div>
                    <div>
                      <Image
                        className="object-cover"
                        src={phoneInfo?.firstTextImage || ""}
                        alt=""
                        width={800}
                        height={800}
                      />
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DialogCard;
