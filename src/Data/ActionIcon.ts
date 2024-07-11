import { StaticImageData } from "next/image";
import {
  PersonStanding,
  SearchCheck,
  Languages,
  AudioLines,
  Flashlight,
  Camera,
  Moon,
  BellOff,
} from "lucide-react";

import SilentImg from "../assets/Action/screen_silent.jpg";
import FocusImg from "../assets/Action/screen_focus_.jpg";
import CameraImg from "../assets/Action/screen_camera.jpg";
import FlashImg from "../assets/Action/screen_flashlight.jpg";
import VoiceImg from "../assets/Action/screen_voice.jpg";
import TranslateImg from "../assets/Action/screen_translate.jpg";
import MagnifierImg from "../assets/Action/screen_magnifier.jpg";
import AccessibilityImg from "../assets/Action/screen_accessibility.jpg";

export interface ActionButtonsIconsProps {
  title: string;
  icon: React.ComponentType;
  bg: StaticImageData;
}

export const ActionButtonsIcons: ActionButtonsIconsProps[] = [
  {
    title: "SilentMode",
    icon: BellOff,
    bg: SilentImg,
  },

  {
    title: "Focus",
    icon: Moon,
    bg: FocusImg,
  },
  {
    title: "Camera",
    icon: Camera,
    bg: CameraImg,
  },
  {
    title: "Flashlight",
    icon: Flashlight,
    bg: FlashImg,
  },
  {
    title: "VoiceMemo",
    icon: AudioLines,
    bg: VoiceImg,
  },
  {
    title: "Translate",
    icon: Languages,
    bg: TranslateImg,
  },
  {
    title: "Magnifier",
    icon: SearchCheck,
    bg: MagnifierImg,
  },
  {
    title: "Accessibility",
    icon: PersonStanding,
    bg: AccessibilityImg,
  },
];
