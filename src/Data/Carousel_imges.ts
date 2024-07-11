import IphoneAllColors from "../assets/Colors/all_colors.jpg";
import IphoneNatural from "../assets/Colors/natural_titanium.jpg";
import IphoneBlue from "../assets/Colors/blue_titanium.jpg";
import IphoneWhite from "../assets/Colors/white_titanium.jpg";
import IphoneBlack from "../assets/Colors/black_titanium.jpg";
import { StaticImageData } from "next/image";





export interface ImageCarouselProps {
    color:string
    imageData:string | StaticImageData
    alt:string
    width:number
    height:number
    label:string
  }
  
  
  export const ImageCarouselData:ImageCarouselProps[] = [
    {
      color:"bg-gray-500",
      imageData:IphoneAllColors ,
      alt:'All Colors', 
      width: 547,
      height: 468, 
      label:'All Colors', 
      
    },
    {
      color:"bg-yellow-200/60",
      imageData:IphoneNatural,
      alt:"Natural Titanium",
      width:258,
      height:470,
      label:"Natural Titanium"
    },
    {
      color:"bg-blue-500",
      imageData:IphoneBlue,
      alt:"Blue Titanium",
      width:258,
      height:470,
      label:"Blue Titanium"
    },
    {
      color:"bg-white/90",
      imageData:IphoneWhite,
      alt:"White Titanium",
      width:258,
      height:470,
      label:"White Titanium"
    },
    {
      color:"bg-black/90",
      imageData:IphoneBlack ,
      alt:"Black Titanium",
      width:258,
      height:470,
      label:"Black Titanium"
    },
  ]
  