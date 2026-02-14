import Link from 'next/link';
import { CreditCard } from 'lucide-react';

interface FooterProps {
  onNavigate?: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Shop', section: 'home' },
    { label: 'About Bizen', section: 'about-bizen' },
    { label: 'About Us', section: 'about-us' },
    { label: 'Contact', section: 'contact' },
  ];

  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    } else {
      window.location.hash = section;
    }
  };

  return (
    <footer className="w-full bg-charcoal py-12 border-t border-white/10">
      <div className="w-full px-6 lg:px-12">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-10">
          {navLinks.map((link) => (
            <button
              key={link.section}
              onClick={() => handleNavClick(link.section)}
              className="font-sans text-sm text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-t border-white/10 pt-10">
          {/* Left - Logo & Copyright */}
          <div className="text-center md:text-left">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center justify-center md:justify-start gap-2 mb-3"
            >
              <span className="font-jp text-xl text-white">乙</span>
              <span className="font-serif text-xl text-white lowercase">
                otsu
              </span>
            </button>
            <p className="font-sans text-xs text-white/50">
              © {currentYear} otsu. All rights reserved.
            </p>
          </div>

          {/* Center - Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 items-center">
            <Link
              href="/legal/terms"
              className="font-sans text-xs text-white/50 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/legal/privacy"
              className="font-sans text-xs text-white/50 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/shipping"
              className="font-sans text-xs text-white/50 hover:text-white transition-colors"
            >
              Shipping
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="/legal/returns"
              className="font-sans text-xs text-white/50 hover:text-white transition-colors"
            >
              Returns
            </Link>
            <Link
              href="#"
              className="font-sans text-xs text-white/50 hover:text-white transition-colors"
            >
              Trade Terms
            </Link>
          </div>

          {/* Right - Payment Methods */}
          <div className="flex justify-center md:justify-end gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded">
              <CreditCard className="w-4 h-4 text-white/70" />
              <span className="font-sans text-xs text-white/70">Stripe</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded">
              <span className="font-sans text-xs text-white/70">Apple Pay</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded">
              <span className="font-sans text-xs text-white/70">Google Pay</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="font-sans text-xs text-white/40">
            Prices include VAT for UK orders. International orders may be subject to import duties.
          </p>
        </div>
      </div>
    </footer>
  );
}