"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ServiceData } from "@/constant/data";
import Image from "next/image";
import DialogCard from "@/components/DialogCard";
import { Plus, X } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";


export default function ActiveSlider({ onItemClick }: any) {
  const handleClick = (item: any) => {
    onItemClick(item);
  };
  return (
    <Swiper
      navigation={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={2500}
     
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 25,
        },
      }}
      modules={[Autoplay, Navigation]}
      className="w-[100%] md:max-w-[80%] "
    >
      {ServiceData.map((item) => (
        <SwiperSlide key={item.title}>
          <div className="flex flex-col gap-4 relative rounded-badge shadow-xl mb-20 mx-4 md:mx-0" >
            <div className="absolute text-white w-52 flex flex-col gap-2 p-6 md:p-4">
              <p className="text-lg text-gray-200"> {item.title}</p>
              <p className="text-xl font-semibold"> {item.subtitle}</p>
            </div>
            <Image
              onClick={() => handleClick(item)}
              src={item.backgroundImage}
              width={450}
              height={450}
              alt=""
              className="block object-cover mx-auto
              rounded-badge shadow-xl shadow-black/30"
            />
            <button className="absolute w-full h-full flex justify-end items-end p-5"
            onClick={() => handleClick(item)}>
              <Plus className="text-gray-700 hover:translate-y-1 transition-all
               bg-white rounded-full active:-translate-y-1"/>
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
