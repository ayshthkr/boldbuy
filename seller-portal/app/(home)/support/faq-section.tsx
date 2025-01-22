"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-purple-200/20 to-purple-200/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I get started with BoldBuy?
              </AccordionTrigger>
              <AccordionContent>
                Getting started with BoldBuy is easy. Simply sign up for an
                account, complete your business profile, and follow our
                step-by-step guide to set up your virtual warehouse and POS
                system.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What payment methods do you support?
              </AccordionTrigger>
              <AccordionContent>
                We support all major credit cards, debit cards, digital wallets,
                and bank transfers. Our platform is integrated with leading
                payment gateways to ensure secure transactions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How does the inventory management system work?
              </AccordionTrigger>
              <AccordionContent>
                Our inventory management system automatically tracks stock
                levels, provides real-time updates, and can be integrated with
                multiple store locations. It includes features like automated
                reordering and inventory forecasting.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I manage multiple stores on BoldBuy?
              </AccordionTrigger>
              <AccordionContent>
                Yes, BoldBuy supports multi-store management. You can manage
                inventory, sales, and analytics for multiple locations from a
                single dashboard, with role-based access control for your team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What kind of reporting and analytics do you offer?
              </AccordionTrigger>
              <AccordionContent>
                We provide comprehensive reporting including sales analysis,
                inventory turnover, customer behavior, and financial reports.
                All data can be exported in various formats and accessed in
                real-time through our dashboard.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
