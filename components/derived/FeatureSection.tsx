import React from "react";
import Feature from "./Feature";

const FeatureSection = () => {
  const features = [
    {
      title: "Unified Digital Platform",
      description: "Integrates local sellers into the digital economy seamlessly.",
    },
    {
      title: "SaaS-based POS System",
      description: "Helps sellers manage inventory, payments, and operations efficiently.",
    },
  ];

  return (
    <section className="grid gap-6 p-8 bg-gray-50 md:grid-cols-2">
      {features.map((feature, index) => (
        <Feature
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default FeatureSection;
