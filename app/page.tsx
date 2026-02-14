"use client";

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from './sections/Hero';
import { Shop } from './sections/Shop';
import { AboutBizen } from './sections/AboutBizen';
import { AboutUs } from './sections/AboutUs';
import { Contact } from './sections/Contact';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentSection(hash);
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (section: string) => {
    window.location.hash = section;
    setCurrentSection(section);
    
    // スムーススクロール
    const element = document.getElementById(section === 'home' ? 'shop' : section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentSection={currentSection} onNavigate={handleNavigate} />
      <main>
        <Hero />
        <section id="shop">
          <Shop />
        </section>
        <section id="about-bizen">
          <AboutBizen />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}