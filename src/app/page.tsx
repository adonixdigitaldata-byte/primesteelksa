'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products, CATEGORIES } from '../data/products';
import {
  ArrowRight,
  TrendingUp,
  Award,
  Truck,
  MessageSquare,
  Search,
  ShoppingCart,
  Check,
  Plus,
  Star,
  Settings
} from 'lucide-react';

export default function Home() {
  const { language, t } = useLanguage();
  const { addToBasket, isInBasket, removeFromBasket } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  // Top 6 products as featured
  const featuredProducts = products.slice(0, 6);

  // Latest 3 blog articles mock
  const latestArticles = [
    {
      id: 'buying-steel-guide',
      titleEn: 'Ultimate Guide to Buying Structural Steel Beams in KSA',
      titleAr: 'الدليل الشامل لشراء جسور الحديد الإنشائية في السعودية',
      excerptEn: 'Learn how to differentiate between JIS, ASTM, and DIN standards for industrial beams, and check the crucial parameters for grade SS400.',
      excerptAr: 'تعرف على كيفية التمييز بين مواصفات JIS وASTM وDIN للجسور الصناعية، وتحقق من المعايير الهامة لدرجة الحديد SS400.',
      date: 'May 14, 2026',
      readTimeEn: '5 min read',
      readTimeAr: '٥ دقائق قراءة',
      tagEn: 'Technical Guide',
      tagAr: 'دليل تقني'
    },
    {
      id: 'epoxy-coated-rebar-importance',
      titleEn: 'Why Epoxy-Coated Steel Reinforcing Bar is Essential in Coastal Zones',
      titleAr: 'لماذا يعد حديد التسليح المعزول بالإيبوكسي ضرورياً في المناطق الساحلية',
      excerptEn: 'Saltwater air accelerates concrete carbonation. Read about SASO-certified epoxy rebar protection and how it guarantees structure longevity.',
      excerptAr: 'تسير الرطوبة والأملاح تآكل حديد التسليح بسرعة. اقرأ عن حماية الإيبوكسي المعتمدة من ساسو وكيف تضمن عمر الأساسات.',
      date: 'May 10, 2026',
      readTimeEn: '4 min read',
      readTimeAr: '٤ دقائق قراءة',
      tagEn: 'Construction',
      tagAr: 'أعمال البناء'
    },
    {
      id: 'ksa-steel-market-25-26',
      titleEn: 'KSA Industrial Steel Trends & Vision 2030 Infrastructure Projects',
      titleAr: 'اتجاهات سوق الحديد في السعودية ومشاريع البنية التحتية لرؤية 2030',
      excerptEn: 'An industry report on the soaring demand for local rebars and heavy European structural columns HEA and HEB in Riyadh and Dammam.',
      excerptAr: 'تقرير صناعي حول الطلب المتزايد على حديد التسليح المحلي والأعمدة الإنشائية الأوروبية الثقيلة HEA وHEB في الرياض والدمام.',
      date: 'May 06, 2026',
      readTimeEn: '6 min read',
      readTimeAr: '٦ دقائق قراءة',
      tagEn: 'Market Report',
      tagAr: 'تقرير السوق'
    }
  ];

  return (
    <div className="space-y-28 pb-24 overflow-hidden bg-brand-surface">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(11,13,20,0.9),transparent_60%)]">
        {/* Subtle grid pattern for technical design feel */}
        <div className="absolute inset-0 bg-hero-pattern opacity-[0.04] z-0"></div>
        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-surface/30 to-brand-surface z-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center space-y-10 animate-fade-up">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-dark max-w-5xl mx-auto leading-tight font-display">
            {t.heroTitle.split(' ').map((word, i) => (
              <span key={i} className={i >= 3 ? 'molten-text font-black' : 'text-white'}>
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-brand-muted max-w-3xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* Premium Search Control */}
          <div className="max-w-2xl mx-auto relative mt-6 rounded-2xl p-1.5 bg-[#0b0d14]/80 border border-white/10 flex items-center shadow-glow focus-within:border-brand-primary/50 transition-all duration-300 backdrop-blur-md">
            <Search className="w-5 h-5 text-brand-muted mx-3 shrink-0" />
            <input
              type="text"
              placeholder={t.filterSearch}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
                }
              }}
              className="flex-grow bg-transparent border-0 outline-none text-white placeholder-brand-muted/60 py-3 text-sm px-1 focus:ring-0"
            />
            <Link
              href={`/products?search=${encodeURIComponent(searchQuery)}`}
              className="px-6 py-2.5 bg-brand-primary hover:bg-brand-primary-light text-white hover:text-brand-surface font-extrabold rounded-xl text-xs transition-all duration-300 flex items-center gap-1.5 shrink-0"
            >
              <span>{language === 'ar' ? 'بحث' : 'Search'}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl-mirror" />
            </Link>
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-primary-light text-white hover:text-brand-surface font-extrabold rounded-xl shadow-md shadow-brand-primary/25 transform hover:-translate-y-0.5 transition-all duration-300 text-sm flex items-center justify-center gap-2 group"
            >
              <span>{t.heroCtaExplore}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl-mirror" />
            </Link>
            <a
              href="https://wa.me/966551438917"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-surface-alt/80 hover:bg-brand-surface-mid/80 text-white font-bold rounded-xl border border-white/10 hover:border-brand-primary/50 transition-all duration-300 text-sm flex items-center justify-center gap-2 backdrop-blur"
            >
              <MessageSquare className="w-4 h-4 text-brand-primary" />
              <span>{t.heroCtaContact}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#0b0d14]/75 border border-white/5 p-8 rounded-2xl shadow-card backdrop-blur-md">
          <div className="text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold molten-text font-display">{t.statsYearsVal}</div>
            <div className="text-xs sm:text-sm text-brand-muted font-semibold uppercase tracking-wider">{t.statsYearsLbl}</div>
          </div>
          <div className="text-center space-y-1 border-l border-white/5 rtl:border-l-0 rtl:border-r">
            <div className="text-3xl sm:text-4xl font-extrabold molten-text font-display">{t.statsProductsVal}</div>
            <div className="text-xs sm:text-sm text-brand-muted font-semibold uppercase tracking-wider">{t.statsProductsLbl}</div>
          </div>
          <div className="text-center space-y-1 border-l border-white/5 rtl:border-l-0 rtl:border-r">
            <div className="text-3xl sm:text-4xl font-extrabold molten-text font-display">{t.statsClientsVal}</div>
            <div className="text-xs sm:text-sm text-brand-muted font-semibold uppercase tracking-wider">{t.statsClientsLbl}</div>
          </div>
          <div className="text-center space-y-1 border-l border-white/5 rtl:border-l-0 rtl:border-r">
            <div className="text-3xl sm:text-4xl font-extrabold molten-text font-display">{t.statsCitiesVal}</div>
            <div className="text-xs sm:text-sm text-brand-muted font-semibold uppercase tracking-wider">{t.statsCitiesLbl}</div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">{t.categoriesTitle}</h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full"></div>
          <p className="text-brand-muted text-sm sm:text-base max-w-2xl mx-auto">{t.categoriesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between min-h-[170px] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-full group-hover:bg-brand-primary/10 transition-colors"></div>
              <div className="space-y-3">
                <span className="text-2xl text-brand-primary/20 font-extrabold font-display block group-hover:text-brand-primary/50 transition-colors">0{idx + 1}</span>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-primary transition-colors">
                  {language === 'ar' ? cat.nameAr : cat.nameEn}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-brand-muted font-bold mt-6 group-hover:text-white transition-colors">
                <span>{language === 'ar' ? 'تصفح المنتجات' : 'Browse Inventory'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform rtl-mirror" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">{t.featuredProductsTitle}</h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full"></div>
          <p className="text-brand-muted text-sm sm:text-base max-w-2xl mx-auto">{t.featuredProductsSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((prod) => (
            <div
              key={prod.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Product Visual */}
              <div className="h-48 bg-gradient-to-br from-brand-surface-alt to-brand-surface-mid/45 relative flex items-center justify-center p-6 border-b border-white/5 overflow-hidden">
                {prod.image ? (
                  <img src={prod.image} alt={prod.nameEn} className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-hero-pattern opacity-[0.05] group-hover:opacity-10 transition-opacity z-0"></div>
                    {/* Structural abstract design */}
                    <div className="relative z-10 w-24 h-24 bg-brand-surface-mid border border-white/10 rounded-xl flex items-center justify-center shadow-card group-hover:scale-105 group-hover:border-brand-primary/50 transition-all duration-300">
                      <span className="text-brand-primary text-xs font-mono font-bold tracking-widest">{prod.sku}</span>
                    </div>
                  </>
                )}
                {/* Standard quality tag */}
                <div className="absolute top-3 left-3 bg-[#05060a]/80 backdrop-blur border border-white/10 px-2.5 py-1 rounded-md text-[10px] font-bold text-brand-primary flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  <span>JIS / ASTM</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-5 flex-grow flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="text-[10px] text-brand-primary font-bold uppercase tracking-widest">
                    {language === 'ar' ? prod.categoryAr : prod.categoryEn}
                  </div>
                  <h3 className="text-base font-bold text-white line-clamp-2 min-h-[48px] group-hover:text-brand-primary transition-colors leading-snug">
                    {language === 'ar' ? prod.nameAr : prod.nameEn}
                  </h3>
                </div>

                {/* Technical blueprint specifications box */}
                <div className="bg-[#05060a]/50 p-4 rounded-xl border border-white/5 space-y-2 text-xs text-brand-muted">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-brand-muted/75">{t.prodMaterial}:</span>
                    <span className="text-white font-bold">{language === 'ar' ? prod.materialAr : prod.materialEn}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-brand-muted/75">{t.prodGrade}:</span>
                    <span className="text-white font-bold">{language === 'ar' ? prod.gradeAr : prod.gradeEn}</span>
                  </div>
                </div>

                {/* Actions CTA buttons */}
                <div className="flex flex-col gap-2.5 pt-1">
                  <Link
                    href={`/products/${prod.id}`}
                    className="w-full py-2.5 bg-brand-surface-mid/80 hover:bg-brand-surface-mid text-white font-bold rounded-xl text-xs transition-colors duration-200 border border-white/10 text-center block"
                  >
                    {t.prodBtnDetails}
                  </Link>

                  {isInBasket(prod.id) ? (
                    <button
                      onClick={() => removeFromBasket(prod.id)}
                      className="w-full py-2.5 bg-brand-rust/10 border border-brand-rust/30 text-brand-rust hover:bg-brand-rust/20 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{t.prodBtnRemoveFromBasket}</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => addToBasket(prod)}
                      className="w-full py-2.5 bg-brand-primary hover:bg-brand-primary-light text-white hover:text-brand-surface font-extrabold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{t.prodBtnAddToBasket}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center pt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 border border-brand-primary hover:bg-brand-primary hover:text-white text-brand-primary font-extrabold rounded-xl transition-all duration-300 text-sm shadow-sm"
          >
            <span>{language === 'ar' ? 'عرض جميع الـ ٣٩ منتجاً' : 'View All 39 Products'}</span>
            <ArrowRight className="w-4 h-4 rtl-mirror" />
          </Link>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="bg-brand-surface-alt/45 border-y border-white/5 py-24 relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">{t.whyChooseUsTitle}</h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full"></div>
            <p className="text-brand-muted text-sm sm:text-base max-w-2xl mx-auto">{t.whyChooseUsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-panel glass-panel-hover p-6 rounded-2xl text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue mx-auto shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">{t.uspQualityTitle}</h3>
              <p className="text-xs text-brand-muted leading-relaxed">{t.uspQualityDesc}</p>
            </div>

            <div className="glass-panel glass-panel-hover p-6 rounded-2xl text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue mx-auto shadow-sm">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">{t.uspDeliveryTitle}</h3>
              <p className="text-xs text-brand-muted leading-relaxed">{t.uspDeliveryDesc}</p>
            </div>

            <div className="glass-panel glass-panel-hover p-6 rounded-2xl text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue mx-auto shadow-sm">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">{t.uspCertTitle}</h3>
              <p className="text-xs text-brand-muted leading-relaxed">{t.uspCertDesc}</p>
            </div>

            <div className="glass-panel glass-panel-hover p-6 rounded-2xl text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue mx-auto shadow-sm">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">{t.uspSupportTitle}</h3>
              <p className="text-xs text-brand-muted leading-relaxed">{t.uspSupportDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BLOG TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">{t.blogTeaserTitle}</h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full"></div>
          <p className="text-brand-muted text-sm sm:text-base max-w-2xl mx-auto">{t.blogTeaserSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {latestArticles.map((art) => (
            <div
              key={art.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-brand-muted font-bold">
                  <span className="px-2.5 py-1 rounded bg-brand-surface text-brand-primary uppercase tracking-widest text-[9px]">
                    {language === 'ar' ? art.tagAr : art.tagEn}
                  </span>
                  <span>{art.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug line-clamp-2 group-hover:text-brand-primary transition-colors">
                  {language === 'ar' ? art.titleAr : art.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3">
                  {language === 'ar' ? art.excerptAr : art.excerptEn}
                </p>
              </div>

              <div className="p-6 bg-[#0b0d14]/60 border-t border-white/5 flex items-center justify-between text-xs font-bold text-white">
                <span>{language === 'ar' ? art.readTimeAr : art.readTimeEn}</span>
                <Link
                  href={`/blog/${art.id}`}
                  className="text-brand-primary hover:underline flex items-center gap-1 hover:gap-1.5 transition-all"
                >
                  <span>{t.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl-mirror" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-surface-alt via-brand-surface-mid to-[#0a0b12] border border-brand-primary/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-card text-center sm:text-left rtl:sm:text-right flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 bg-hero-pattern opacity-[0.03]"></div>
          {/* Smelting warm glow behind CTA */}
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-brand-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

          <div className="space-y-4 max-w-2xl relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
              {t.ctaBannerTitle}
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              {t.ctaBannerSubtitle}
            </p>
          </div>

          <div className="shrink-0 relative z-10 w-full sm:w-auto">
            <a
              href="https://wa.me/966551438917?text=Hello%20PrimeSteelKSA%2C%20I%20need%20a%20custom%20price%20quote%20for%20industrial%20steel%20products."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-primary hover:bg-brand-primary-light text-white hover:text-brand-surface font-extrabold rounded-xl shadow-md shadow-brand-primary/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-sm"
            >
              <MessageSquare className="w-5 h-5 shrink-0" />
              <span>{t.ctaBannerButton}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
