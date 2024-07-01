import React from "react";
import Image from "next/image";
import {  PhoneWallpaperProps } from "@/constant/data";
import { Autoplay, EffectFade,Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

interface ImageHolderProps{
    DataHolder:any
}



const PhoneSlider = ({DataHolder}:ImageHolderProps) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        navigation={true}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        
        modules={[Navigation, Autoplay, EffectFade]}
        className="w-full max-w-[80%] rounded-xl h-[500px]   "
      >
        {DataHolder.map((item:any) => (
          <SwiperSlide key={item.title}>
            <Image
              src={item.backgroundImage}
              alt={item.title}
              width={1920}
              height={1020}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhoneSlider;
