"use client";
import { useRouter, useSearchParams } from "next/navigation";

const OrderConfirmation = () => {
  const router = useRouter();
  const query=useSearchParams()
  const order =JSON.parse( query.get('order')!);

  const getTotalPrice = () => {
    return order.items.reduce((total:any, item:any) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  if (!order) {
    return <div>Order not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Order Confirmation
      </h1>
      <div className="p-4 bg-gray-100 rounded-md">
        <h2 className="text-xl font-semibold mb-2">Order #{order.id}</h2>
        <p>
          <strong>Status:</strong> {order.status}
        </p>
        <p>
          <strong>Total:</strong> ${order.total}
        </p>
        <h3 className="mt-4 text-lg font-semibold">Delivery Information</h3>
        <p>
          {order.deliveryInfo.address}, {order.deliveryInfo.city},{" "}
          {order.deliveryInfo.zip}
        </p>
        <h3 className="mt-4 text-lg font-semibold">Payment Method</h3>
        <p>{order.paymentMethod}</p>
        <div className="p-4 bg-gray-100 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
<<<<<<< HEAD:app/Orderconfirmation/page.tsx
          {order.items.map((item: any) => (
=======
          {order.items.map((item:any) => (
>>>>>>> main:app/(buyers)/Orderconfirmation/page.tsx
            <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.product.name} x {item.quantity}
              </span>
              <span>${item.product.price * item.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => router.push("/Orders")} // Use router.push for navigation
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Go to Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
