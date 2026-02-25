'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Currency, CURRENCY_SYMBOLS, EXCHANGE_RATE } from './constants';

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  toggleCurrency: () => void;
  formatPrice: (price: number) => string;
  isLoading: boolean;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>('USD'); // デフォルトはUSD（英国以外想定）
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // IP判定で国を特定
    const detectCountryAndSetCurrency = async () => {
      try {
        // LocalStorageを先にチェック（前回の選択を記憶）
        const saved = localStorage.getItem('otsu-currency') as Currency;
        if (saved && (saved === 'GBP' || saved === 'USD')) {
          setCurrencyState(saved);
          setIsLoading(false);
          return;
        }

        // IPアドレスから国を判定
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // 英国（GB）の場合はGBP、それ以外はUSD
        if (data.country_code === 'GB') {
          setCurrencyState('GBP');
        } else {
          setCurrencyState('USD');
        }
      } catch (error) {
        // エラー時はUSDをデフォルト
        console.log('Could not detect location, defaulting to USD');
        setCurrencyState('USD');
      } finally {
        setIsLoading(false);
      }
    };

    detectCountryAndSetCurrency();
  }, []);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    if (typeof window !== 'undefined') {
      localStorage.setItem('otsu-currency', newCurrency);
    }
  };

  const toggleCurrency = () => {
    const newCurrency = currency === 'GBP' ? 'USD' : 'GBP';
    setCurrency(newCurrency);
  };

  const formatPrice = (price: number): string => {
    const symbol = CURRENCY_SYMBOLS[currency];
    if (currency === 'GBP') {
      return `${symbol}${price}`;
    } else {
      const usdPrice = Math.round(price * EXCHANGE_RATE);
      return `${symbol}${usdPrice}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, toggleCurrency, formatPrice, isLoading }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}