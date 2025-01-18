"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart,placeOrder } = useCart();
  const [deliveryInfo, setDeliveryInfo] = useState({ address: '', city: '', zip: '' });
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const router = useRouter();

  // Calculate the total price based on the cart items
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  // Handle placing the order
  const handlePlaceOrder = () => {
    const order = {
      id: new Date().getTime(),
      items: cart,
      deliveryInfo,
      paymentMethod,
      status: 'Processing',
      total: getTotalPrice().toFixed(2),
    };
  placeOrder(order)
    clearCart();  // Empty the cart after placing the order
    const serializedOrder = encodeURIComponent(JSON.stringify(order));
  router.push(`/Orderconfirmation?order=${serializedOrder}`);  // Navigate to the order confirmation page
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Delivery Information</h2>
          <input
            type="text"
            placeholder="Address"
            className="w-full p-2 mb-2 border rounded-md"
            value={deliveryInfo.address}
            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
          />
          <input
            type="text"
            placeholder="City"
            className="w-full p-2 mb-2 border rounded-md"
            value={deliveryInfo.city}
            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="ZIP Code"
            className="w-full p-2 mb-2 border rounded-md"
            value={deliveryInfo.zip}
            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, zip: e.target.value })}
          />
        </div>

        <div className="p-4 bg-gray-100 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
          <select
            className="w-full p-2 border rounded-md"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        <div className="p-4 bg-gray-100 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.product.name} x {item.quantity}</span>
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
            onClick={handlePlaceOrder}
            className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
