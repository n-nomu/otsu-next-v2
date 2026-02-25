"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { addToCart } from "@/lib/cart";
import { useCurrency } from "@/lib/currency-context";

interface AddToCartButtonProps {
  productId: string;
  productName: string;
  price: number;
  image: string;
}

export function AddToCartButton({ productId, productName, price, image }: AddToCartButtonProps) {
  const router = useRouter();
  const [isAdding, setIsAdding] = useState(false);
  
  // 通貨設定を取得
  const { currency } = useCurrency();
  const displayPrice = currency === 'GBP' ? price : price * 1.4;
  const symbol = currency === 'GBP' ? '£' : '$';

  const handleAddToCart = () => {
    setIsAdding(true);
    
    addToCart({
      productId,
      name: productName,
      price,
      image,
    }, 1);

    setTimeout(() => {
      router.push("/cart");
    }, 300);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="flex-1 bg-charcoal text-white py-4 px-8 font-sans text-sm tracking-wide hover:bg-charcoal/90 transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
    >
      <ShoppingBag className="w-5 h-5" />
      {isAdding ? "Adding..." : `Add to Cart — ${symbol}${displayPrice}`}
    </button>
  );
}