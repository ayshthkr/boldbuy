import { Navbar } from "@/components/derived/navbar";
import { Footer } from "@/components/derived/footer";

export default function LegalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Legal Information</h1>

          <section id="terms" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Welcome to BoldBuy. By accessing our website and using our
                services, you agree to these terms of service. These terms
                govern your use of our platform and services.
              </p>
              <h3 className="text-xl font-medium mt-6 mb-3">
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-600 mb-4">
                By accessing and using BoldBuy&apos;s services, you acknowledge
                that you have read, understood, and agree to be bound by these
                Terms of Service.
              </p>
              <h3 className="text-xl font-medium mt-6 mb-3">
                2. User Obligations
              </h3>
              <p className="text-gray-600 mb-4">
                Users must provide accurate information, maintain account
                security, and comply with all applicable laws and regulations.
              </p>
            </div>
          </section>

          <section id="privacy" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. This policy outlines how we
                collect, use, and protect your personal information.
              </p>
              <h3 className="text-xl font-medium mt-6 mb-3">Data Collection</h3>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, as well
                as data about your use of our platform and services.
              </p>
              <h3 className="text-xl font-medium mt-6 mb-3">Data Usage</h3>
              <p className="text-gray-600 mb-4">
                We use your data to provide and improve our services,
                communicate with you, and ensure platform security.
              </p>
            </div>
          </section>

          <section id="cookies" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your
                experience on our platform.
              </p>
              <h3 className="text-xl font-medium mt-6 mb-3">
                Types of Cookies
              </h3>
              <p className="text-gray-600 mb-4">
                We use essential cookies for platform functionality and
                analytical cookies to understand user behavior.
              </p>
            </div>
          </section>

          <section id="agreement" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">User Agreement</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                This agreement outlines the relationship between users and
                BoldBuy, including rights, responsibilities, and dispute
                resolution procedures.
              </p>
              <h3 className="text-xl font-medium mt-6 mb-3">Platform Usage</h3>
              <p className="text-gray-600 mb-4">
                Users agree to use the platform in accordance with applicable
                laws and maintain professional conduct.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
