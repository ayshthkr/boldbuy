import { cn } from "@/lib/utils";
import { BoxesIcon, ChartLineIcon, ComputerIcon, FileAxis3DIcon, FileClockIcon, HeartHandshakeIcon, LayersIcon, SquareStackIcon } from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Easy Onboarding",
      description:
        "Get started effortlessly with simple signup and quick KYC verification. BoldBuy supports multi-channel notifications to keep you updated every step of the way.",
      icon: <HeartHandshakeIcon />,
    },
    {
      title: "Limitless Inventory",
      description:
        "Access a vast inventory from both physical stores and virtual dark stores, offering customers a broad selection of products.",
      icon: <BoxesIcon />,
    },
    {
      title: "Real-Time Updates",
      description:
        "Keep your inventory accurate with real-time updates, ensuring customers always see the latest stock and availability.",
      icon: <FileClockIcon />,
    },
    {
      title: "Order Aggregation",
      description:
        "Streamline order fulfillment by aggregating orders at the market level, enabling quicker deliveries and enhanced customer satisfaction.",
      icon: <FileAxis3DIcon />,
    },
    {
      title: "SaaS-Based POS System",
      description:
        "Leverage an intuitive POS system to simplify inventory management, track sales, and process transactions with ease.",
      icon: <ComputerIcon />,
    },
    {
      title: "Advanced Reporting",
      description:
        "Analyze your business with detailed sales reports, inventory performance metrics, and insights into top-selling products.",
      icon: <ChartLineIcon />,
    },
    {
      title: "Multi-Store Management",
      description:
        "Effortlessly manage multiple stores from one platform, tracking orders and complaints across all locations.",
      icon: <SquareStackIcon />,
    },
    {
      title: "Flexible Catalog Management",
      description:
        "Organize your catalog with bulk uploads, progress monitoring, and time-based inventory releases to keep things efficient and engaging.",
      icon: <LayersIcon />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 max-w-7xl mx-auto py-16">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800",
        "hover:cursor-pointer"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
