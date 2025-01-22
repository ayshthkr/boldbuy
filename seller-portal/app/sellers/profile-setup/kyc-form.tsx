"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type KYCFormData = {
  gst: string;
  pan: string;
  bankAccount: string;
  ifsc: string;
};

type KYCFormProps = {
  initialData: KYCFormData | null;
  onSubmit: (data: KYCFormData) => void;
};

export function KYCForm({ initialData, onSubmit }: KYCFormProps) {
  const [formData, setFormData] = useState<KYCFormData>(
    initialData || {
      gst: "",
      pan: "",
      bankAccount: "",
      ifsc: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <Label htmlFor="gst">GST Number</Label>
        <Input
          id="gst"
          name="gst"
          value={formData.gst}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="pan">PAN Number</Label>
        <Input
          id="pan"
          name="pan"
          value={formData.pan}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="bankAccount">Bank Account Number</Label>
        <Input
          id="bankAccount"
          name="bankAccount"
          value={formData.bankAccount}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="ifsc">IFSC Code</Label>
        <Input
          id="ifsc"
          name="ifsc"
          value={formData.ifsc}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Save and Continue
      </Button>
    </form>
  );
}
