"use client";
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/products';

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <Link href={`/shop/${product.id}`}>
      <div
        ref={cardRef}
        className={`group cursor-pointer transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${product.soldOut ? 'opacity-75' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-off-white mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-transform duration-700 ${
              isHovered && !product.soldOut ? 'scale-105' : 'scale-100'
            } ${product.soldOut ? 'grayscale-[30%]' : ''}`}
          />
          
          {/* Sold Out Badge */}
          {product.soldOut && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#1A1A1A] text-white text-xs font-medium tracking-wider uppercase">
              Sold Out
            </div>
          )}
          
          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${
              isHovered && !product.soldOut ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="px-6 py-2 bg-white text-charcoal text-sm font-medium rounded-full">
              View Detail
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <h3 className={`font-sans text-sm group-hover:text-terracotta transition-colors ${
            product.soldOut ? 'text-gray-500' : 'text-charcoal'
          }`}>
            {product.name}
          </h3>
          {product.soldOut ? (
            <p className="font-sans text-lg font-medium text-gray-400">
              Sold Out
            </p>
          ) : (
            <p className="font-sans text-lg font-medium text-terracotta">
              £{product.price}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export function Shop() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="shop"
      ref={sectionRef}
      className="w-full bg-white py-24 lg:py-32"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div
          className={`flex items-center justify-between mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="heading-section text-charcoal">Selected Works</h2>
          <button className="hidden sm:flex items-center gap-2 font-sans text-sm text-warm-gray hover:text-terracotta transition-colors group">
            Shop All
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Mobile Shop All Link */}
        <div className="sm:hidden mt-8 text-center">
          <button className="inline-flex items-center gap-2 font-sans text-sm text-warm-gray hover:text-terracotta transition-colors">
            Shop All
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* B2B Note */}
        <div className="mt-16 text-center">
          <p className="font-sans text-sm text-warm-gray">
            Wholesale inquiries welcome.{ ' ' }
            <button
              onClick={() => {
                window.location.hash = 'contact';
              }}
              className="text-terracotta hover:underline"
            >
              Contact us for trade pricing
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}