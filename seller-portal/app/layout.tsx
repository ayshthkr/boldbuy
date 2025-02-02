import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import TopLoader from "nextjs-toploader";
import ChatBox from "@/components/derived/chat-box";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BoldBuy",
  description: "Shopping at your fingertips",
  metadataBase: new URL('https://bold-buy.vercel.app'),
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
          {children}
          <ChatBox/>
      </body>
    </html>
  );
}
