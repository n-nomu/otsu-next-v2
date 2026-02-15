import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif mb-4">乙 otsu</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Handcrafted Bizen ware from Okayama, Japan.<br />
              Bridging ancient artistry to modern living.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-widest mb-4 text-white/80">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#shop" className="text-white/60 hover:text-white transition-colors text-sm">
                  Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-widest mb-4 text-white/80">About</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about-bizen" className="text-white/60 hover:text-white transition-colors text-sm">
                  About Bizen
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-white/60 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-widest mb-4 text-white/80">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/legal/shipping" className="text-white/60 hover:text-white transition-colors text-sm">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/legal/returns" className="text-white/60 hover:text-white transition-colors text-sm">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="/legal/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/legal/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="text-white/40 text-sm">
            © {currentYear} 乙 otsu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}