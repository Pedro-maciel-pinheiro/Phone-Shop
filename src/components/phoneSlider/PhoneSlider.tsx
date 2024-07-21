import React from "react";
import Image from "next/image";
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
        navigation={false}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        
        modules={[Navigation, Autoplay, EffectFade]}
        className="w-full max-w-[80%] rounded-xl  md:h-[500px] object-cover "
      >
        {DataHolder.map((item:any) => (
          <SwiperSlide key={item.title} >
            <Image
              src={item.backgroundImage}
              alt={item.title}
              width={1920}
              height={1020}
              className="rounded-xl  max-w-[400px] max-h-[200px] 
              md:max-w-full md:max-h-[1020px]"
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhoneSlider;
