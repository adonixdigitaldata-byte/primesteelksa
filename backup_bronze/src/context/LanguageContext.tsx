'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationDict } from '../data/translations';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  t: TranslationDict;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load from localStorage if present
    const storedLang = localStorage.getItem('primesteel_lang') as Language;
    if (storedLang === 'en' || storedLang === 'ar') {
      setLanguageState(storedLang);
      updateHtmlDirection(storedLang);
    } else {
      // Default to Arabic or English based on browser settings, let's default to English
      updateHtmlDirection('en');
    }
  }, []);

  const updateHtmlDirection = (lang: Language) => {
    const root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    if (lang === 'ar') {
      root.classList.add('rtl');
      root.classList.remove('ltr');
    } else {
      root.classList.add('ltr');
      root.classList.remove('rtl');
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('primesteel_lang', lang);
    updateHtmlDirection(lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
      <div className={language === 'ar' ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
