"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { stores } from "../stores-data"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export default function AnalyticsCharts() {
  const salesData = stores.map(store => ({
    name: store.store_name,
    sales: store.analytics.analytics_data.total_sales,
    satisfaction: store.performance.metrics_data.customer_satisfaction,
    turnover: store.performance.metrics_data.inventory_turnover
  }))

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Total Sales by Store</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customer Satisfaction & Inventory Turnover</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="satisfaction" stroke="hsl(var(--primary))" />
              <Line yAxisId="right" type="monotone" dataKey="turnover" stroke="hsl(var(--secondary))" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

