import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-off-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="text-warm-gray hover:text-terracotta transition-colors text-sm"
          >
            ← Back to Home
          </Link>
          <h1 className="heading-section text-charcoal mt-8 mb-4">
            Terms of Service
          </h1>
          <p className="text-warm-gray">Last updated: February 14, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-stone max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              1. About 乙 otsu
            </h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              乙 otsu is a gallery specialising in Bizen ware (Bizen-yaki), 
              traditional Japanese ceramics from Okayama Prefecture. Each piece is handcrafted 
              by artisans and fired in wood-burning climbing kilns (noborigama) for 14 days.
            </p>
            <p className="text-warm-gray leading-relaxed">
              <strong>Company:</strong> 乙 otsu<br />
              <strong>Address:</strong> 545-20 Masuda, Higashi-ku, Okayama-shi, Okayama-ken, Japan<br />
              <strong>Email:</strong> info@otsu-japan.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              2. The Nature of Bizen Ware
            </h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              Bizen ware is distinguished by its unglazed surface and the natural patterns 
              created by fire and ash (yohen). Please understand the following characteristics 
              before purchasing:
            </p>
            <ul className="list-disc pl-6 text-warm-gray space-y-2 mb-4">
              <li><strong>Variations:</strong> Each piece is unique. Colors, patterns, and textures vary due to kiln placement and firing conditions.</li>
              <li><strong>Kintsugi & Crackle:</strong> Fine cracks (kan-nyu) and natural imperfections are intentional features, not defects.</li>
              <li><strong>Size Variations:</strong> Handmade items may have slight size differences (±5mm) from listed measurements.</li>
              <li><strong>Patina Development:</strong> Colors deepen and surfaces become more lustrous with use over time.</li>
            </ul>
            <p className="text-warm-gray leading-relaxed italic">
              These variations are the essence of Bizen craftsmanship and are not grounds for returns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              3. Orders & Payment
            </h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              <strong>Acceptance:</strong> Your order constitutes an offer to purchase. 
              We reserve the right to refuse orders if items are unavailable or pricing errors occur.
            </p>
            <p className="text-warm-gray leading-relaxed mb-4">
              <strong>Payment:</strong> We accept major credit cards via Stripe. Payment is processed 
              immediately upon order confirmation.
            </p>
            <p className="text-warm-gray leading-relaxed">
              <strong>Pricing:</strong> All prices include all applicable taxes and import duties. 
              Shipping costs are calculated separately at checkout. 
              No additional charges will be due upon delivery.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              4. Shipping & Delivery
            </h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              <strong>Processing:</strong> Orders are processed as quickly as possible. 
              Tracking information will be provided via email once your order is dispatched.<br />
              <strong>Delivery:</strong> We ship from Okayama, Japan via Japan Post or DHL.<br />
              <strong>Worldwide:</strong> 7-14 business days (varies by destination and customs clearance)<br />
              <em>Exact delivery estimates will be provided via email after order confirmation.</em>
            </p>
            <p className="text-warm-gray leading-relaxed">
              <strong>Packaging:</strong> Items are carefully packed with protective materials suitable 
              for fragile ceramics. However, we are not responsible for shipping carrier delays.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              5. Returns & Refunds
            </h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              Due to the one-of-a-kind nature of our products:
            </p>
            <ul className="list-disc pl-6 text-warm-gray space-y-2 mb-4">
              <li><strong>Damaged Items:</strong> If your item arrives broken, contact us within 48 hours with photos. We will offer a replacement (if available) or full refund.</li>
              <li><strong>Change of Mind:</strong> Returns are not accepted for "change of mind" as each piece is unique and cannot be restocked.</li>
              <li><strong>Not as Described:</strong> If the item significantly differs from the description (excluding natural variations mentioned in Section 2), contact us within 7 days.</li>
            </ul>
            <p className="text-warm-gray leading-relaxed">
              See our full <Link href="/legal/returns" className="text-terracotta hover:underline">Returns Policy</Link> for details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              6. Intellectual Property
            </h2>
            <p className="text-warm-gray leading-relaxed">
              All content on this website (images, text, logos) is the property of 乙 otsu 
              and protected by international copyright laws. You may not reproduce, 
              distribute, or use our content without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-warm-gray leading-relaxed">
              乙 otsu's liability is limited to the purchase price of the item. We are not 
              liable for indirect, incidental, or consequential damages. Ceramic items are 
              inherently fragile; proper handling is the customer's responsibility after delivery.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              8. Changes to Terms
            </h2>
            <p className="text-warm-gray leading-relaxed">
              We may update these terms occasionally. Changes are effective immediately upon 
              posting. Continued use of our site constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              9. Contact
            </h2>
            <p className="text-warm-gray leading-relaxed">
              Questions about these terms?<br />
              Email: info@otsu-japan.com<br />
              We aim to respond within 2 business days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}