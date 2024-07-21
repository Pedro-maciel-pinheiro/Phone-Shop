import Hero from "./hero/page";
import Contact from "../components/slider/Slider";
import { getPhoneData } from "@/helper";
import { ProductsProps } from "@/types/types";
import TextCard from "@/components/text/TextCard";
import ProductsList from "./hero/ProductsList";
import Accordion from "@/components/Accordion";
import SpecialProducts from "@/components/SpecialProducts";


export default async function Home() {
  const products: ProductsProps[] = await getPhoneData();
  const limitedProducts = products.slice(0, 6);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      
      <Hero />
      <Contact />
      <div className=" mt-20 w-[80%] ">
        <TextCard />
        {/* <SpecialProducts/> */}
        <ProductsList ApiData={limitedProducts} />
      </div>
      <div className="flex w-full h-screen items-center justify-center">
        <Accordion />
      </div>
    </main>
  );
}
