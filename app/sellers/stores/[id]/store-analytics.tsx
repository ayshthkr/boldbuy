import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, TrendingUp } from 'lucide-react'

interface Analytics {
  analytics_data: {
    total_sales: number
    average_order_value: number
    top_products: string[]
  }
}

interface Performance {
  metrics_data: {
    order_fulfillment_rate: number
    customer_satisfaction: number
    inventory_turnover: number
  }
}

interface StoreAnalyticsProps {
  analytics: Analytics
  performance: Performance
}

export function StoreAnalytics({ analytics, performance }: StoreAnalyticsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <Card className="shadow-sm hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart className="h-5 w-5 text-purple-600" />
            Sales Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Total Sales</dt>
              <dd className="mt-1 text-2xl font-semibold">
                ${analytics.analytics_data.total_sales.toLocaleString()}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Average Order Value</dt>
              <dd className="mt-1 text-2xl font-semibold">
                ${analytics.analytics_data.average_order_value.toFixed(2)}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Top Products</dt>
              <dd className="mt-1">
                <ul className="list-disc list-inside">
                  {analytics.analytics_data.top_products.map((product) => (
                    <li key={product} className="text-gray-600">{product}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card className="shadow-sm hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Order Fulfillment Rate</dt>
              <dd className="mt-1 text-2xl font-semibold">
                {performance.metrics_data.order_fulfillment_rate}%
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Customer Satisfaction</dt>
              <dd className="mt-1 text-2xl font-semibold">
                {performance.metrics_data.customer_satisfaction}/5.0
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Inventory Turnover</dt>
              <dd className="mt-1 text-2xl font-semibold">
                {performance.metrics_data.inventory_turnover}x
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  )
}

