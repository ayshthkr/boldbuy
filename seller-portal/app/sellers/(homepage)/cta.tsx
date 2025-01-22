import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 text-white">
      <div className="container px-6 md:px-8 lg:px-12 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Join the BoldBuy Revolution
            </h2>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              Experience seamless digital integration and expand your market reach with BoldBuy today!
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href={'/auth'}><Button>Get Started</Button></Link>
            <Link href={'/'}>
              <Button variant="secondary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

