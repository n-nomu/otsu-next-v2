"use client"; 
import { useState, useEffect } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  currentSection?: string;
  onNavigate?: (section: string) => void;
}

export function Header({ currentSection = 'home', onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if we're on the homepage (no hash or #home)
  const isHomePage = currentSection === 'home' || currentSection === '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine header style based on page and scroll
  const getHeaderStyle = () => {
    if (isHomePage) {
      return isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm'
        : 'bg-transparent';
    }
    // For other pages, always show white header
    return 'bg-white/95 backdrop-blur-md shadow-sm';
  };

  const getTextColor = () => {
    if (isHomePage) {
      return isScrolled ? 'text-charcoal' : 'text-white';
    }
    return 'text-charcoal';
  };

  const getMutedTextColor = () => {
    if (isHomePage) {
      return isScrolled ? 'text-warm-gray' : 'text-white/70';
    }
    return 'text-warm-gray';
  };

  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    } else {
      window.location.hash = section;
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Shop', section: 'home', scrollTo: 'shop' },
    { label: 'About Bizen', section: 'about-bizen' },
    { label: 'About Us', section: 'about-us' },
    { label: 'Contact', section: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getHeaderStyle()}`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group"
          >
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
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavClick(link.section)}
                className={`font-sans text-sm tracking-wide transition-colors duration-300 hover:opacity-70 ${getTextColor()}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Language Switcher - Desktop */}
            <span
              className={`hidden lg:block font-sans text-xs transition-colors duration-500 ${getMutedTextColor()}`}
            >
              EN / JP
            </span>

            {/* Trade Link - Desktop */}
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden lg:block font-sans text-xs text-terracotta hover:text-terracotta/80 transition-colors"
            >
              Trade
            </button>

            {/* Shopping Bag */}
            <button
              className={`p-2 transition-colors duration-500 ${getTextColor()}`}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className={`md:hidden p-2 transition-colors duration-500 ${getTextColor()}`}
                >
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-off-white">
                <div className="flex flex-col h-full pt-12">
                  <nav className="flex flex-col gap-6">
                    <button
                      onClick={() => handleNavClick('home')}
                      className="font-serif text-2xl text-charcoal text-left hover:text-terracotta transition-colors text-left"
                    >
                      Home
                    </button>
                    <button
                      onClick={() => handleNavClick('about-bizen')}
                      className="font-serif text-2xl text-charcoal text-left hover:text-terracotta transition-colors text-left"
                    >
                      About Bizen
                    </button>
                    <button
                      onClick={() => handleNavClick('about-us')}
                      className="font-serif text-2xl text-charcoal text-left hover:text-terracotta transition-colors text-left"
                    >
                      About Us
                    </button>
                    <button
                      onClick={() => handleNavClick('contact')}
                      className="font-serif text-2xl text-charcoal text-left hover:text-terracotta transition-colors text-left"
                    >
                      Contact
                    </button>
                  </nav>
                  <div className="mt-auto pb-8">
                    <div className="flex items-center gap-4 text-sm text-warm-gray">
                      <span>EN / JP</span>
                      <button 
                        onClick={() => handleNavClick('contact')}
                        className="text-terracotta"
                      >
                        Trade
                      </button>
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
