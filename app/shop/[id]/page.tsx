import { products, getProductById } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CheckoutButton } from "@/components/CheckoutButton";
// 静的エクスポート用：ビルド時に全パスを生成
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
    <div className="min-h-screen bg-off-white">
      {/* Header spacer */}
      <div className="h-20" />
      
      <div className="w-full px-6 lg:px-12 py-12 lg:py-20">
        {/* Back link */}
        <Link 
          href="/#shop" 
          className="inline-flex items-center text-warm-gray hover:text-terracotta mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Section */}
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

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <p className="text-terracotta text-sm uppercase tracking-widest mb-2">
                Selected Work
              </p>
              <h1 className="heading-section text-charcoal mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-sans font-light text-charcoal">
                £{product.price}
              </p>
            </div>

            {/* Description */}
            <div className="prose prose-stone mb-8">
              <p className="text-warm-gray leading-relaxed">
                {product.description || "Crafted in Bizen, Okayama. Wood-fired for 14 days in a traditional climbing kiln. Each piece is unique, shaped by earth, fire, and serendipity."}
              </p>
            </div>

            {/* Stock status */}
            <div className="mb-8">
              <span className="text-green-700 text-sm font-medium">
                ● In Stock
              </span>
            </div>

            {/* Actions */}
<div className="flex flex-col sm:flex-row gap-4">
  <CheckoutButton 
    productId={product.id}
    productName={product.name}
    price={product.price}
  />
</div>


            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-warm-gray/30">
              <h3 className="font-sans text-lg text-charcoal mb-4">
                Craftsmanship Details
              </h3>
              <ul className="space-y-2 text-sm text-warm-gray">
                <li>• Handcrafted in Bizen, Okayama Prefecture</li>
                <li>• Wood-fired for 14 days in traditional noborigama</li>
                <li>• Unglazed surface develops patina with use</li>
                <li>• One-of-a-kind piece (variations in color and texture)</li>
                <li>• Shipping from London within 3-5 business days</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}