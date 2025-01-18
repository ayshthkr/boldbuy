import { notFound } from "next/navigation"
import { stores } from "../../stores-data"
import { StoreDetails } from "./store-details"
import { StoreInventory } from "./store-inventory"
import { StoreAnalytics } from "./store-analytics"
import { StoreOrders } from "./store-orders"
import { Navbar } from "@/components/derived/navbar"
import { Footer } from "@/components/derived/footer"

export default async function StorePage({ params }: {params: Promise<{id: string}>}) {
  const prms = await params;
  const store = stores.find(s => s.id === parseInt(prms.id))

  if (!store) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-28">
        <StoreDetails store={store} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <StoreInventory inventory={store.inventory} />
          <StoreOrders orders={store.orders} />
        </div>
        
        <StoreAnalytics 
          analytics={store.analytics} 
          performance={store.performance} 
        />
      </main>
      <Footer />
    </div>
  )
}

