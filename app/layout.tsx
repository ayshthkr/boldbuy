import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import TopLoader from "nextjs-toploader";
import { CartProvider } from "./context/CartContext";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased`}
      >
        <TopLoader color="#5506FC" height={3} crawl />
        <CartProvider>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}
