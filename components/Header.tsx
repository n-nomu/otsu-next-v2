"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { getCartCount } from '@/lib/cart';
import { usePathname } from 'next/navigation';
import { useCurrency } from '@/lib/currency-context';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const pathname = usePathname();
  const { currency, toggleCurrency } = useCurrency();

  // トップページかどうかを判定
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    // カート数を更新
    const updateCartCount = () => {
      setCartCount(getCartCount());
    };

    // 初期表示時にカート数を取得
    updateCartCount();

    // スクロール監視
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // カート変更イベントを監視
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const getHeaderStyle = () => {
    if (isHomePage) {
      return isScrolled
        ? 'bg-[#F5F3EF]/95 backdrop-blur-md shadow-sm'
        : 'bg-transparent';
    }
    return 'bg-[#F5F3EF]/95 backdrop-blur-md shadow-sm';
  };

  const getTextColor = () => {
    if (isHomePage) {
      return isScrolled ? 'text-[#1A1A1A]' : 'text-white';
    }
    return 'text-[#1A1A1A]';
  };

  const getMutedTextColor = () => {
    if (isHomePage) {
      return isScrolled ? 'text-[#1A1A1A]/70' : 'text-white/70';
    }
    return 'text-[#1A1A1A]/70';
  };

  // ナビゲーションリンクを閉じる
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Shop', href: '/#shop' },
    { label: 'About Bizen', href: '/about-bizen' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getHeaderStyle()}`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className={`font-jp text-2xl lg:text-3xl font-bold transition-colors duration-500 ${getTextColor()}`}
            >
              乙
            </span>
            <span
              className={`font-serif text-2xl lg:text-3xl lowercase transition-colors duration-500 ${getTextColor()}`}
            >
              otsu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm tracking-wide transition-colors duration-300 hover:opacity-70 ${getTextColor()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Currency Toggle - Desktop */}
            <button
              onClick={toggleCurrency}
              className={`hidden lg:block font-sans text-xs transition-colors duration-300 hover:opacity-70 ${getTextColor()}`}
            >
              {currency === 'GBP' ? '£ GBP' : '$ USD'}
            </button>

            {/* Language Switcher - Desktop */}
            <span
              className={`hidden lg:block font-sans text-xs transition-colors duration-500 ${getMutedTextColor()}`}
            >
              EN / JP
            </span>

            {/* Trade Link - Desktop */}
            <Link
              href="/contact"
              className="hidden lg:block font-sans text-xs text-[#B8735A] hover:text-[#B8735A]/80 transition-colors"
            >
              Trade
            </Link>

            {/* Shopping Bag with Cart Count */}
            <Link href="/cart" className={`relative p-2 transition-colors duration-500 ${getTextColor()}`}>
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#B8735A] text-white text-xs rounded-full flex items-center justify-center font-sans">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className={`md:hidden p-2 transition-colors duration-500 ${getTextColor()}`}
                >
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-[#F5F3EF]">
                <div className="flex flex-col h-full pt-12">
                  <nav className="flex flex-col gap-6">
                    <Link
                      href="/"
                      onClick={closeMobileMenu}
                      className="font-serif text-2xl text-[#1A1A1A] text-left hover:text-[#B8735A] transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about-bizen"
                      onClick={closeMobileMenu}
                      className="font-serif text-2xl text-[#1A1A1A] text-left hover:text-[#B8735A] transition-colors"
                    >
                      About Bizen
                    </Link>
                    <Link
                      href="/about-us"
                      onClick={closeMobileMenu}
                      className="font-serif text-2xl text-[#1A1A1A] text-left hover:text-[#B8735A] transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact"
                      onClick={closeMobileMenu}
                      className="font-serif text-2xl text-[#1A1A1A] text-left hover:text-[#B8735A] transition-colors"
                    >
                      Contact
                    </Link>
                  </nav>
                  <div className="mt-auto pb-8">
                    <div className="flex items-center gap-4 text-sm text-[#1A1A1A]/70">
                      <button 
                        onClick={() => {
                          toggleCurrency();
                          closeMobileMenu();
                        }}
                        className="text-[#1A1A1A] hover:text-[#B8735A] transition-colors"
                      >
                        {currency === 'GBP' ? '£ GBP' : '$ USD'}
                      </button>
                      <span>EN / JP</span>
                      <Link 
                        href="/contact"
                        onClick={closeMobileMenu}
                        className="text-[#B8735A]"
                      >
                        Trade
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}