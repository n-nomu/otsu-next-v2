"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { getCart, CartItem, removeFromCart, updateQuantity, getCartTotal, clearCart } from '@/lib/cart';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  useEffect(() => {
    setCart(getCart());
    setIsLoading(false);
  }, []);

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
    setCart(getCart());
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemove(productId);
      return;
    }
    updateQuantity(productId, newQuantity);
    setCart(getCart());
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    
    setIsCheckingOut(true);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.map(item => ({
            productId: item.productId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (data.url) {
        // Stripe Checkoutに遷移
        window.location.href = data.url;
      } else {
        alert('Checkout failed. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  const subtotal = getCartTotal();
  const shipping = subtotal >= 500 ? 0 : 15; // £500以上で送料無料
  const total = subtotal + shipping;

  // シンプルなヘッダーコンポーネント（ロゴのみ・左寄せ・墨黒）
  const SimpleHeader = () => (
    <header className="w-full py-6 px-8 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-serif text-[#1A1A1A] tracking-wider">
          乙 otsu
        </Link>
      </div>
    </header>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F5F3EF]">
        <SimpleHeader />
        <div className="pt-32 pb-20 px-6 text-center">
          <p className="font-sans text-[#1A1A1A]/70">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#F5F3EF]">
        <SimpleHeader />
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
          <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-[#1A1A1A]/70" strokeWidth={1} />
          <h1 className="font-serif text-3xl text-[#1A1A1A] mb-4">Your Cart is Empty</h1>
          <p className="font-sans text-[#1A1A1A]/70 mb-8">Discover our collection of handcrafted Bizen ware.</p>
          <Link 
            href="/#shop" 
            className="inline-block px-8 py-3 bg-[#1A1A1A] text-white font-sans text-sm tracking-wide hover:bg-[#1A1A1A]/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <SimpleHeader />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl text-[#1A1A1A] mb-12 text-center">Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div key={item.productId} className="flex gap-6 p-6 bg-white border border-[#1A1A1A]/10">
                  {/* Product Image */}
                  <div className="relative w-24 h-24 flex-shrink-0 bg-[#1A1A1A]/5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex-grow">
                    <h3 className="font-serif text-lg text-[#1A1A1A] mb-1">{item.name}</h3>
                    <p className="font-sans text-[#1A1A1A]/70 text-sm mb-4">Product ID: {item.productId}</p>
                    
                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-[#1A1A1A]/30 hover:border-[#1A1A1A] transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-sans text-[#1A1A1A] w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-[#1A1A1A]/30 hover:border-[#1A1A1A] transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {/* Price and Remove */}
                      <div className="flex items-center gap-6">
                        <span className="font-serif text-lg text-[#1A1A1A]">£{(item.price * item.quantity).toFixed(2)}</span>
                        <button
                          onClick={() => handleRemove(item.productId)}
                          className="text-[#1A1A1A]/70 hover:text-[#B8735A] transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Clear Cart */}
              <button
                onClick={() => {
                  clearCart();
                  setCart([]);
                }}
                className="font-sans text-sm text-[#1A1A1A]/70 hover:text-[#B8735A] transition-colors underline"
              >
                Clear Cart
              </button>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-[#1A1A1A]/10 p-6 sticky top-32">
                <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between font-sans text-[#1A1A1A]">
                    <span>Subtotal</span>
                    <span>£{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-sans text-[#1A1A1A]">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `£${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="font-sans text-xs text-[#1A1A1A]/70">
                      Free shipping on orders over £500
                    </p>
                  )}
                  <div className="border-t border-[#1A1A1A]/10 pt-4 flex justify-between font-serif text-xl text-[#1A1A1A]">
                    <span>Total</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut || cart.length === 0}
                  className="w-full py-4 bg-[#1A1A1A] text-white font-sans text-sm tracking-wide hover:bg-[#1A1A1A]/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <Link 
                  href="/#shop"
                  className="block text-center mt-4 font-sans text-sm text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}