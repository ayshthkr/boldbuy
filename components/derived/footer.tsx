import Link from "next/link";
import { Package2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Mobile Footer */}
        <div className="flex flex-col items-center space-y-8 md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <Package2 className="h-6 w-6 text-purple-600" />
            <span className="font-semibold text-xl">BoldBuy</span>
          </Link>

          <nav className="flex flex-col items-center space-y-6 text-base">
            <Link href="/about" className="hover:text-primary">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact Us
            </Link>
            <Link href="/services" className="hover:text-primary">
              Our Services
            </Link>
            <Link href="/get-started" className="hover:text-primary">
              Get Started
            </Link>
            <Link href="/blog" className="hover:text-primary">
              Blog Insights
            </Link>
          </nav>

          <div className="w-full h-px bg-gray-200 my-6" />

          <div className="flex flex-col items-center space-y-4">
            <Link
              href="/privacy"
              className="text-sm underline hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm underline hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-sm underline hover:text-primary"
            >
              Cookies Settings
            </Link>
          </div>

          <p className="text-sm text-center text-gray-600 mt-8">
            © 2024 BoldBuy. All rights reserved.
          </p>
        </div>

        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/get-started"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Blog Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Guides
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pos"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    POS System
                  </Link>
                </li>
                <li>
                  <Link
                    href="/inventory"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Inventory Management
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/legal"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Cookies Settings
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                © 2024 BoldBuy. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/legal"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/legal"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/legal"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Cookies Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
