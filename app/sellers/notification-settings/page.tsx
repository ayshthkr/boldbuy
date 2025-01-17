import { Metadata } from "next";
import { NotificationSettings } from "./notification-settings";
import { Navbar } from "@/components/derived/navbar";
import { Footer } from "@/components/derived/footer";

export const metadata: Metadata = {
  title: "Notification Preferences - BoldBuy",
  description: "Manage your notification preferences for BoldBuy",
};

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Notification Preferences</h1>
          <p className="text-gray-600 mb-8">
            Choose how you want to receive updates and notifications from
            BoldBuy
          </p>
          <NotificationSettings />
        </div>
      </main>
      <Footer />
    </div>
  );
}
