import { usePathname } from "next/navigation";

export interface Product {
  brand: any;
  id: string;
  price: number;
  previousPrice: number;
  description: string;
}

export interface ProductsProps {
  products: Product[];
  linkBasePath: string;
  ApiData: Product[];
}

export interface BorderLineProps {
  pageNumber: number;
  title: string;
}

export interface ProductsListProps {
  ApiData: ProductsProps[];
}

export interface LogoProps {
  textStyle: string;
  underlineDelay: number;
  underlineWidth: string;
  flexStyle: string;
}

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
