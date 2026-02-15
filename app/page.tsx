"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from './sections/Hero';
import { Shop } from './sections/Shop';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Header />
      <main>
        <Hero />
        <section id="shop">
          <Shop />
        </section>
      </main>
      <Footer />
    </div>
  );
}