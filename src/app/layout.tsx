import type { Metadata } from "next";
import { Roboto  } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });


export const metadata: Metadata = {
  title: "Perfect-Phone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
