import { products, getProductById } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AddToCartButton } from "@/components/AddToCartButton";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

interface Props {
  params: { id: string };
}

export default function ProductPage({ params }: Props) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      {/* ヘッダー：ロゴのみ・左寄せ・墨黒 */}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="relative aspect-[4/5] bg-white rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <p className="text-[#B8735A] text-sm uppercase tracking-widest mb-2">
                Selected Work
              </p>
              <h1 className="font-serif text-4xl text-[#1A1A1A] mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-sans font-light text-[#1A1A1A]">
                £{product.price}
              </p>
            </div>

            <div className="prose prose-stone mb-8">
              <p className="text-[#1A1A1A]/70 leading-relaxed">
                {product.description || "Crafted in Bizen, Okayama. Wood-fired for 14 days in a traditional climbing kiln. Each piece is unique, shaped by earth, fire, and serendipity."}
              </p>
            </div>

            <div className="mb-8">
              <span className="text-green-700 text-sm font-medium">
                ● In Stock
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <AddToCartButton 
                productId={product.id}
                productName={product.name}
                price={product.price}
                image={product.image}
              />
            </div>

            <div className="mt-12 pt-8 border-t border-[#1A1A1A]/10">
              <h3 className="font-sans text-lg text-[#1A1A1A] mb-4">
                Craftsmanship Details
              </h3>
              <ul className="space-y-2 text-sm text-[#1A1A1A]/70">
                <li>• Handcrafted in Bizen, Okayama Prefecture</li>
                <li>• Wood-fired for 14 days in traditional noborigama</li>
                <li>• Unglazed surface develops patina with use</li>
                <li>• One-of-a-kind piece (variations in color and texture)</li>
                <li>• Shipping from London within 3-5 business days</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}