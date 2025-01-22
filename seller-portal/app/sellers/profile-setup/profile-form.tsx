"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type ProfileFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  businessName: string;
  businessDescription: string;
};

type ProfileFormProps = {
  initialData: ProfileFormData | null;
  onSubmit: (data: ProfileFormData) => void;
};

export function ProfileForm({ initialData, onSubmit }: ProfileFormProps) {
  const [formData, setFormData] = useState<ProfileFormData>(
    initialData || {
      name: "",
      email: "",
      phone: "",
      address: "",
      businessName: "",
      businessDescription: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">
          Full Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="placeholder:text-white invalid:[&:not(:placeholder-shown):not(:focus)]:border-destructive"
          required
        />
      </div>
      <div>
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="placeholder:text-white invalid:[&:not(:placeholder-shown):not(:focus)]:border-destructive"
          required
        />
      </div>
      <div>
        <Label htmlFor="phone">
          Phone Number (without country code){" "}
          <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
          className="placeholder:text-white invalid:[&:not(:placeholder-shown):not(:focus)]:border-destructive"
        />
      </div>
      <div>
        <Label htmlFor="address">
          Address <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="Enter your address"
          className="placeholder:text-white invalid:[&:not(:placeholder-shown):not(:focus)]:border-destructive"
        />
      </div>
      <div>
        <Label htmlFor="businessName">
          Business Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="businessName"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          required
          placeholder="Enter your business name"
          className="placeholder:text-white invalid:[&:not(:placeholder-shown):not(:focus)]:border-destructive"
        />
      </div>
      <div>
        <Label htmlFor="businessDescription">
          Business Description <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="businessDescription"
          name="businessDescription"
          value={formData.businessDescription}
          onChange={handleChange}
          required
          placeholder="Enter your business description"
          className="placeholder:text-white invalid:[&:not(:placeholder-shown):not(:focus)]:border-destructive"
        />
      </div>
      <Button type="submit" variant={"secondary"} className="w-full">
        Save and Continue
      </Button>
    </form>
  );
}
