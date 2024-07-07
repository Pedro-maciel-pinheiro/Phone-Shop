"use client";
import React, { useState, useRef, useEffect, use } from "react";
import { Play } from "lucide-react";
import { Pause } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./logo/Logo";

const PhoneVideo = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [videoWidth, setVideoWidth] = useState("w-[100vw]");

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const changeVideoWidth = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 150) {
        setVideoWidth("w-[88%]");
      } else if (scrollY >= 120) {
        setVideoWidth("w-[90%]");
        if (videoRef.current && isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      } else if (scrollY >= 40) {
        setVideoWidth("w-[95%]");
        if (videoRef.current && isPlaying) {
          videoRef.current.play();
          setIsPlaying(true);
        }
      } else {
        setVideoWidth("w-[100vw]");
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
    <div
      className={`relative z-10 max-w-[95vw] min-w-[350px] ${videoWidth} h-[550px] transition-all duration-1000`}
    >
      
      <div
        onClick={togglePlay}
        className="absolute z-10  w-full h-full transition-all duration-300
      flex items-end md:items-center  justify-end md:justify-center  text-white
       md:opacity-0 hover:opacity-100"
      >
       
        <div
          className="bg-black/50  
        rounded-full md:p-3 "
        >
          {isPlaying ? <Pause size={70} /> : <Play size={70} />}
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
