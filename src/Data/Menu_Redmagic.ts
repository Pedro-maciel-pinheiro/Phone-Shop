import PerformanceImg from "../assets/Redmagic/perfor.png";
import ColdImg from "../assets/Redmagic/cold.webp";
import ResistenceImg from "../assets/Redmagic/resistence.webp";
import HighscreenImg from "../assets/Redmagic/highscreen.webp";
import CamImg from "../assets/Redmagic/cam.webp";
import SoundImg from "../assets/Redmagic/sound.webp";
import GameImg from "../assets/Redmagic/game.webp";

import { StaticImageData } from "next/image";

interface MenuRedmagicProps {
  title: string;
  image: string | StaticImageData;
  grid?: string;
}

export const MenuRedmagic: MenuRedmagicProps[] = [
  {
    title: "5th generation screen ingenuity",
    image: HighscreenImg,
    
  },
  {
    title: "The coldest competitor",
    image: ColdImg,
    grid: "col-span-1 row-span-1",
  },
  {
    title: "First class resistance",
    image: ResistenceImg,
  },
  {
    title: "A new standard of performance",
    image: PerformanceImg,
    grid: "col-span-1 row-span-1",
  },
  {
    title: "Our first optical anti-shake camera",
    image: CamImg,
  },
  {
    title: "Audio that brings the images to life",
    image: SoundImg,
    
  },
];
