

import Image1 from "../assets/img_1.jpg"
import Image2 from "../assets/img_2.jpg"
import Image3 from "../assets/img_3.jpg"
import Image4 from "../assets/img_4.jpg"
import Image5 from "../assets/img_5.jpg"
import Image6 from "../assets/img_6.jpg"
import PhoneWallpaper1 from "../assets/phone-wall.jpg"
import PhoneWallpaper2 from "../assets/phone-wall-2.png"
import PhoneWallpaper3 from "../assets/phone-wall-3.jpg"
import Privacy_img from "../assets/img_text_3.jpg"
import Safety_img from "../assets/img_safety.jpg"
import Innovation_img from "../assets/img_innovation.jpg"
import battery_img from "../assets/img_bettery.jpg"
import Personalizey_img from "../assets/img_personalize.jpg"
import Game_img from "../assets/img_game.jpg"



import { StaticImageData } from "next/image"


export interface ServiceDataProps{
    title:string
    subtitle:string
    backgroundImage:StaticImageData
    firstTextImage?:StaticImageData
    segundTextImage?:StaticImageData
    firstLoremText?:string
    segundLoremText?:string
}
export interface PhoneWallpaperProps{
    title:string
    subtitle:string
    backgroundImage:StaticImageData
}




export const ServiceData:ServiceDataProps[] = [
   
    {
        title:"Privacy",
        subtitle:"Your data. Just where you want it.",
        backgroundImage:Image1,
        firstLoremText:"Sign in safely.",
        segundLoremText:"Passkeys eliminate the need for passwords for an easier, more secure sign in method. With Face ID, you can sign in to apps. And AutoFill in Safari remembers user names and passwords for websites across your Apple devices.",
        firstTextImage:Privacy_img,
    },
    {
        title:"Peace of Mind",
        subtitle:"Helpful safety features. Just in case",
        backgroundImage:Image2,
        firstLoremText:"For urgent help.",
        segundLoremText:" Unique safety features allow iPhone to connect to satellite frequencies — so you can text emergency services or get roadside assistance when you don’t have cell service or Wi-Fi.7",
        firstTextImage:Safety_img,
       
    },
    {
        title:"Innovation",
        subtitle:"Beautiful and durable, by design.",
        backgroundImage:Image3,
        firstLoremText:"Second to none.",
        segundLoremText:"iPhone is known for its iconic design and premium materials — like iPhone 15 Pro, which is forged in titanium. On the brilliant display, Dynamic Island bubbles up important info so you don’t miss a beat.",
        firstTextImage:Innovation_img,
    },
    {
        title:"Battery",
        subtitle:"The power of great battery life.",
        backgroundImage:Image4,
        firstLoremText:"Long-lasting battery life? 100%.",
        segundLoremText:"hardware and software are designed to work together efficiently, so you can do more on a single charge — like watching up to 29 hours of video on iPhone 15 Pro Max.2",
        firstTextImage:battery_img,
    },
    {
        title:"Personalize Your iPhone",
        subtitle:"Make it you. Through and through.",
        backgroundImage:Image5,
        firstLoremText:"Photos. Fonts. Styles. Widgets. Go!",
        segundLoremText:"Style your Lock Screen in fun ways — layer a photo, finesse your font, add widgets, and more. You can also create a Contact Poster your friends will see when you call.",
        firstTextImage:Personalizey_img,
    },
    {
        title:"Apple-Designed Chips",
        subtitle:"The kind of fast you can feel.",
        backgroundImage:Image6,
        firstLoremText:"Game-changing chips.",
        segundLoremText:"Extremely smart and powerful, iPhone chips enhance everything you do. Take A17 Pro — which delivers our most advanced graphics performance by far — enabling games not seen before on any smartphone.",
        firstTextImage:Game_img,
    }


]



export const PhoneWallpaper:PhoneWallpaperProps[] =[
   {
    title:"phone info 1",
    subtitle:"sub info 1",
    backgroundImage:PhoneWallpaper1,
   },
   {
    title:"phone info 2",
    subtitle:"sub info 2",
    backgroundImage:PhoneWallpaper2,
   },
   {
    title:"phone info 3",
    subtitle:"sub info 3",
    backgroundImage:PhoneWallpaper3,
   },
]
