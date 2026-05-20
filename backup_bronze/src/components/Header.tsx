'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Menu, X, ShoppingCart, Globe, Phone, FileText, HelpCircle } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, t, toggleLanguage } = useLanguage();
  const { basketItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t.navHome },
    { href: '/products', label: t.navProducts },
    { href: '/about', label: t.navAbout },
    { href: '/blog', label: t.navBlog },
    { href: '/faq', label: t.navFaq },
    { href: '/contact', label: t.navContact },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-surface/85 backdrop-blur-md border-b border-brand-border/40 shadow-card py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 bg-gradient-to-tr from-brand-primary to-brand-primary-light rounded-lg flex items-center justify-center font-bold text-brand-dark text-xl shadow-glow transform group-hover:scale-105 transition-transform duration-300">
                P
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-brand-surface rounded-full border-2 border-brand-primary"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                  PrimeSteel<span className="text-brand-primary">KSA</span>
                </span>
                <span className="text-[9px] text-brand-muted tracking-wider uppercase font-semibold -mt-1">
                  {language === 'ar' ? 'حديد معتمد وصناعي' : 'Certified Industrial Steel'}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-brand-primary bg-brand-surface-alt/60 border-b-2 border-brand-primary'
                    : 'text-brand-muted hover:text-brand-dark hover:bg-brand-surface-alt/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions (Language + Cart + Mobile burger) */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-border bg-brand-surface-alt/20 text-brand-muted hover:text-brand-dark hover:border-brand-primary hover:bg-brand-surface-alt/50 transition-all duration-300 text-xs font-semibold"
              title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-brand-primary" />
              <span>{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            {/* Inquiry Basket Link/Indicator */}
            <Link
              href="/products?basket=open"
              className="relative p-2 rounded-lg border border-brand-border bg-brand-surface-alt/20 text-brand-muted hover:text-brand-dark hover:border-brand-primary hover:bg-brand-surface-alt/50 transition-all duration-300"
              title={t.navInquiryBasket}
            >
              <ShoppingCart className="w-4.5 h-4.5" />
              {basketItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-primary text-white font-bold text-[10px] rounded-full flex items-center justify-center animate-pulse">
                  {basketItems.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg border border-brand-border bg-brand-surface-alt/20 text-brand-muted hover:text-brand-dark hover:bg-brand-surface-alt/50 transition-all duration-300"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-brand-surface/95 backdrop-blur-lg animate-fade-in">
          <div className="flex flex-col h-full pt-24 pb-8 px-6 space-y-6">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-between ${
                    isActive(link.href)
                      ? 'bg-brand-surface-alt text-brand-primary border-l-4 border-brand-primary'
                      : 'text-brand-muted hover:text-brand-dark hover:bg-brand-surface-alt/40'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>

            <div className="border-t border-brand-border/60 my-4"></div>

            {/* Quick Contact options in Menu */}
            <div className="space-y-4 pt-2">
              <p className="text-xs text-brand-muted font-semibold uppercase tracking-wider">
                {language === 'ar' ? 'مبيعات الحديد المباشرة' : 'Direct Steel Sales'}
              </p>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 bg-brand-primary text-white rounded-xl font-bold justify-center shadow-md shadow-brand-primary/20 hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                <span>{t.heroCtaContact}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
