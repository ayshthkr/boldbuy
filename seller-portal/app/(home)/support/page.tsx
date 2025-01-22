import { Metadata } from "next";
import { ContactForm } from "./contact-form";
import { FAQSection } from "./faq-section";
import { NewsletterSection } from "./newsletter-section";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { Navbar } from "@/components/derived/navbar";
import { Footer } from "@/components/derived/footer";

export const metadata: Metadata = {
  title: "Support - BoldBuy",
  description:
    "Get help and support for your BoldBuy account. Find answers to frequently asked questions or contact our support team.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Header Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            How can we help you?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access our comprehensive support resources, get answers to common
            questions, or reach out to our dedicated support team for
            assistance.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border">
              <Phone className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">
                Available Mon-Fri, 9AM-6PM EST
              </p>
              <p className="text-purple-600 font-medium">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border">
              <Mail className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                24/7 response within 24 hours
              </p>
              <p className="text-purple-600 font-medium">support@boldbuy.com</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border">
              <MessageSquare className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Available 24/7 for instant help
              </p>
              <Button>Start Chat</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Form Section */}
      <section className="py-12 bg-gradient-to-b from-purple-200/50 to-violet-400/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Send us a message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
      <Footer />
    </div>
  );
}
