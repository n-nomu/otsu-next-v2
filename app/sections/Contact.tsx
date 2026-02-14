"use client";
import { useEffect, useState } from 'react';
import { Mail, MapPin, ArrowUp, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="pt-20">
      {/* Hero Banner */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src="/scene_stacked_vessels.jpg"
          alt="Bizen ware collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="subheading text-white/80 mb-4">We'd Love to Hear From You</p>
            <h1 className="heading-hero text-white">Get in Touch</h1>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-20 lg:py-28 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left Column - Info */}
            <div className="space-y-10">
              <div>
                <h2 className="heading-section text-charcoal mb-6">
                  How Can We Help?
                </h2>
                <p className="body-text mb-8">
                  Whether you're looking for a specific piece, interested in wholesale opportunities, or simply want to learn more about Bizen ware, we're here to help.
                </p>
              </div>

              {/* Personal Orders */}
              <div className="p-6 bg-off-white rounded-lg">
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  Personal Orders
                </h3>
                <p className="font-sans text-sm text-warm-gray">
                  Looking for a specific piece? Want gift recommendations? We're happy to help you find the perfect vessel.
                </p>
              </div>

              {/* B2B */}
              <div className="p-6 bg-terracotta/10 rounded-lg border border-terracotta/20">
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  Trade Inquiries
                </h3>
                <p className="font-sans text-sm text-warm-gray mb-4">
                  For galleries, retailers, hospitality projects, and interior designers. We offer trade pricing and custom sourcing.
                </p>
                <span className="inline-block px-3 py-1 bg-terracotta text-white text-xs rounded-full">
                  Wholesale Available
                </span>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-off-white rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-warm-gray uppercase tracking-wider">Email</p>
                    <a
                      href="mailto:hello@otsu-london.com"
                      className="font-sans text-charcoal hover:text-terracotta transition-colors"
                    >
                      hello@otsu-london.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-off-white rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-warm-gray uppercase tracking-wider">Location</p>
                    <p className="font-sans text-charcoal">
                      London, UK — by appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="pt-6 border-t border-charcoal/10">
                <p className="font-sans text-sm text-warm-gray">
                  We typically respond within <span className="text-charcoal font-medium">2 business days</span>.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className={`bg-off-white rounded-lg p-8 lg:p-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-terracotta" />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-2">
                    Message Sent
                  </h3>
                  <p className="font-sans text-warm-gray">
                    Thank you for reaching out. We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-sans text-sm text-charcoal mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-white border-charcoal/10 text-charcoal placeholder:text-warm-gray/50 focus:border-terracotta focus:ring-terracotta"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-sm text-charcoal mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-white border-charcoal/10 text-charcoal placeholder:text-warm-gray/50 focus:border-terracotta focus:ring-terracotta"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-sm text-charcoal mb-2">
                      Subject *
                    </label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value: string) =>
                        setFormData({ ...formData, subject: value })
                      }
                    >
                      <SelectTrigger className="bg-white border-charcoal/10 text-charcoal focus:ring-terracotta">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-charcoal/10">
                        <SelectItem value="personal" className="text-charcoal hover:bg-off-white">
                          Personal Order
                        </SelectItem>
                        <SelectItem value="wholesale" className="text-charcoal hover:bg-off-white">
                          Wholesale Inquiry
                        </SelectItem>
                        <SelectItem value="custom" className="text-charcoal hover:bg-off-white">
                          Custom Order
                        </SelectItem>
                        <SelectItem value="press" className="text-charcoal hover:bg-off-white">
                          Press & Media
                        </SelectItem>
                        <SelectItem value="other" className="text-charcoal hover:bg-off-white">
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block font-sans text-sm text-charcoal mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="bg-white border-charcoal/10 text-charcoal placeholder:text-warm-gray/50 focus:border-terracotta focus:ring-terracotta resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-terracotta text-white font-sans text-sm font-medium rounded-full transition-all duration-300 hover:bg-terracotta/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <div className="py-12 bg-off-white border-t border-charcoal/10">
        <div className="w-full px-6 lg:px-12 text-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 font-sans text-sm text-warm-gray hover:text-terracotta transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </div>
      </div>
    </section>
  );
}
