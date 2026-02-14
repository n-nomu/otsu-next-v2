"use client";
import React from 'react';

export const AboutUs = () => {
  return (
    <section id="about-us" className="bg-[#F5F3EF] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* メインヘッダー */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl text-[#1A1A1A] mb-6 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            About Us
          </h1>
          <p className="text-lg md:text-xl text-[#1A1A1A]/80 tracking-widest uppercase"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            otsu: The Spirit of Refined Curiosity
          </p>
          <div className="w-24 h-px bg-[#B8735A] mx-auto mt-8"></div>
        </div>

        {/* セクション1: Philosophy */}
        <div className="mb-20">
          <p className="text-base md:text-lg leading-loose text-[#1A1A1A]/85 mb-6"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            At otsu, our philosophy is rooted in the Japanese concept of "Otsu"—a word that describes 
            something subtly sophisticated, uniquely stylish, and beyond the ordinary. It is a tribute 
            to that "something extra" that turns a simple object into a meaningful experience.
          </p>
          <p className="text-base md:text-lg leading-loose text-[#1A1A1A]/85"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            We believe that true business is about addressing the quiet longings of daily life and 
            enriching the human experience. Our mission is not merely to sell objects, but to bring 
            harmony and a sense of "richness" to your living space. We act with unwavering integrity, 
            ensuring that every piece we bring from Japan to the global stage is a testament to our 
            commitment to quality and sincerity.
          </p>
        </div>

        {/* セクション2: The Meaning of 乙 */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 pb-4 border-b border-[#1A1A1A]/20"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            The Meaning of 乙
          </h2>
          <p className="text-base md:text-lg leading-loose text-[#1A1A1A]/85 mb-6"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            In Japanese culture, the word <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>乙 otsu</span> carries a unique philosophical weight. 
            Beyond its literal meaning, it is used to describe something that possesses a quiet, 
            sophisticated charm—tastefully unconventional and deeply refined. When we say something 
            is "Otsu," we are acknowledging a subtle elegance that stands apart from the ordinary, 
            a beauty that reveals itself slowly to those who take the time to look.
          </p>
          <p className="text-base md:text-lg leading-loose text-[#1A1A1A]/85"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            It is this spirit of discovering "the exceptional in the simple" that defines everything we do.
          </p>
        </div>

        {/* セクション3: Humanity in the Age of AI */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 pb-4 border-b border-[#1A1A1A]/20"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            Humanity in the Age of AI
          </h2>
          <p className="text-base md:text-lg leading-loose text-[#1A1A1A]/85 mb-6"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            We live in an era defined by digital acceleration and artificial intelligence. While these 
            advancements offer boundless convenience, they also stir a profound longing for something 
            tangible, something human.
          </p>
          <p className="text-base md:text-lg leading-loose text-[#1A1A1A]/85"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            We believe that now, more than ever, the world needs the warmth of traditional craftsmanship—
            objects that carry the weight of history and the breath of the artisans who made them. 
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}> 乙 otsu </span> 
            was founded on the belief that true luxury in the modern age lies not in algorithmic 
            perfection, but in the imprint of the human hand.
          </p>
        </div>

        {/* セクション4: Connecting Ancient Soul to Modern Living */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 pb-4 border-b border-[#1A1A1A]/20"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            Connecting Ancient Soul to Modern Living
          </h2>
          <p className="text-base md:text-lg leading-loose text-[#1A1A1A]/85 mb-6"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            Japan possesses a wealth of timeless crafts that have yet to be discovered by the world. 
            otsu serves as a bridge, connecting the ancient soul of Japanese artisans with the modern 
            lifestyles of London and beyond.
          </p>
          <p className="text-base md:text-lg leading-loose text-[#1A1A1A]/85 mb-8"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            By introducing the profound beauty of Bizen-yaki, we aim to offer a quiet, elegant solution 
            to the longing for authenticity in a fast-paced world. We invite you to discover the subtle 
            sophistication that lies within the clay, the flame, and the hands of our craftsmen—where 
            tradition and modern living coexist in perfect harmony.
          </p>
          
          {/* 締めくくり */}
          <div className="text-center pt-8">
            <p className="text-2xl md:text-3xl text-[#1A1A1A] tracking-wide"
               style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
              This is 乙 otsu.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

