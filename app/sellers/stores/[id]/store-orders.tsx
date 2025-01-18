import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from 'lucide-react'

interface Order {
  id: number
  customer_id: number
  order_date: string
  status: string
  total_amount: number
}

interface StoreOrdersProps {
  orders: Order[]
}

export function StoreOrders({ orders }: StoreOrdersProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl max-h-[420px] overflow-y-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5 text-purple-600" />
          Recent Orders
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {orders.map((order) => (
            <div key={order.id} className="py-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Order #{order.id}</h3>
                  <p className="text-sm text-gray-600">
                    Customer ID: {order.customer_id}
                  </p>
                </div>
                <div className="text-right">
                  <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                    {order.status}
                  </Badge>
                  <p className="mt-1 font-medium">
                    ${order.total_amount.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

