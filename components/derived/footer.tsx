import Link from "next/link";
import { Package2 } from "lucide-react";
import { AnimatedTooltip } from "./animated-tooltip";

export function Footer() {
  return (
    <footer className="border-t w-full">
      <div className="container mx-auto px-4 py-12">
        {/* Mobile Footer */}
        <div className="flex flex-col items-center space-y-8 md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <Package2 className="h-6 w-6 text-purple-600" />
            <span className="font-semibold text-xl">BoldBuy</span>
          </Link>

          <nav className="flex flex-col items-center space-y-6 text-base">
            <Link href="/" className="hover:text-primary">
              About Us
            </Link>
            <Link href="/support" className="hover:text-primary">
              Contact Us
            </Link>
            <Link href="/sellers" className="hover:text-primary">
              Our Services
            </Link>
            <Link href="/buyers" className="hover:text-primary">
              Buyer&apos;s Section
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
            © 2025 Buy. All rights reserved.
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
                    href="/"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth"
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
                    href="/sellers"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Sellers Section
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/buyers"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Buyer&apos;s Section
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/sellers"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sellers/#inventoryFeatures"
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    POS System
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sellers/#inventoryFeatures"
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
                © 2025 BoldBuy. All rights reserved.
              </p>
              <div className="flex gap-2 items-center text-xl font-bold ">
              Made with ❤️ by <AnimatedTooltip items={people} />
              </div>
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

const people = [
  {
    id: 1,
    name: "Aadi Yadav",
    designation: "Web Dev, Design",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQE59f8c-dCuNQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728719516414?e=1743033600&v=beta&t=nSgwdjVzvcei_kH3qM3WGX6sdeIsCx6264pHJNFzmY8",
  },
  {
    id: 2,
    name: "Ayush Thakur",
    designation: "Web Dev, ML",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHhiNWxoTP40A/profile-displayphoto-shrink_200_200/B56ZQq8HAXHQAY-/0/1735887188470?e=1743033600&v=beta&t=T5aUvBFxOj1EJV8JyMVNOk94AIumr0EHNg0oHoyJFvU",
  },
  {
    id: 3,
    name: "Raj Raman",
    designation: "Web Dev, Design",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/463605538_938546488320189_4768925806246506298_n.jpg?ccb=11-4&oh=01_Q5AaINdMuNEymKC1sBmOuhfpBCC2xTg2y7ZBpwuqPUkIdCvj&oe=67922549&_nc_sid=5e03e0&_nc_cat=106",
  },
  {
    id: 4,
    name: "Yashaswini Sharma",
    designation: "Web Dev, Design",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGobMDP9F6zPw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714486264094?e=1743033600&v=beta&t=6F7LpxjKB44LPBTzbhMj3N61ms5S3PZnIQpF_09HKJ8",
  },
];