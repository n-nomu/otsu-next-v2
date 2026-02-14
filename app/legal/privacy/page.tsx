import Link from "next/link";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-warm-gray">Last updated: February 14, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-stone max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              1. Our Commitment to Your Privacy
            </h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              At 乙 otsu, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you 
              visit our website or make a purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              2. Information We Collect
            </h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              We collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-warm-gray space-y-2 mb-4">
              <li><strong>Personal Information:</strong> Name, email address, shipping address, and phone number when you place an order.</li>
              <li><strong>Payment Information:</strong> Processed securely by Stripe. We do not store your full credit card details on our servers.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and device information to improve our website experience.</li>
              <li><strong>Cookies:</strong> Small files stored on your device to remember your preferences and shopping cart.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              We use your data to:
            </p>
            <ul className="list-disc pl-6 text-warm-gray space-y-2 mb-4">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your purchase</li>
              <li>Improve our website and customer experience</li>
              <li>Comply with legal obligations (tax, accounting)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              4. Data Sharing
            </h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              We share your information only with:
            </p>
            <ul className="list-disc pl-6 text-warm-gray space-y-2 mb-4">
              <li><strong>Stripe:</strong> For secure payment processing</li>
              <li><strong>Shipping carriers:</strong> (Royal Mail, DHL, etc.) To deliver your order</li>
              <li><strong>Legal authorities:</strong> When required by law</li>
            </ul>
            <p className="text-warm-gray leading-relaxed">
              We never sell your personal data to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              5. Your Rights (GDPR)
            </h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              Under UK and EU data protection laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-warm-gray space-y-2 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data ("Right to be forgotten")</li>
              <li>Object to processing</li>
              <li>Data portability</li>
            </ul>
            <p className="text-warm-gray leading-relaxed">
              To exercise these rights, contact us at privacy@otsu.shop
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              6. Cookies
            </h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              We use essential cookies to operate our shopping cart and checkout process. 
              By using our site, you consent to these necessary cookies. We do not use 
              tracking cookies for advertising purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              7. Data Retention
            </h2>
            <p className="text-warm-gray leading-relaxed">
              We retain your order information for 7 years to comply with UK tax and accounting laws. 
              After this period, your data is securely deleted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-sans font-medium text-charcoal mb-4">
              8. Contact Us
            </h2>
            <p className="text-warm-gray leading-relaxed">
              For privacy-related inquiries:<br />
              Email: privacy@otsu.shop<br />
              Address: [Your London Address]<br />
              Company: 乙 otsu Ltd.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}