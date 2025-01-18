export interface Store {
  id: number;
  seller_id: number;
  store_name: string;
  location: string;
  inventory: InventoryItem[];
  orders: Order[];
  analytics: Analytics;
  performance: PerformanceMetrics;
}

interface InventoryItem {
  id: number;
  seller_id: number;
  product_name: string;
  quantity: number;
  price: number;
  last_updated: string;
}

export interface Order {
  id: number;
  store_id: number;
  customer_id: number;
  order_date: string;
  status: string;
  total_amount: number;
}

interface Analytics {
  id: number;
  seller_id: number;
  analytics_data: {
    total_sales: number;
    average_order_value: number;
    top_products: string[];
  };
  generated_at: string;
}

interface PerformanceMetrics {
  id: number;
  seller_id: number;
  metrics_data: {
    order_fulfillment_rate: number;
    customer_satisfaction: number;
    inventory_turnover: number;
  };
  generated_at: string;
}

export const stores: Store[] = [
  {
    id: 1,
    seller_id: 101,
    store_name: "Fashion Hub Central",
    location: "123 Market Street, Downtown",
    inventory: [
      { id: 1, seller_id: 101, product_name: "Designer T-Shirt", quantity: 50, price: 29.99, last_updated: "2024-01-17T10:00:00Z" },
      { id: 2, seller_id: 101, product_name: "Premium Jeans", quantity: 30, price: 89.99, last_updated: "2024-01-17T10:00:00Z" }
    ],
    orders: [
      { id: 1, store_id: 1, customer_id: 201, order_date: "2024-01-17T15:30:00Z", status: "completed", total_amount: 119.98 },
      { id: 2, store_id: 1, customer_id: 202, order_date: "2024-01-18T09:45:00Z", status: "processing", total_amount: 89.99 }
    ],
    analytics: {
      id: 1,
      seller_id: 101,
      analytics_data: { total_sales: 25000, average_order_value: 75.50, top_products: ["Designer T-Shirt", "Premium Jeans"] },
      generated_at: "2024-01-17T00:00:00Z"
    },
    performance: {
      id: 1,
      seller_id: 101,
      metrics_data: { order_fulfillment_rate: 98.5, customer_satisfaction: 4.8, inventory_turnover: 3.2 },
      generated_at: "2024-01-17T00:00:00Z"
    }
  },
  {
    id: 2,
    seller_id: 102,
    store_name: "Urban Style Studio",
    location: "456 Shopping Avenue, Midtown",
    inventory: [
      { id: 3, seller_id: 102, product_name: "Casual Sneakers", quantity: 40, price: 59.99, last_updated: "2024-01-17T10:00:00Z" }
    ],
    orders: [
      { id: 3, store_id: 2, customer_id: 203, order_date: "2024-01-17T14:20:00Z", status: "completed", total_amount: 59.99 },
      { id: 4, store_id: 2, customer_id: 204, order_date: "2024-01-18T11:30:00Z", status: "processing", total_amount: 119.98 }
    ],
    analytics: {
      id: 2,
      seller_id: 102,
      analytics_data: { total_sales: 18000, average_order_value: 65.75, top_products: ["Casual Sneakers"] },
      generated_at: "2024-01-17T00:00:00Z"
    },
    performance: {
      id: 2,
      seller_id: 102,
      metrics_data: { order_fulfillment_rate: 97.8, customer_satisfaction: 4.6, inventory_turnover: 2.8 },
      generated_at: "2024-01-17T00:00:00Z"
    }
  },
  {
    id: 3,
    seller_id: 103,
    store_name: "Elegant Boutique",
    location: "789 Fashion Boulevard, Uptown",
    inventory: [
      { id: 4, seller_id: 103, product_name: "Evening Gown", quantity: 20, price: 199.99, last_updated: "2024-01-17T10:00:00Z" },
      { id: 5, seller_id: 103, product_name: "Designer Handbag", quantity: 15, price: 149.99, last_updated: "2024-01-17T10:00:00Z" }
    ],
    orders: [
      { id: 5, store_id: 3, customer_id: 205, order_date: "2024-01-17T16:45:00Z", status: "completed", total_amount: 349.98 },
      { id: 6, store_id: 3, customer_id: 206, order_date: "2024-01-18T10:15:00Z", status: "processing", total_amount: 199.99 }
    ],
    analytics: {
      id: 3,
      seller_id: 103,
      analytics_data: { total_sales: 35000, average_order_value: 175.00, top_products: ["Evening Gown", "Designer Handbag"] },
      generated_at: "2024-01-17T00:00:00Z"
    },
    performance: {
      id: 3,
      seller_id: 103,
      metrics_data: { order_fulfillment_rate: 99.2, customer_satisfaction: 4.9, inventory_turnover: 2.5 },
      generated_at: "2024-01-17T00:00:00Z"
    }
  },
  {
    id: 4,
    seller_id: 104,
    store_name: "Sports Gear Pro",
    location: "321 Fitness Road, Sportsville",
    inventory: [
      { id: 6, seller_id: 104, product_name: "Running Shoes", quantity: 60, price: 79.99, last_updated: "2024-01-17T10:00:00Z" },
      { id: 7, seller_id: 104, product_name: "Yoga Mat", quantity: 40, price: 29.99, last_updated: "2024-01-17T10:00:00Z" }
    ],
    orders: [
      { id: 7, store_id: 4, customer_id: 207, order_date: "2024-01-17T13:00:00Z", status: "completed", total_amount: 109.98 },
      { id: 8, store_id: 4, customer_id: 208, order_date: "2024-01-18T09:30:00Z", status: "processing", total_amount: 79.99 }
    ],
    analytics: {
      id: 4,
      seller_id: 104,
      analytics_data: { total_sales: 28000, average_order_value: 85.50, top_products: ["Running Shoes", "Yoga Mat"] },
      generated_at: "2024-01-17T00:00:00Z"
    },
    performance: {
      id: 4,
      seller_id: 104,
      metrics_data: { order_fulfillment_rate: 98.0, customer_satisfaction: 4.7, inventory_turnover: 3.5 },
      generated_at: "2024-01-17T00:00:00Z"
    }
  },
  {
    id: 5,
    seller_id: 105,
    store_name: "Tech Gadget Haven",
    location: "555 Innovation Street, Tech Park",
    inventory: [
      { id: 8, seller_id: 105, product_name: "Wireless Earbuds", quantity: 30, price: 99.99, last_updated: "2024-01-17T10:00:00Z" },
      { id: 9, seller_id: 105, product_name: "Smart Watch", quantity: 25, price: 199.99, last_updated: "2024-01-17T10:00:00Z" }
    ],
    orders: [
      { id: 9, store_id: 5, customer_id: 209, order_date: "2024-01-17T11:20:00Z", status: "completed", total_amount: 299.98 },
      { id: 10, store_id: 5, customer_id: 210, order_date: "2024-01-18T14:45:00Z", status: "processing", total_amount: 199.99 }
    ],
    analytics: {
      id: 5,
      seller_id: 105,
      analytics_data: { total_sales: 45000, average_order_value: 225.00, top_products: ["Wireless Earbuds", "Smart Watch"] },
      generated_at: "2024-01-17T00:00:00Z"
    },
    performance: {
      id: 5,
      seller_id: 105,
      metrics_data: { order_fulfillment_rate: 97.5, customer_satisfaction: 4.8, inventory_turnover: 3.0 },
      generated_at: "2024-01-17T00:00:00Z"
    }
  }
];

export const getAllOrders = (): Order[] => {
  return stores.flatMap(store => store.orders);
};

