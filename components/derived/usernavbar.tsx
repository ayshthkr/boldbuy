"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function UserNavbar() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");


    if (!user) {
      router.push("/auth");
    }
  }, [router]);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/">BoldBuy</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link href="/Orders">Orders</Link>
        </li>
      </ul>
    </nav>
  );
}
