import { Metadata } from "next";
import { StoreList } from "./store-list";
import { AddStoreButton } from "./add-store-button";
import { Footer } from "@/components/derived/footer";

export const metadata: Metadata = {
  title: "Store Management - BoldBuy",
  description: "Manage your stores on BoldBuy",
};

export default function StoresPage() {
  return (
    <div className="w-full items-center justify-center">
      <div className="min-h-[70vh] bg-gray-50">
        <main className="container mx-auto px-4 py-28">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Your Stores</h1>
              <p className="text-gray-600 mt-1">
                Manage all your retail locations in one place
              </p>
            </div>
            <AddStoreButton />
          </div>
          <StoreList />
        </main>
      </div>
      <Footer />
    </div>
  );
}
