import { useInViewHook, useInViewHookSlow } from "@/hooks/inView";
import {
  fadeIn,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  smoothScale,
  underlineVariant,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const PerformanceVideo = () => {
  const { ref, inView } = useInViewHook();
  // const [isPlaying, setIsPlaying] = useState<boolean>(true);
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

  // const togglePlay = () => {
  //   if (videoRef.current) {
  //     if (isPlaying) {
  //       videoRef.current.pause();
  //     } else {
  //       videoRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };
  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className=" w-full min-h-screen  flex items-center justify-center mt-20"
      >
        <div className="flex flex-col items-center justify-center max-w-7xl w-full h-full relative ">
          <motion.div className="flex flex-col items-center justify-center">
            <motion.div variants={fadeIn(0.2)}>
              <div className="flex items-center justify-center">
                <motion.div
                  variants={underlineVariant(3)}
                  className="h-1 w-full bg-white rounded-xl "
                />
              </div>
              <Image
                src={"/img/Apple_chip.jpg"}
                alt={"Apple Chip image"}
                width={180}
                height={180}
                className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] "
              />
              <div className="flex items-center justify-center">
                <motion.div
                  variants={underlineVariant(3)}
                  className="h-1 w-full bg-white rounded-xl "
                />
              </div>
            </motion.div>
            <div className="text-white text-2xl  lg:text-5xl flex flex-col mt-8 mb-8">
              <motion.p variants={slideInFromLeft(0.5)} className="text-center">
                A17 Pro chip
              </motion.p>
              <motion.p variants={slideInFromLeft(0.5)} className="">
                A monster win for gaming.
              </motion.p>
            </div>
            <div className="text-xl  lg:text-3xl text-gray-500 flex flex-col">
              <motion.p variants={slideInFromRight(0.6)}>
                It’s here. The biggest redesign in{" "}
              </motion.p>
              <motion.p variants={slideInFromRight(0.6)}>
                the history of Apple GPUs.
              </motion.p>
            </div>
          </motion.div>

          <div
            className="flex flex-col items-center cursor-pointer
        justify-center overflow-hidden w-[450px] h-[220px] md:w-[750px] md:h-[350px] mt-16 relative"
          >
            <video
              ref={videoRef}
              src="/video/Honkai.mp4"
              muted
              className="w-[340px] h-[180px] md:w-[720px] md:h-[320px] rounded-3xl object-cover "
            />

            <Image
              src={"/img/Iphone-Model.png"}
              alt={""}
              width={800}
              height={516}
              className="absolute w-[350px] h-[190px] md:w-[770px] md:h-[350px] "
            />
          </div>
          <div
            className="flex justify-around items-center w-full max-w-3xl
         text-gray-500 text-center text-sm md:text-lg  mt-4 mb-16"
          >
            <h1 className="">Honkai: Star Rail</h1>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="hidden w-full max-w-2xl mx-auto h-full mb-36 md:flex items-center justify-around overflow-hidden"
      >
        <motion.div
          variants={slideInFromBottom(3)}
          className="flex flex-col w-80 gap-2 text-gray-500 text-xl"
        >
          <p>
            A17 Pro is an entirely new class of iPhone chip that delivers our
            best graphics performance by far.
          </p>
          <p>
            Mobile games will look and feel so immersive, with incredibly
            detailed environments and more realistic characters. And with
            industry-leading speed and efficiency, A17 Pro takes fast and runs
            with it.
          </p>
        </motion.div>
        <motion.div
          variants={slideInFromBottom(3)}
          className="flex flex-col items-start justify-start gap-2 text-gray-500 text-2xl h-64 "
        >
          <p>New</p>
          <h1 className="text-white font-semibold">Pro-class GPU</h1>
          <p>with 6 cores</p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default PerformanceVideo;
