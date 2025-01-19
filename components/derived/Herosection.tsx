"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


const ShuffleHero = () => {
  return (
    <section className="w-full h-screen  px-8 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-8xl mx-auto">
      <div>

        <h3 className="text-4xl md:text-6xl font-semibold">
          Shop Smater and Faster
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Explore local markets and beyond with BoldBuy. Our platform offers a variety of products, fast deliveries, and great deals. From daily essentials to unique finds, enjoy a shopping experience designed for you.
        </p>
        <div className="flex gap-4">
          <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
            <Link href="/shop">start shopping now</Link>
          </button>
          <button className="border-indigo-500 border-2 text-black font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 hover:text-white active:scale-95">
            <Link href="/shop">explore our collections</Link>
          </button>
        </div>

      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: any) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [

  {
    id: 5,
    src: "https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Shopping-3.jpg",
  },
  {
    id: 6,
    src: "https://aispi.co/wp-content/uploads/2022/02/shopping1.jpeg",
  },
  {
    id: 7,
    src: "https://s3-eu-west-1.amazonaws.com/images.pxlpartner.ch/n250006927/orig/250058729.jpg",
  },
  {
    id: 8,
    src: "https://nmgprod.s3.amazonaws.com/media/files/8f/95/8f959c16f63aa9d4062b4147d508a91b/cover_image_1677176741.jpeg.760x400_q85_crop_upscale.jpg",
  },
  {
    id: 9,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69_qiY4J6cNcXZgkWRQ2N2GHO7IU0bat-Jw&s",
  },
  {
    id: 10,
    src: "https://www.gulshanone29.com/images/shops-banner-mobile.webp",
  },
  {
    id: 11,
    src: "https://img.freepik.com/free-vector/shopping-cart-with-bags-gifts-concept-illustration_114360-18775.jpg",
  },

  {
    id: 13,
    src: "https://www.pymnts.com/wp-content/uploads/2018/12/millennials-direct-to-consumer-furniture-shopping.jpg",
  },
  {
    id: 14,
    src: "https://images.woodenstreet.de/image/data/store%20page/new/noida/new/5.jpg",
  },
  {
    id: 15,
    src: "https://ourcitymarkets.com/wp-content/uploads/2021/07/ELECT-600x387.png",
  },
  {
    id: 16,
    src: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq: any) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 p-4">
      {squares.map((sq: any) => sq)}
    </div>
  );
};

export default ShuffleHero;
