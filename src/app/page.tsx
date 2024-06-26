import Products from "@/components/products/page";
import Hero from "./hero/page";
import Contact from "../components/slider/Slider";

const getData = async () =>{
  const res = await fetch("https://jsonserver.reactbd.com/phone")
  if(!res.ok){
    throw new Error("Failed to fetch data")
  }
  return res.json()
}



export default async function Home() {
  const products = await getData()
  const limitedProducts = products.slice(0, 6);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full ">
      <Hero />
      <Contact/>
      <Products products={limitedProducts} linkBasePath={"/singleproduct"}/>
    </main>
  );
}
