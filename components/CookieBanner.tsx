"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // localStorageで同意済みかチェック
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-charcoal text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/80 text-center sm:text-left">
          We use essential cookies to process your orders and improve your experience. 
          By using our site, you agree to our{" "}
          <a href="/legal/privacy" className="underline hover:text-terracotta">
            Privacy Policy
          </a>
          .
        </p>
        <button
          onClick={handleAccept}
          className="bg-terracotta hover:bg-terracotta/90 text-white px-6 py-2 rounded text-sm font-sans transition-colors whitespace-nowrap"
        >
          Accept
        </button>
      </div>
    </div>
  );
}