import RedMagicWhiteBack from "../assets/Redmagic/09_white.webp";
import RedMagicWhite from "../assets/Redmagic/09_white_2.webp";
import SnowIcon from "../assets/Redmagic/icon/snow.webp";

import RedMagicGoldBack from "../assets/Redmagic//09_gold.webp";
import RedMagicGold from "../assets/Redmagic/09_gold_2.webp";
import ClycloneIcon from "../assets/Redmagic/icon/clyclone.webp";

import RedMagicBlackBack from "../assets/Redmagic/09_black.webp";
import RedMagicBlack from "../assets/Redmagic/09_black_2.webp";
import SleetIcon from "../assets/Redmagic/icon/sleet.webp";

import { StaticImageData } from "next/image";

export interface RedMagicProps {
  color: string;
  frontImg: string | StaticImageData;
  backImg: string | StaticImageData;
  alt: string;
  ram: string;
  label: string;
  color_icon: string | StaticImageData;
}

export const RedMagicData: RedMagicProps[] = [
  {
    color: "bg-white/90",
    frontImg: RedMagicWhiteBack,
    backImg: RedMagicWhite,
    alt: "Snowfall",
    ram: "16+512GB",
    label: "Snowfall",
    color_icon: SnowIcon,
  },
  {
    color: "bg-gradient-to-r from-black to-gold",
    frontImg: RedMagicGoldBack,
    backImg: RedMagicGold,
    alt: "Cyclone",
    ram: "16+512GB",
    label: "Cyclone",
    color_icon: ClycloneIcon,
  },
  {
    color: "bg-gray-700",
    frontImg: RedMagicBlackBack,
    backImg: RedMagicBlack,
    alt: "Sleet",
    ram: "12+256GB",
    label: "Sleet",
    color_icon: SleetIcon,
  },
];
