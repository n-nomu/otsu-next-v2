import Link from "next/link";

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EF] py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-[#1A1A1A]/60 hover:text-[#B8735A] transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-3xl font-light text-[#1A1A1A] mb-12 font-serif">
          Shipping & Delivery
        </h1>
        
        <div className="space-y-8 text-[#1A1A1A]/80 leading-relaxed">
          <section>
            <h2 className="text-lg font-medium text-[#1A1A1A] mb-3">Origin</h2>
            <p>545-20 Masuda, Higashi-ku, Okayama-shi, Okayama-ken, Japan</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1A1A1A] mb-3">Shipping Method</h2>
            <p>Japan Post International ePacket (with tracking)<br />
            Final delivery by your local postal service</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1A1A1A] mb-3">Delivery Areas</h2>
            <p>Worldwide</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1A1A1A] mb-3">Delivery Time</h2>
            <p>7-14 business days (varies by destination)<br />
            Business days: Monday to Friday (excluding Japanese and local holidays)</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1A1A1A] mb-3">Shipping Rates</h2>
            <p>Calculated automatically at checkout based on weight and destination</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1A1A1A] mb-3">Taxes & Duties</h2>
            <p><strong>DDP (Delivered Duty Paid):</strong> All taxes and duties are included in the displayed price.<br />
            No additional charges upon arrival.</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1A1A1A] mb-3">Tracking</h2>
            <p>Tracking number will be sent via email after dispatch</p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-[#1A1A1A] mb-3">Address Requirements</h2>
            <p>Please enter your address in English</p>
          </section>

          <section className="pt-4 border-t border-[#1A1A1A]/10 text-sm text-[#1A1A1A]/60">
            <p>*Delivery may be delayed due to customs inspection, weather conditions, or holidays.<br />
            *For damaged items, please refer to our Returns Policy.</p>
          </section>
        </div>
      </div>
    </main>
  );
}