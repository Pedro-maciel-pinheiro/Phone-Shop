import React, { useRef } from "react";
import { ActionButtonsIcons } from "@/Data/ActionIcon";
import { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IphoneActionButtonsProps {
  setBgImage: React.Dispatch<React.SetStateAction<StaticImageData>>;
  selectedTitle: string;
  setSelectedTitle: React.Dispatch<React.SetStateAction<string>>;
}

const IphoneActionButtons: React.FC<IphoneActionButtonsProps> = ({
  setBgImage,
  selectedTitle,
  setSelectedTitle,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[500px] h-full   overflow-hidden relative mt-10 md:mt-0">
      <div className="w-72 md:w-full h-20 md:h-[450px] z-20 absolute md:relative ">
        <div
          ref={scrollContainerRef}
          className="flex flex-row mx-4 md:mx-0 md:flex-col w-64 md:w-full h-20 md:h-full  gap-4 md:gap-0 overflow-hidden md:overflow-visible "
        >
          {ActionButtonsIcons.map((button, index) => (
            <div
              key={index}
              className={`flex items-center justify-center gap-3 md:mb-2  cursor-pointer active:translate-y-1   md:px-2 md:py-1 md:w-44 ${
                selectedTitle === button.title ? 
                "text-white md:border-2 md:rounded-full  " 
                : 
                "text-gray-400  md:hover:bg-stone-900  md:rounded-full"
              }`}
              onClick={() => {
                setBgImage(button.bg);
                setSelectedTitle(button.title);
              }}
            >
              
              <span className="text-xl w-full flex items-center justify-start text-center gap-1 md:gap-3 font-bold ">
              <button.icon /> {button.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden flex justify-between items-center relative w-[360px]">
        <button className="border-r " onClick={scrollLeft}>
          <ChevronLeft
            className="active:-translate-x-2 transition-all"
            size={45}
          />
        </button>
        <button className="border-l" onClick={scrollRight}>
          <ChevronRight
            size={45}
            className="active:translate-x-2 transition-all"
          />
        </button>
      </div>
    </div>
  );
};

export default IphoneActionButtons;
