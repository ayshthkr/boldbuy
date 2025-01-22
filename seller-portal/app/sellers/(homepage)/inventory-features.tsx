
export function InventoryFeatures() {
  return <BentoDemo />;
}


import {
  BoxesIcon,
  CalendarIcon,
  ChartLineIcon,
  HandshakeIcon,
  MessageCircleHeartIcon,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/derived/bento-grid";
import Image from "next/image";

const features = [
  {
    Icon: BoxesIcon,
    name: "Streamline Your Inventory",
    description: "BoldBuy consolidates local inventories into virtual warehouses for quicker order processing and enhanced customer satisfaction.",
    href: "/sellers/inventory",
    cta: "Learn more",
    background: <Image width={200} height={200} alt="" className="absolute h-[60%] group-hover:h-1/2 transition-all duration-150 w-full object-cover opacity-60" src="https://images.unsplash.com/photo-1724709162875-fe100dd0e04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGludmVudG9yeXxlbnwwfHwwfHx8MA%3D%3D" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 group",
  },
  {
    Icon: HandshakeIcon,
    name: "Expand Your Business Reach",
    description: "Break physical boundaries and reach more customers with our platform, helping you grow your sales and market presence.",
    href: "/sellers/inventory",
    cta: "Learn more",
    background: <Image width={200} height={200} alt="" className="absolute h-[55%] group-hover:h-[45%] transition-all duration-150 w-full object-cover opacity-60" src="/reach.webp" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: ChartLineIcon,
    name: "Optimize with Analytics",
    description: "Use real-time analytics to enhance sales strategies, monitor top products, and optimize inventory decisions.",
    href: "/sellers/inventory",
    cta: "Learn more",
    background: <></>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Simplify Daily Operations",
    description: "Use our SaaS-based POS system to efficiently handle orders, update catalogs, and track sales, all from one intuitive platform.",
    href: "/sellers/inventory",
    cta: "Learn more",
    background: <></>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: MessageCircleHeartIcon,
    name: "Boost Customer Satisfaction",
    description:
      "Deliver a superior shopping experience with faster deliveries, better product variety, and quick issue resolution.",
    href: "/sellers/inventory",
    cta: "Learn more",
    background: <Image width={200} height={200} alt="" className="absolute h-[55%] group-hover:h-[45%] transition-all duration-150 w-full object-cover opacity-60" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

function BentoDemo() {
  return (
    <div className="container px-8 py-16 mx-auto" id="inventoryFeatures">
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export { BentoDemo };