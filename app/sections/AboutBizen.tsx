"use client";
import React from 'react';

export const AboutBizen = () => {
  return (
    <section id="about-bizen" className="bg-[#F5F3EF] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* メインヘッダー */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl text-[#1A1A1A] mb-6 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            The Art of Bizen-yaki
          </h1>
          <p className="text-lg md:text-xl text-[#1A1A1A]/80 tracking-widest uppercase"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            The Dialogue of Earth and Fire — Unglazed Beauty for a Millennium
          </p>
          <div className="w-24 h-px bg-[#B8735A] mx-auto mt-8"></div>
        </div>

        {/* イントロダクション */}
        <div className="mb-20 text-center">
          <p className="text-lg md:text-xl leading-relaxed text-[#1A1A1A]/90"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            An extraordinary art form born solely from the elemental force of clay and flame, 
            without a single drop of glaze.
          </p>
        </div>

        {/* セクション1: Natural Abstraction */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 pb-4 border-b border-[#1A1A1A]/20"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            Natural Abstraction
          </h2>
          <p className="text-base md:text-lg leading-loose text-[#1A1A1A]/85 mb-6"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            In the intense 1,200°C heat of the kiln, the iron within the clay reacts with pine ash 
            to create unpredictable patterns. No two pieces of Bizen-yaki are alike. Each is a unique 
            abstract painting, co-created by the artisan and nature over a rigorous two-week firing process. 
            The flames etch strokes that no human hand could replicate—soft gradients of crimson, amber, 
            and charcoal that dance across the surface in silent, eternal motion.
          </p>
        </div>

        {/* セクション2: A Living Texture */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 pb-4 border-b border-[#1A1A1A]/20"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            A Living Texture: Enhancing the Senses
          </h2>
          <p className="text-base md:text-lg leading-loose text-[#1A1A1A]/85 mb-6"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            The unglazed surface of Bizen-yaki features microscopic pores that allow the pottery to 
            'breathe.' This natural aeration is said to preserve the fine, creamy head of a beer and 
            soften the profile of spirits, allowing your favourite beverages to reveal deeper, mellower 
            notes with every sip. The tactile quality—cool, smooth, yet distinctly organic—grounds the 
            moment in physical reality.
          </p>
        </div>

        {/* セクション3: Timeless Solidity */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 pb-4 border-b border-[#1A1A1A]/20"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            Timeless Solidity: An Heirloom for Generations
          </h2>
          <p className="text-base md:text-lg leading-loose text-[#1A1A1A]/85 mb-6"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            Forged through weeks of patient firing, the dense, stone-like body of Bizen-yaki possesses 
            a quiet strength that transcends the fragility of ordinary ceramics. This is not mere hardness, 
            but a living resilience that deepens with age—much like the bonds it helps create around your 
            table. Its natural porosity also keeps water remarkably fresh, allowing flowers to maintain 
            their vitality longer than in conventional vessels.
          </p>
        </div>

        {/* セクション4: One of Japan's Six Ancient Kilns */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 pb-4 border-b border-[#1A1A1A]/20"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            One of Japan's Six Ancient Kilns
          </h2>
          <p className="text-base md:text-lg leading-loose text-[#1A1A1A]/85"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            Located in Bizen, Okayama, this lineage traces back to the 5th-century Sue ware. For over 
            a millennium, Bizen has remained unbroken, protecting the primordial purity of 'Earth and Fire.' 
            <span className="font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}> otsu </span> 
            brings this timeless spirit into the heart of contemporary London living.
          </p>
        </div>

      </div>
    </section>
  );
};

