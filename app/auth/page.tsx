import { Metadata } from "next";
import { AuthForm } from "./auth-form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login - BoldBuy",
  description: "Log in or sign up to your BoldBuy seller account.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-4xl font-extrabold text-primary">
              Welcome to{" "}
              <Link href="/" className="hover:underline decoration-primary">
                BoldBuy
              </Link>
            </h2>
            <p className="mt-2 text-base text-primary">
              Log in or create an account to manage your business
            </p>
          </div>
          <AuthForm />
        </div>
      </main>
    </div>
  );
}
