"use client";

import { useState,useEffect } from "react";

import { UserNavbar } from "@/components/derived/usernavbar";

const Orders = () => {

  const [expandedOrder, setExpandedOrder] = useState<number | null>(null); // Track the currently expanded order
  const [orderlist, setorderlist] = useState<any[]>([]);
  const toggleOrderDetails = (orderId: number) => {
    setExpandedOrder((prev) => (prev === orderId ? null : orderId)); // Toggle order details
  };
 useEffect(() => {
       const storedordered = JSON.parse(localStorage.getItem('orderlist')!) || [];
       setorderlist(storedordered);
     }, []);
   
  return (
    <div className="">
      <UserNavbar/>
      <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Orders</h1>

      <div className="space-y-4">
        {orderlist.map((order) => (
          <div key={order.id} className="border p-4 rounded-md shadow-md mb-4">
            <h3 className="text-xl font-semibold text-blue-600">Order #{order.id}</h3>
            <p className="text-lg font-bold text-blue-500">Total: ${order.total}</p>
            <p className="text-gray-600">Status: {order.status}</p>
            <button
              className="text-blue-600 mt-2 underline"
              onClick={() => toggleOrderDetails(order.id)}
            >
              {expandedOrder === order.id ? "Hide Details" : "View Details"}
            </button>

            {/* Order Details Section */}
            {expandedOrder === order.id && (
              <div className="mt-4 space-y-2">
                <h4 className="text-lg font-semibold">Items:</h4>
                <ul className="list-disc list-inside">
                  {order.items.map((item) => (
                    <li key={item.id} className="flex justify-between">
                      <span>{item.product.name} x {item.quantity}</span>
                      <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 text-gray-600">
                  <p>
                    <strong>Delivery Address:</strong> {order.deliveryInfo.address}, {order.deliveryInfo.city}, {order.deliveryInfo.zip}
                  </p>
                  <p>
                    <strong>Payment Method:</strong> {order.paymentMethod}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Orders;
