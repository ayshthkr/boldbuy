import { Metadata } from "next";
import { OrdersTable } from "./orders-table";
import { Footer } from "@/components/derived/footer";

export const metadata: Metadata = {
  title: "Order Tracking - BoldBuy",
  description: "Track and manage orders across all stores on BoldBuy",
};

export default function OrderTrackingPage() {
  return (
    <div className="min-h-screen bg-gray-50 w-full items-center justify-center">
      <main className="container mx-auto px-4 py-28">
        <h1 className="text-3xl font-bold mb-6">Order Tracking</h1>
        <OrdersTable />
      </main>
      <Footer />
    </div>
  );
}
