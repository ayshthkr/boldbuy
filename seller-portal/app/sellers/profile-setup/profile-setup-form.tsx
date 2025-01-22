"use client";
import { useState } from "react";
import { ProfileForm } from "./profile-form";
import { KYCForm } from "./kyc-form";
import { DocumentUploadForm } from "./document-upload-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type FormData = {
  profile: any;
  kyc: any;
  documents: any;
};

type FormSection = keyof FormData;

export function ProfileSetupForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    profile: null,
    kyc: null,
    documents: null,
  });

  const updateFormData = (section: FormSection, data: any) => {
    setFormData((prev) => ({ ...prev, [section]: data }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Create a type-safe mapping of step numbers to form sections
  const stepToSection: Record<number, FormSection> = {
    1: "profile",
    2: "kyc",
    3: "documents",
  };

  return (
    <Card className="p-6 shadow-xl">
      <div className="mb-8">
        <div className="flex justify-around items-center mb-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                i <= step
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {i}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span className="w-full text-center">Profile</span>
          <span className="w-full text-center">KYC</span>
          <span className="w-full text-center">Documents</span>
        </div>
      </div>

      {step === 1 && (
        <ProfileForm
          initialData={formData.profile}
          onSubmit={(data) => {
            updateFormData("profile", data);
            nextStep();
          }}
        />
      )}
      {step === 2 && (
        <KYCForm
          initialData={formData.kyc}
          onSubmit={(data) => {
            updateFormData("kyc", data);
            nextStep();
          }}
        />
      )}
      {step === 3 && (
        <DocumentUploadForm
          initialData={formData.documents}
          onSubmit={(data) => {
            updateFormData("documents", data);
            // Here you would typically submit the entire form data to your backend
            console.log("Form submitted:", formData);
          }}
        />
      )}

      <div className="mt-8 flex justify-between gap-10">
        {step > 1 && (
          <Button onClick={prevStep} variant="outline" className="w-full">
            Previous
          </Button>
        )}
        {step < 3 && (
          <Button
            onClick={nextStep}
            disabled={!formData[stepToSection[step]]}
            variant="outline"
            className="w-full"
          >
            Next
          </Button>
        )}
      </div>
    </Card>
  );
}
