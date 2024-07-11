
import { Pause, Play } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

const PerformanceVideo = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <>
      <div className=" w-full min-h-screen  flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center max-w-7xl w-full h-full relative ">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/img/Apple_chip.jpg"}
              alt={"Apple Chip image"}
              width={180}
              height={180}
              className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] "
            />
            <div className="text-white text-2xl  lg:text-5xl flex flex-col mt-8 mb-8">
              <p className="text-center">A17 Pro chip</p>
              <p className="">A monster win for gaming.</p>
            </div>
            <div className="text-xl  lg:text-3xl text-gray-500 flex flex-col">
              <p>It’s here. The biggest redesign in </p>
              <p>the history of Apple GPUs.</p>
            </div>
          </div>

          <div
            onClick={togglePlay}
            className="flex flex-col items-center cursor-pointer
        justify-center overflow-hidden w-[450px] h-[220px] md:w-[750px] md:h-[350px] mt-16 relative"
          >
            <video
              ref={videoRef}
              src="/video/Honkai.mp4"
              autoPlay
              loop
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
            <div
              className="absolute opacity-0 bg-white/50 rounded-full p-2
          hover:opacity-100 transition-all duration-700"
            >
              {isPlaying ? <Play size={35} /> : <Pause size={35} />}
            </div>
          </div>
          <div
            className="flex justify-around items-center w-full max-w-3xl
         text-gray-500 text-center text-sm md:text-lg  mt-4 mb-16"
          >
            <h1 className="">Honkai: Star Rail</h1>
            <p className="hidden md:block">Click on screen to pause</p>
            <p className="block md:hidden">Touch on screen to pause</p>
          </div>
        </div>
        
      </div>

      
      
    </>
  );
};

export default PerformanceVideo;
