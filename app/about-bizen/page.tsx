import Link from 'next/link';
import { Footer } from '@/components/Footer';

export default function AboutBizenPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      {/* ヘッダー：ロゴのみ・左寄せ・墨黒 */}
      <header className="w-full py-6 px-8 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-serif text-[#1A1A1A] tracking-wider">
            乙 otsu
          </Link>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20">
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
        </div>

        {/* Natural Abstraction */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 font-serif">Natural Abstraction</h2>
          <p className="text-[#1A1A1A]/80 leading-relaxed mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Bizen-yaki does not rely on glaze. The clay is shaped and placed into the kiln, 
            and the fire does the rest. The resulting surface—known as yohen (kiln transformation)—is 
            a collaboration between the potter and the flame. No two pieces are alike.
          </p>
          <p className="text-[#1A1A1A]/80 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The palette ranges from deep charcoal to warm terracotta, with occasional flashes 
            of blue or purple where the flame kissed the clay most intensely. This is not decoration; 
            this is geology made visible.
          </p>
        </section>

        {/* A Living Texture */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 font-serif">A Living Texture: Enhancing the Senses</h2>
          <p className="text-[#1A1A1A]/80 leading-relaxed mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The unglazed surface of Bizen ware interacts with what it holds. A Bizen tea bowl 
            will gradually change color as it absorbs the oils of the tea. A sake flask will develop 
            a unique patina with each pour.
          </p>
          <p className="text-[#1A1A1A]/80 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The microporous structure of the clay also affects taste. Beer becomes creamier; 
            sake becomes mellower. This is not imagination—this is the physics of surface tension 
            and oxidation.
          </p>
        </section>

        {/* Timeless Solidity */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 font-serif">Timeless Solidity: An Heirloom for Generations</h2>
          <p className="text-[#1A1A1A]/80 leading-relaxed mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Bizen-yaki is dense. Fired at temperatures exceeding 1200°C for fourteen days, 
            the clay vitrifies into something approaching stone. These pieces do not chip easily; 
            they do not fade; they do not go out of style.
          </p>
          <p className="text-[#1A1A1A]/80 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            A well-made Bizen piece is not merely tableware. It is a companion for life, 
            capable of accompanying you from your first apartment to your final home.
          </p>
        </section>

        {/* One of Japan's Six Ancient Kilns */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl text-[#1A1A1A] mb-6 font-serif">One of Japan's Six Ancient Kilns</h2>
          <p className="text-[#1A1A1A]/80 leading-relaxed mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Bizen is one of the six ancient kilns of Japan (rokkoyo), with a history stretching 
            back over a thousand years. The techniques used today are essentially unchanged from 
            those of the Heian period.
          </p>
          <p className="text-[#1A1A1A]/80 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            This is not nostalgia. This is continuity—a lineage of craft that has survived 
            wars, earthquakes, and the rise of industrial ceramics. When you hold a Bizen piece, 
            you are holding a fragment of that history.
          </p>
        </section>

        {/* Back to Shop */}
        <div className="text-center mt-20">
          <Link href="/#shop" 
                className="inline-block px-8 py-3 border border-[#1A1A1A] text-[#1A1A1A] font-sans text-sm tracking-wide hover:bg-[#1A1A1A] hover:text-white transition-colors">
            Explore the Collection
          </Link>
        </div>
      </main>

      {/* フッター */}
      <Footer />
    </div>
  );
}