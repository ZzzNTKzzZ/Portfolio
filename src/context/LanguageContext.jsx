/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../locales/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      return saved === 'vi' || saved === 'en' ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved && saved !== language) {
        localStorage.setItem('portfolio_lang', language);
        window.location.reload();
        return;
      }
      localStorage.setItem('portfolio_lang', language);
    } catch (e) {
      console.warn('localStorage is not available:', e);
    }
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  const t = (path) => {
    if (!path) return '';
    const keys = path.split('.');
    let current = translations[language];
    
    for (const key of keys) {
      if (current === undefined || current === null) {
        return path;
      }
      current = current[key];
    }
    
    return current !== undefined ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
