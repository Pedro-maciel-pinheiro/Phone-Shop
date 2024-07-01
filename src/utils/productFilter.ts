
import { getPhoneData } from "@/helper/index";

export const getApiList = async (setProductList: (products: any[]) => void, setFilteredProducts: (products: any[]) => void) => {
  try {
    let result: any = await getPhoneData();
    result = result.sort((a: any, b: any) => a.brand.localeCompare(b.brand));
    setProductList(result);
    setFilteredProducts(result);
  } catch (error) {
    console.error("Error fetching product list:", error);
  }
};

export const filterProductList = (brand: string, productList: any[], setFilteredProducts: (products: any[]) => void) => {
  if (brand === "optionDefault") {
    setFilteredProducts(productList);
  } else {
    const filtered = productList.filter(
      (product: any) => product.brand === brand
    );
    setFilteredProducts(filtered);
  }
};
