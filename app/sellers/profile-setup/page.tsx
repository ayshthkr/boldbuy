import { Metadata } from "next";
import { ProfileSetupForm } from "./profile-setup-form";
import { Footer } from "@/components/derived/footer";
import { Navbar } from "@/components/derived/navbar";

export const metadata: Metadata = {
  title: "Profile Setup - BoldBuy",
  description: "Set up your seller profile on BoldBuy",
};

export default function ProfileSetupPage() {
  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <main className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Set Up Your Seller Profile in 3 Easy Steps
          </h1>
          <ProfileSetupForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
