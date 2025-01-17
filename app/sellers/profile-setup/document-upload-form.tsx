"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type DocumentUploadFormData = {
  gstCertificate: File | null;
  panCard: File | null;
  bankStatement: File | null;
};

type DocumentUploadFormProps = {
  initialData: DocumentUploadFormData | null;
  onSubmit: (data: DocumentUploadFormData) => void;
};

export function DocumentUploadForm({
  initialData,
  onSubmit,
}: DocumentUploadFormProps) {
  const [formData, setFormData] = useState<DocumentUploadFormData>(
    initialData || {
      gstCertificate: null,
      panCard: null,
      bankStatement: null,
    }
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="gstCertificate">GST Certificate</Label>
        <Input
          id="gstCertificate"
          name="gstCertificate"
          type="file"
          onChange={handleFileChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="panCard">PAN Card</Label>
        <Input
          id="panCard"
          name="panCard"
          type="file"
          onChange={handleFileChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="bankStatement">Bank Statement</Label>
        <Input
          id="bankStatement"
          name="bankStatement"
          type="file"
          onChange={handleFileChange}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Complete Profile Setup
      </Button>
    </form>
  );
}
