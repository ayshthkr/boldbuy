"use client"
import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importing cart icon from react-icons

const CartCircle = () => {
  const { cart, getCartCount, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const cartCount = getCartCount();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div className="relative">
      {/* Cart Circle with Cart Icon */}
      <div
        className="relative flex justify-end cursor-pointer"
        onClick={toggleDrawer}
      >
     
        <FaShoppingCart size={30} className="text-blue-600" />

        {/* Cart Count Badge */}
        {cartCount > 0 && (
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {cartCount}
          </div>
        )}
      </div>
    

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50"> {/* Wider drawer */}
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Cart</h2>
            <button onClick={toggleDrawer} className="absolute top-2 right-2 text-xl">X</button>
          </div>

          {/* Cart Items */}
          <div className="overflow-y-auto p-4">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 mb-4">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-grow">
                    <span>{item.product.name}</span>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="text-gray-600"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="text-gray-600"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Total Price */}
          <div className="p-4 border-t">
            <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>

            {/* Checkout Button */}
            <button
              onClick={() => router.push('/Checkout')}
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mt-4"
            >
              Go to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCircle;
