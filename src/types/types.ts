export interface Product {
    brand: any;
    id: string;
    price: number;
    previousPrice: number;
    description: string;
    // other properties...
  }
  
  export interface ProductsProps {
    products: Product[];
    linkBasePath: string;
  }
  

  // types.ts
export interface ProductsProps {
  _id: number;
  title: string;
  price: number;
  previousPrice: number;
  description: string;
  category: string;
  image: string;
  isNew: boolean;
  brand: string;
  quantity: number;
  link: string;
}
