import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="heading-section text-charcoal mb-2">
            Order Cancelled
          </h1>
          <p className="text-warm-gray">
            Your order was not completed. No charges have been made.
          </p>
        </div>
        
        <div className="space-y-3">
          <p className="text-sm text-warm-gray">
            If you have any questions, please contact us.
          </p>
          <Link 
            href="/#shop"
            className="inline-block bg-charcoal hover:bg-charcoal/90 text-white py-3 px-6 rounded-lg font-sans text-sm transition-colors"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}