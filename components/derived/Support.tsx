import React from "react";

const SupportSection = () => {
  const supportOptions = [
    {
      title: "Phone Support",
      description: "Available Mon-Fri, 9AM-6PM EST",
      details: "+1 (555) 123-4567",
    },
    {
      title: "Email Support",
      description: "24/7 response within 24 hours",
      details: "support@boldbuy.com",
    },
    {
      title: "Live Chat",
      description: "Available 24/7 for instant help",
      details: "Start Chat",
    },
  ];

  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-center">How can we help you?</h2>
      <p className="mt-2 text-center text-gray-600">
        Access our comprehensive support resources.
      </p>
      <div className="grid gap-6 mt-6 md:grid-cols-3">
        {supportOptions.map((option, index) => (
          <div key={index} className="p-6 bg-white rounded shadow-md">
            <h3 className="text-xl font-semibold">{option.title}</h3>
            <p className="mt-2 text-gray-600">{option.description}</p>
            <p className="mt-4 font-medium text-purple-600">{option.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportSection;
