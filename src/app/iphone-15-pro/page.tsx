"use client";
import React, { useEffect, useRef, useState } from "react";
import IphoneActionButtons from "@/app/iphone-15-pro/components/IphoneActionButtons";
import Image, { StaticImageData } from "next/image";
import SilentImg from "../../assets/Action/screen_silent.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { useInViewHook } from "@/hooks/inView";
import { ChevronRight } from "lucide-react";
import PerformanceVideo from "./components/PerformanceVideo";
import WelcomePage from "./components/WelcomePage";
import { underlineVariant } from "@/utils/motion";
import InsideVideo from "./components/InsidePhoneVideo";
import ImageCarousel from "./components/ImageCarousel";
import IphoneNavbar from "./components/IphoneNavbar";
import TitaniumSection from "./components/TitaniumSection";

export default function ShowCase() {
  const { ref, inView } = useInViewHook();

  const [bgImage, setBgImage] = useState<StaticImageData>(SilentImg);
  const [selectedTitle, setSelectedTitle] = useState<string>("SilentMode");
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <>
      <div>
        <IphoneNavbar />
      </div>
      <div id="iphone-15-pro">
        <div className="w-full h-1 bg-[#101010] " />
        <WelcomePage />
        <div className="w-full h-1 bg-[#101010] " />
      </div>
      <div id="Highlights" className="overflow-hidden">
        <InsideVideo />
      </div>
      <div id="Design">
        <div className="w-full h-1 bg-[#101010] " />
        <ImageCarousel />
        <div className="w-full h-1 bg-[#101010] " />
      </div>
      <div>
        <TitaniumSection />
      </div>
      <div className="bg-black w-full overflow-hidden " id="Performance">
        <PerformanceVideo />
        <div className="w-full h-1 bg-[#101010] mb-8" />
      </div>

      <div
        id="Action"
        className="bg-black relative z-10 text-white flex flex-col 
    items-center justify-center transition-all w-full overflow-hidden "
      >
        <AnimatePresence initial={false}>
          <motion.div
            ref={ref}
            className="mb-36 flex flex-col-reverse w-full h-full md:flex-row items-center justify-center overflow-hidden "
          >
            <div className="flex flex-col-reverse  md:flex-col gap-8 md:gap-0 relative mb-16">
              <div className="flex flex-col items-center justify-center">
                <span className="text-2xl md:text-4xl font-semibold mt-2 w-64 md:mb-8">
                  Get in on the Action button.
                </span>
                <span className="text-gray-500 w-64 md:w-74">
                  The all‑new Action button is
                  <p className="text-white">
                    a fast track to your favorite feature.
                  </p>
                  Once you set the one you want, just press and hold to launch
                  the action.
                </span>
              </div>

              <motion.div className="hidden md:flex items-center md:mt-6">
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={underlineVariant(1.5)}
                  className="border-b-2 w-[500px] hidden  md:block"
                />
                <ChevronRight />
              </motion.div>

              <div className="flex w-full ">
                <IphoneActionButtons
                  setBgImage={setBgImage}
                  selectedTitle={selectedTitle}
                  setSelectedTitle={setSelectedTitle}
                />
              </div>
            </div>

            <motion.div className="relative z-20  overflow-hidden  md:w-[360px] md:h-[800] flex items-center mt-4 justify-center ">
              <motion.img
                src={"/img/phonmodelMedium.png"}
                alt={""}
                width={358}
                height={748}
                className=" w-[330px] md:w-[358px] h-[748] absolute  z-10 mt-[2px]  overflow-hidden"
              />
              <motion.div
                key={bgImage.src}
                className="bg-no-repeat bg-[70%] md:bg-[82%] mt-[55px] md:mt-[12px] relative
                w-[330px] md:w-[358px] h-[700px] md:h-[750px] "
                style={{ backgroundImage: `url(${bgImage.src})` }}
                initial={"hidden"}
                animate={inView ? "visible" : "hidden"}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              />
              <Image
                src={"/img/gradient.png"}
                alt={""}
                width={350}
                height={758}
                className=" w-[330px] md:w-[358px] h-[758] mt-[70px]  bg-black/10 absolute z-30 "
              />
              {isVideoVisible && (
                <video
                  ref={videoRef}
                  src="/video/phoneShowCase.mp4"
                  className="absolute z-20 hidden md:block "
                  muted
                  onEnded={() => setIsVideoVisible(false)}
                />
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
