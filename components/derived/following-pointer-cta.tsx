import Image from "next/image";
import { FollowerPointerCard } from "@/components/derived/following-pointer";
import Link from "next/link";

export function FollowingPointerCTA() {
  return (
    <div className="flex flex-col md:flex-row py-12 gap-4 justify-around bg-gradient-to-r from-fuchsia-600 to-purple-600 w-full">
      <div className="w-96 mx-auto px-12 md:px-0">
        <FollowerPointerCard
          title={
            <TitleComponent
              title={sellerContent.author}
              avatar={sellerContent.authorAvatar}
            />
          }
        >
          <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
            <div className="w-full aspect-video bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
              <Image
                src={sellerContent.image}
                alt="thumbnail"
                layout="fill"
                objectFit="cover"
                className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
              />
            </div>
            <div className=" p-4">
              <h2 className="font-bold my-4 text-lg text-zinc-700">
                {sellerContent.title}
              </h2>
              <h2 className="font-normal my-4 text-sm text-zinc-500">
                {sellerContent.description}
              </h2>
              <div className="flex flex-row justify-end items-center mt-10">
                <Link href={sellerContent.link} className="hover:cursor-none">
                    <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                      Read More
                    </div>
                </Link>
              </div>
            </div>
          </div>
        </FollowerPointerCard>
      </div>
      <div className="w-96 mx-auto px-12 md:px-0">
        <FollowerPointerCard
          title={
            <TitleComponent
              title={buyerContent.author}
              avatar={buyerContent.authorAvatar}
            />
          }
        >
          <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
            <div className="w-full aspect-video bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
              <Image
                src={buyerContent.image}
                alt="thumbnail"
                layout="fill"
                objectFit="cover"
                className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
              />
            </div>
            <div className=" p-4">
              <h2 className="font-bold my-4 text-lg text-zinc-700">
                {buyerContent.title}
              </h2>
              <h2 className="font-normal my-4 text-sm text-zinc-500">
                {buyerContent.description}
              </h2>
              <div className="flex flex-row justify-end items-center mt-10">
                <Link href={buyerContent.link} className="hover:cursor-none">
                    <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                      Read More
                    </div>
                </Link>
              </div>
            </div>
          </div>
        </FollowerPointerCard>
      </div>
    </div>
  );
}

const sellerContent = {
  slug: "seller-content",
  author: "Ayush Thakur",
  title: "Join as a seller",
  description: "Elevate your store with BoldBuy's all-in-one digital platform.",
  image: "/demo-main-page.png",
  authorAvatar: "/user-icon.png",
  link: "/sellers"
};

const buyerContent = {
  slug: "buyer-content",
  author: "Ayush Thakur",
  title: "Continue as a buyer",
  description:
    "Explore local markets and beyond with BoldBuy. Our platform offers a variety of products, fast deliveries, and great deals.",
  image: "/demo-shop.png",
  authorAvatar: "/user-icon.png",
  link: "/buyers"
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
