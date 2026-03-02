import Link from "next/link";

export default function ReturnsPolicy() {
  return (
    <div className="min-h-screen bg-[#F5F3EF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-[#1A1A1A]/60 hover:text-[#B8735A] transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-serif text-[#1A1A1A] mb-8 text-center">
          Returns & Refunds Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-8">
          <p className="text-sm text-gray-500">Last Updated: February 14, 2026</p>

          <section>
            <h2 className="text-2xl font-serif mb-4">1. Our Products</h2>
            <p>
              Every piece at 乙 otsu is a one-of-a-kind Bizen ware artwork, handcrafted by individual artists in Okayama, Japan. Each carries unique characteristics from the firing process—subtle colour variations, natural textures, and forms that can never be exactly replicated. This uniqueness is the soul of Bizen ware.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">2. Our Approach to Returns</h2>
            <p>
              Because each piece is irreplaceable, we generally cannot accept returns for personal preference. We photograph and describe each item carefully to help you know exactly what will arrive at your door.
            </p>
            <p className="mt-4">
              We do not accept returns for:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Change of mind or personal preference</li>
              <li>Natural variations in colour, texture, or glaze patterns (<em>yohen</em> or <em>goma</em>)</li>
              <li>Size expectations (exact dimensions are provided with each listing)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">3. If Your Item Arrives Damaged</h2>
            <p>
              Should your piece be damaged during shipping, we are here to help. We accept returns solely for transit damage, and will provide a full refund or replacement (if a similar piece is available).
            </p>
            <p className="mt-4">
              To ensure we can assist you:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Please report any damage within 48 hours of delivery</li>
              <li>Photograph the packaging and item to help us understand what occurred</li>
              <li>We cannot provide prepaid shipping labels for international returns. Please ship the item at your expense using a trackable service (EMS, DHL, or FedEx), and retain your receipt. <strong>We will reimburse your return shipping cost upon safe receipt of the item at our studio.</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">4. How Refunds Work</h2>
            <p>
              To process your request, we kindly ask that the item be returned to our studio. Once we receive and inspect the piece, we will issue your refund to the original payment method within 14 business days.
            </p>
            <p className="mt-4">
              For items over £500, the process may take 2-4 weeks as we coordinate with our shipping partners to ensure everything is handled properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">5. Caring for Returned Pieces</h2>
            <p>
              Returned items are treated with respect for the artist&apos;s work. These pieces are never resold. Instead, they are either returned to the artist in Okayama or safely retired from circulation, preserving the integrity of both our collection and your purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">6. Lost Packages</h2>
            <p>
              If your package does not arrive within 30 days of shipping, we will file a claim with our carrier and offer you a full refund or store credit immediately. In this case, no return is necessary.
            </p>
          </section>

          <section className="border-t border-[#1A1A1A]/10 pt-8 mt-12">
            <p className="font-medium">Questions?</p>
            <p className="mt-2">
              We are always happy to discuss any concerns before or after your purchase.<br />
              Contact: <a href="mailto:nomura41985@gmail.com" className="text-[#B8735A] hover:underline">info@otsu-japan.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}