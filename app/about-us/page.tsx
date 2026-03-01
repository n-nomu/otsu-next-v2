import Link from 'next/link';
import { Footer } from '@/components/Footer';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <header className="w-full py-6 px-8 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-serif text-[#1A1A1A] tracking-wider">
            乙 otsu
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl text-[#1A1A1A] mb-6 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            About Us
          </h1>
          <p className="text-lg md:text-xl text-[#1A1A1A]/80 tracking-widest uppercase"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            otsu: The Spirit of Refined Curiosity
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 font-serif">Philosophy</h2>
          <p className="text-[#1A1A1A]/80 leading-relaxed mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            乙 otsu is based in Bizen, Okayama Prefecture, where the thousand-year tradition 
            of Bizen-yaki continues to thrive. We operate on a simple principle: honest business, 
            transparent sourcing, and respect for both maker and buyer.
          </p>
          <p className="text-[#1A1A1A]/80 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            We work directly with independent potters in Bizen, handling each piece with care 
            and ensuring that the artistry of earth and fire reaches those who appreciate it.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 font-serif">The Meaning of 乙</h2>
          <p className="text-[#1A1A1A]/80 leading-relaxed mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The character 乙 (otsu) carries multiple resonances. In Japanese, it represents 
            the second position in a sequence—yet it also connotes something refined, unusual, 
            and worthy of special attention. It is the outlier, the exception, the piece that 
            stands apart.
          </p>
          <p className="text-[#1A1A1A]/80 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            We chose this name because Bizen-yaki itself defies categorization. It is neither 
            rustic nor fine art, neither purely functional nor merely decorative. It occupies 
            a unique position—much like the character 乙.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 font-serif">Humanity in the Age of AI</h2>
          <p className="text-[#1A1A1A]/80 leading-relaxed mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            We are technologists. We understand the power and inevitability of artificial 
            intelligence. Yet we also recognize what machines cannot replicate: the weight 
            of a hand-thrown vessel, the irregular beauty of flame-transformed clay, the 
            consciousness embedded in an object made by human hands.
          </p>
          <p className="text-[#1A1A1A]/80 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Bizen-yaki is a counterbalance to the digital—proof that the analog world still 
            holds value that cannot be computed or generated.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 font-serif">Bridging Time and Space</h2>
          <p className="text-[#1A1A1A]/80 leading-relaxed mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            These vessels belong not only to Japanese dining tables but to contemporary lifestyles 
            around the world. We reinterpret millennia-old techniques as beauty that can be 
            used and appreciated today, wherever you may be.
          </p>
          <p className="text-[#1A1A1A]/80 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Whether you are a seasoned collector or encountering Bizen-yaki for the first time, 
            we welcome you to explore our collection and discover the dialogue between earth 
            and fire.
          </p>
        </section>

        <div className="text-center mt-20 mb-12">
          <p className="text-2xl text-[#1A1A1A] font-serif italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            This is 乙 otsu.
          </p>
        </div>

        <div className="text-center">
          <Link href="/#shop" 
                className="inline-block px-8 py-3 border border-[#1A1A1A] text-[#1A1A1A] font-sans text-sm tracking-wide hover:bg-[#1A1A1A] hover:text-white transition-colors">
            Explore the Collection
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}