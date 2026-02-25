"use client";

import { useState } from "react";
import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AddToCartButton } from "@/components/AddToCartButton";

interface Props {
  params: { id: string };
}

export default function ProductPage({ params }: Props) {
  const product = getProductById(params.id);
  
  const [mainImage, setMainImage] = useState<string>(product?.image || "");

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <header className="w-full py-6 px-8 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-serif text-[#1A1A1A] tracking-wider">
            乙 otsu
          </Link>
        </div>
      </header>

      <main className="w-full px-6 lg:px-12 py-12 lg:py-20">
        <Link 
          href="/#shop" 
          className="inline-flex items-center text-[#1A1A1A]/70 hover:text-[#B8735A] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-4">
            <div className="relative aspect-square bg-white overflow-hidden">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setMainImage(product.image || "")}
                className={`relative w-20 h-20 bg-white overflow-hidden border-2 transition-colors ${
                  mainImage === product.image ? "border-[#1A1A1A]" : "border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30"
                }`}
              >
                <Image
                  src={product.image}
                  alt={`${product.name} - main view`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
              
              {product.image2 && (
                <button
                  onClick={() => setMainImage(product.image2 || "")}
                  className={`relative w-20 h-20 bg-white overflow-hidden border-2 transition-colors ${
                    mainImage === product.image2 ? "border-[#1A1A1A]" : "border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30"
                  }`}
                >
                  <Image
                    src={product.image2}
                    alt={`${product.name} - view 2`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              )}
            </div>
          </div>

          <div className="lg:sticky lg:top-32 space-y-8">
            <div>
              <p className="text-[#B8735A] text-sm uppercase tracking-widest mb-2">
                Selected Work
              </p>
              <h1 className="font-serif text-3xl lg:text-4xl text-[#1A1A1A] mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-2xl font-sans font-light text-[#1A1A1A]">
                £{product.price}
              </p>
              {/* 送料メッセージ追加 */}
              <p className="text-sm text-[#1A1A1A]/60 mt-2">
                International shipping calculated at checkout
              </p>
            </div>

            <div className="prose prose-stone">
              <p className="text-[#1A1A1A]/70 leading-relaxed whitespace-pre-line text-base">
                {product.description || "Crafted in Bizen, Okayama. Each piece is unique, shaped by earth, fire, and serendipity."}
              </p>
            </div>

            {/* 寸法セクション（常に表示） */}
            <div className="border-t border-[#1A1A1A]/10 pt-6">
              <h2 className="text-sm uppercase tracking-widest text-[#1A1A1A] mb-3">
                Dimensions & Capacity
              </h2>
              <p className="text-[#1A1A1A]/70 text-sm leading-relaxed whitespace-pre-line">
                {product.dimensions || "Dimensions and capacity details will be added shortly."}
              </p>
            </div>

            {/* 在庫状況とカートボタン */}
            <div className="space-y-4">
              {product.soldOut ? (
                <>
                  <span className="text-gray-500 text-sm font-medium">
                    ● Sold Out
                  </span>
                  <button
                    disabled
                    className="w-full px-8 py-4 bg-gray-300 text-white font-medium cursor-not-allowed"
                  >
                    Sold Out — Unavailable
                  </button>
                </>
              ) : (
                <>
                  <span className="text-green-700 text-sm font-medium">
                    ● In Stock
                  </span>
                  <AddToCartButton 
                    productId={product.id}
                    productName={product.name}
                    price={product.price}
                    image={product.image}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}