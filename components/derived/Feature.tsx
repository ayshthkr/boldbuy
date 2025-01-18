import React from "react";

type FeatureProps = {
  title: string;
  description: string;
};

const Feature = ({ title, description }: FeatureProps) => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default Feature;
