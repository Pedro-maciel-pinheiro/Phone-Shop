"use client";
import React, { useState, useRef, useEffect, use } from "react";
import { Play } from "lucide-react";
import { Pause } from "lucide-react";
import { motion } from "framer-motion";

const PhoneVideo = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [videoWidth , setVideoWidth] = useState("w-[100vw]")
  const [videoScroll, setVideoScroll] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const changeVideoWidth = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 150) {
        setVideoWidth("w-[88%]");
      } else if (scrollY >= 120) {
        setVideoWidth("w-[90%]");
      } else if (scrollY >= 40) {
        setVideoWidth("w-[95%]");
      } else {
        setVideoWidth("w-[98vw]");
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeVideoWidth);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeVideoWidth);
      }
    };
  }, []);

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
    <div className={`relative z-10 ${videoWidth} h-[550px] transition-all duration-1000` }
    
    >
      <p className="text-lg md:text-xl lg:text-4xl underline mb-2">
        Perfect-Phone
      </p>

      <div
        onClick={togglePlay}
        className="absolute z-10  w-full h-full transition-all duration-300
      flex items-center  justify-center  text-white
       md:opacity-0 hover:opacity-100"
      >
        <div
          className="bg-black/50  
        rounded-full p-5 "
        >
          {isPlaying ? <Pause size={90} /> : <Play size={90} />}
        </div>
      </div>

      <video
        ref={videoRef}
        className="w-full h-full object-cover border rounded-xl shadow-xl shadow-black/50 "
        src={"/video/phone.mp4"}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default PhoneVideo;
