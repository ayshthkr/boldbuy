"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import { MessageLoading } from "@/components/derived/loading";

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Only used for sign-up
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (isLogin) {
      // Check if user is in localStorage for login
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

      if (
        storedUser.email === email &&
        storedUser.password === password
      ) {
        setIsLoading(false);
        router.push("/sellers/profile-setup");
      } else {
        setIsLoading(false);
        alert("Invalid credentials!");
      }
    } else {
      // Handle sign-up (store the new user data)
      const newUser = { name, email, password };

      // Save the user to localStorage
      localStorage.setItem("user", JSON.stringify(newUser));

      setIsLoading(false);
      router.push("/sellers/profile-setup");
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl">
      <form onSubmit={onSubmit} className="space-y-6">
        {!isLogin && (
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            className="placeholder:text-white invalid:[&:not(:placeholder-shown):not(:focus)]:border-destructive"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <MessageLoading />
              Please wait
            </>
          ) : isLogin ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button variant="outline" onClick={() => { }} disabled={isLoading}>
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button variant="outline" onClick={() => { }} disabled={isLoading}>
            <Icons.facebook className="mr-2 h-4 w-4" />
            Facebook
          </Button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Button
          variant="link"
          onClick={() => setIsLogin(!isLogin)}
          className="text-sm"
        >
          {isLogin
            ? "Need an account? Sign Up"
            : "Already have an account? Sign In"}
        </Button>
      </div>
    </div>
  );
}
