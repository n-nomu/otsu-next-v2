'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacyAgreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyAgreed) {
      alert("Please agree to the Privacy Policy to proceed.");
      return;
    }
    
    setIsSubmitting(true);
    
    // コンソールログ出力（Resend実装までの仮）
    console.log("Form submitted:", formData);
    console.log("To: nomura41985@gmail.com");
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', privacyAgreed: false });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl text-[#1A1A1A] mb-6 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            Contact
          </h1>
          <p className="text-lg md:text-xl text-[#1A1A1A]/80 tracking-widest uppercase"
             style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            We Would Love to Hear From You
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 左側：お問い合わせ情報 */}
          <div>
            <h2 className="text-2xl text-[#1A1A1A] mb-8 font-serif">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#B8735A] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-sans text-[#1A1A1A] mb-1">Email</h3>
                  <a href="mailto:nomura41985@gmail.com" className="text-[#B8735A] hover:underline text-sm">
                    nomura41985@gmail.com
                  </a>
                  <p className="text-[#1A1A1A]/50 text-xs mt-1">We aim to respond within 48 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#B8735A] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-sans text-[#1A1A1A] mb-1">Studio Address</h3>
                  <p className="text-[#1A1A1A]/70 text-sm">545-20 Masuda, Higashi-ku</p>
                  <p className="text-[#1A1A1A]/70 text-sm">Okayama City, Okayama Prefecture</p>
                  <p className="text-[#1A1A1A]/70 text-sm">Japan 704-8141</p>
                  <p className="text-[#1A1A1A]/50 text-xs mt-1">岡山県岡山市東区升田545-20</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#B8735A] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-sans text-[#1A1A1A] mb-1">Business Hours</h3>
                  <p className="text-[#1A1A1A]/70 text-sm">Monday – Friday: 9:00 – 17:00 JST</p>
                  <p className="text-[#1A1A1A]/50 text-xs mt-1">Weekend inquiries may take longer</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white border border-[#1A1A1A]/10">
              <h3 className="font-serif text-lg text-[#1A1A1A] mb-3">For Collectors & Trade</h3>
              <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
                If you are interested in commissioning a specific piece, arranging a private 
                viewing, or wholesale inquiries, please mention this in your message. 
                We work closely with select potters in Bizen and can facilitate custom orders.
              </p>
            </div>
          </div>

          {/* 右側：フォーム */}
          <div>
            <h2 className="text-2xl text-[#1A1A1A] mb-8 font-serif">Send a Message</h2>
            
            {submitted ? (
              <div className="p-8 bg-white border border-[#1A1A1A]/10 text-center">
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-4">Thank You</h3>
                <p className="text-[#1A1A1A]/70 mb-6">
                  Your message has been received. We will respond as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#B8735A] hover:text-[#1A1A1A] transition-colors text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-sans text-[#1A1A1A] mb-2">
                    Name <span className="text-[#B8735A]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-[#1A1A1A]/20 focus:border-[#1A1A1A] focus:outline-none transition-colors font-sans text-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-sans text-[#1A1A1A] mb-2">
                    Email <span className="text-[#B8735A]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-[#1A1A1A]/20 focus:border-[#1A1A1A] focus:outline-none transition-colors font-sans text-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-sans text-[#1A1A1A] mb-2">
                    Message <span className="text-[#B8735A]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-[#1A1A1A]/20 focus:border-[#1A1A1A] focus:outline-none transition-colors font-sans text-[#1A1A1A] resize-none"
                  />
                </div>

                {/* GDPR同意チェックボックス */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacyAgreed"
                    checked={formData.privacyAgreed}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 border border-[#1A1A1A]/30 rounded cursor-pointer"
                  />
                  <label htmlFor="privacy" className="text-xs text-[#1A1A1A]/70 leading-relaxed cursor-pointer">
                    I agree to the <Link href="/legal/privacy" className="text-[#B8735A] hover:underline">Privacy Policy</Link> and consent to having my data processed in accordance with GDPR. 
                    My information will be used solely to respond to this inquiry and will be retained for up to 12 months.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#1A1A1A] text-white font-sans text-sm tracking-wide hover:bg-[#1A1A1A]/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}