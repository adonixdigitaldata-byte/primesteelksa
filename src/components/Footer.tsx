'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { Linkedin, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-brand-surface border-t border-brand-border/60 text-brand-muted-light pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-surface-mid/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <Link href="/" className="group block">
              <img src="/primesteelLogo.png" alt="PrimeSteelKSA Logo" className="w-32 h-32 object-contain mx-auto"/>
            </Link>
            <p className="text-sm leading-relaxed text-brand-muted max-w-sm">
              {t.footerTagline}
            </p>
            <div className="flex justify-center space-x-3 gap-2 pt-2">
              <a
                href="https://www.primesteelksa.com/"
                className="w-8 h-8 rounded-lg bg-brand-surface-alt flex items-center justify-center text-brand-muted hover:text-white hover:bg-brand-primary transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.primesteelksa.com/"
                className="w-8 h-8 rounded-lg bg-brand-surface-alt flex items-center justify-center text-brand-muted hover:text-white hover:bg-brand-primary transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.primesteelksa.com/"
                className="w-8 h-8 rounded-lg bg-brand-surface-alt flex items-center justify-center text-brand-muted hover:text-white hover:bg-brand-primary transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-brand-dark font-bold text-base mb-6 border-l-4 border-brand-primary pl-3 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-3">
              {t.footerQuickLinks}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-primary transition-colors duration-250">
                  {t.navHome}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand-primary transition-colors duration-250">
                  {t.navProducts}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-primary transition-colors duration-250">
                  {t.navAbout}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-primary transition-colors duration-250">
                  {t.navBlog}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brand-primary transition-colors duration-250">
                  {t.navFaq}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-primary transition-colors duration-250">
                  {t.navContact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div>
            <h3 className="text-brand-dark font-bold text-base mb-6 border-l-4 border-brand-primary pl-3 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-3">
              {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
            </h3>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <span>
                  Obold Ibn Jahash Street<br/>
                  Jeddah, Saudi Arabia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <span dir="ltr">+966 55 143 8917</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                <span>sales@primesteelksa.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Certifications & legal info */}
          <div>
            <h3 className="text-brand-dark font-bold text-base mb-6 border-l-4 border-brand-primary pl-3 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-3">
              {t.footerLegal}
            </h3>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <Link href="/privacy" className="hover:text-brand-primary transition-colors duration-250">
                  {t.privacyTitle}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-primary transition-colors duration-250">
                  {t.termsTitle}
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-brand-primary transition-colors duration-250">
                  Sitemap XML
                </Link>
              </li>
            </ul>
            <div className="bg-brand-surface-alt/40 border border-brand-border/80 p-3 rounded-lg flex items-center gap-3">
              <div className="text-2xl">🇸🇦</div>
              <div>
                <p className="text-[11px] font-bold text-brand-dark uppercase tracking-wider">
                  Vision 2030 Partner
                </p>
                <p className="text-[9px] text-brand-muted">
                  {language === 'ar' ? 'حديد وطني عالي الكفاءة' : 'Supplying High Efficiency Steel'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border/60 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <div>{t.footerCopyright}</div>
          <div className="flex items-center gap-1.5 font-semibold text-brand-muted hover:text-brand-primary transition-colors">
            {t.footerMadeInKsa}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
