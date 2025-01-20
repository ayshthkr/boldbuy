import { Metadata } from "next";
import { ComplaintList } from "./complaint-list";
import { Footer } from "@/components/derived/footer";

export const metadata: Metadata = {
  title: "Complaint Management - BoldBuy",
  description: "Manage and address customer complaints on BoldBuy",
};

export default function ComplaintManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50 w-full items-center justify-center">
      <main className="container mx-auto px-4 py-28">
        <h1 className="text-3xl font-bold mb-6">Complaint Management</h1>
        <ComplaintList />
      </main>
      <Footer />
    </div>
  );
}
