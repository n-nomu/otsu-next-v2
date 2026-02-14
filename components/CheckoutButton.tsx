"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  productId: string;
  productName: string;
  price: number; // £表示の価格（例：180）
}

export function CheckoutButton({ productId, productName, price }: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          productName,
          price,
        }),
      });

      const data = await response.json();

      if (data.url) {
        // Stripe Checkoutページへリダイレクト
        window.location.href = data.url;
      } else {
        alert("Failed to create checkout session");  
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className="flex-1 bg-charcoal hover:bg-charcoal/90 text-white py-4 px-6 rounded-lg font-sans text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? "Processing..." : "Add to Cart"}
    </button>
  );
}