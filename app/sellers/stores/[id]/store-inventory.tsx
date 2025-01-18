import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package } from 'lucide-react'

interface InventoryItem {
  id: number
  product_name: string
  quantity: number
  price: number
  last_updated: string
}

interface StoreInventoryProps {
  inventory: InventoryItem[]
}

export function StoreInventory({ inventory }: StoreInventoryProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5 text-purple-600" />
          Inventory
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {inventory.map((item) => (
            <div key={item.id} className="py-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{item.product_name}</h3>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="font-medium">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

