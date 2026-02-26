"use client";
import { useEffect, useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

const heroImages = [
  '/hero_slider_bowl.jpg',
  '/hero_slider_kiln_interior.jpg',
  '/hero_slider_hands.jpg',
  '/hero_slider_london.jpg',
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const scrollToShop = () => {
    const element = document.getElementById('shop');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-charcoal">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Bizen ware ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* FIXED Centered Content (appears on ALL slides) */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          
          {/* === SOFT LAUNCH BANNER: 本格ローンチ時にこのブロックを削除 === */}
          {showBanner && (
            <div className="relative inline-block mb-8 px-8 py-3 bg-[#1A1A1A]/90 border-b-2 border-[#B8735A] rounded-sm animate-fade-in">
              <p className="font-serif text-sm md:text-base text-[#F5F3EF] tracking-wide">
                Preview Site — <span className="text-[#B8735A]">Soft Launch</span>
                <span className="mx-2 opacity-50">|</span>
                Order function coming soon
              </p>
              <button 
                onClick={() => setShowBanner(false)}
                className="absolute -right-2 -top-2 w-6 h-6 flex items-center justify-center text-[#F5F3EF]/60 hover:text-[#F5F3EF] transition-colors"
                aria-label="Close banner"
              >
                <X size={16} />
              </button>
            </div>
          )}
          {/* === SOFT LAUNCH BANNER END === */}

          {/* Primary Headline */}
          <h1
            className={`font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] tracking-tight mb-6 drop-shadow-lg transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Earth, Fire, and<br />Serendipity
          </h1>

          {/* Secondary Text */}
          <p
            className={`font-sans text-lg md:text-xl text-white/90 tracking-wide mb-3 transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Handcrafted Excellence from Bizen, Okayama
          </p>

          {/* Tertiary Text (italic) */}
          <p
            className={`font-serif text-base md:text-lg text-white/70 italic mb-10 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            One-of-a-kind masterpieces born from ancient traditions
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={scrollToShop}
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-charcoal font-sans text-sm font-medium rounded-full transition-all duration-300 hover:bg-terracotta hover:text-white"
            >
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronDown className="w-6 h-6 text-white/60 animate-bounce-subtle" />
      </div>
    </section>
  );
}