"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UserNavbar } from "@/components/derived/usernavbar";

export default function Dashboard() {

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")! || "{}");
    console.log("console. iser", storedUser);
    setName(storedUser.name);
    setEmail(storedUser.email); 
    setPaymentMethod(storedUser.paymentMethod);
    setPassword(storedUser.password);
    setNewPassword(storedUser.password);
    setStoredUser(storedUser);
  }, []);

  const [storedUser, setStoredUser] = useState<any>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [password, setPassword] = useState(""); 
  const [newPassword, setNewPassword] = useState(""); // For new password input
  const [confirmPassword, setConfirmPassword] = useState(""); // For password confirmation

  const saveProfile = () => {
    const updatedUser = { ...storedUser, name, email, paymentMethod };
    if (newPassword && newPassword === confirmPassword) {
      updatedUser.password = newPassword; // Update password if it's provided
    } else if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated!");
  };

  return (
    <div>
      <UserNavbar />
      <div className="container mx-auto my-2 p-3">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Dashboard
        </h1>


        <div className="mb-6 bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold">Your Details:</h2>
          <p>
            <span className="font-semibold">Name:</span> {name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {email}
          </p>
          <p>
            <span className="font-semibold">Payment Method:</span> {paymentMethod}
          </p>
        </div>


        <div className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>


          <div>
            <Label htmlFor="paymentMethod">Payment Method</Label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md"
            >
              <option value="" disabled>
                Select a payment method
              </option>
              <option value="GPay">GPay</option>
              <option value="PayPal">PayPal</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

    
          <div>
            <Label htmlFor="password">Current Password</Label>
            <Input
              id="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your current password"
            />
          </div>

          <div>
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
            />
          </div>

         
          <Button onClick={saveProfile}>Save Profile</Button>
        </div>
      </div>
    </div>
  );
}
