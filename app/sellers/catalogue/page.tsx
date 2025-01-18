import { Metadata } from "next"
import { ProductForm } from "./product-form"
import { Navbar } from "@/components/derived/navbar"
import { Footer } from "@/components/derived/footer"

export const metadata: Metadata = {
  title: "Create Catalogue - BoldBuy",
  description: "Create a new product catalogue on BoldBuy",
}

export default function CreateCataloguePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-28">
        <h1 className="text-3xl font-bold mb-6 text-center">Create Product Catalogue</h1>
        <ProductForm />
      </main>
      <Footer />
    </div>
  )
}

