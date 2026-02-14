import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="heading-section text-charcoal mb-2">
            Thank You
          </h1>
          <p className="text-warm-gray">
            Your order has been received. We appreciate your trust in Bizen craftsmanship.
          </p>
        </div>
        
        <div className="space-y-3">
          <p className="text-sm text-warm-gray">
            A confirmation email will be sent shortly.
          </p>
          <Link 
            href="/#shop"
            className="inline-block bg-charcoal hover:bg-charcoal/90 text-white py-3 px-6 rounded-lg font-sans text-sm transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}