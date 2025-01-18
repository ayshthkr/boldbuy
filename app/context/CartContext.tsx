"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

// Product interface
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

// CartProduct interface with a product field
interface CartProduct {
  id: number;
  quantity: number;
  product: Product;
}

// Order interface
interface Order {
  id: number;
  items: CartProduct[];
  deliveryInfo: { address: string; city: string; zip: string };
  paymentMethod: string;
  total: string;
  status: string;
}

// CartContext interface
interface CartContextType {
  cart: CartProduct[];
  orders: Order[];
  clearCart: () => void;
  placeOrder: (order: Order) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  getCartCount: () => number;
}

// CartContext creation
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const placeOrder = (order: Order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const addToCart = (product: Product) => {
    setCart((prevCart: CartProduct[]) => {
      const existingProduct = prevCart.find((item) => item.product.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { id: product.id, quantity: 1, product }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const incrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      return updatedCart.filter((item) => item.quantity > 0);
    });
  };

  const getCartCount= ()=> {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ getCartCount,cart, orders, addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider. Make sure you wrap your app with CartProvider.");
  }
  return context;
};
