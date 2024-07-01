import Products from "@/components/products/products";
import Hero from "./hero/page";
import Contact from "../components/slider/Slider";
import { getPhoneData } from "@/helper";
import { ProductsProps } from "@/types/types";
import TextCard from "@/components/text/TextCard";

export default async function Home() {
  const products: ProductsProps[] = await getPhoneData();
  const limitedProducts = products.slice(0, 6);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <Hero />
      <Contact />

      <div className="mb-96 mt-16 w-[80%] ">
        <TextCard/>
        <Products
          products={limitedProducts}
          linkBasePath={"/singleproduct"}
          Style={""}
        />
      </div>
    </main>
  );
}
