'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { Award, Compass, ShieldCheck, Milestone, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const { language, t } = useLanguage();

  const timelineSteps = [
    {
      year: '2012',
      titleEn: 'Founding Year',
      titleAr: 'سنة التأسيس',
      descEn: 'PrimeSteelKSA started operations in Riyadh supplying rebars to local residential developments.',
      descAr: 'بدأت PrimeSteelKSA عملياتها التشغيلية في الرياض لتوريد حديد التسليح للمطورين العقاريين المحليين.'
    },
    {
      year: '2016',
      titleEn: 'Warehouse Expansion',
      titleAr: 'التوسع اللوجستي',
      descEn: 'Acquired large storage facilities in Dammam port and Jeddah to distribute imported JIS-specification structural beams.',
      descAr: 'تمتلك المستودعات الكبرى بميناء الدمام وجدة لتوزيع الجسور الإنشائية الثقيلة المستوردة المطابقة لمواصفات JIS.'
    },
    {
      year: '2020',
      titleEn: 'Vision 2030 Realignment',
      titleAr: 'شراكة رؤية 2030',
      descEn: 'Fully certified for SABIC epoxy-coated rebar distribution, matching massive mega-projects in Neom and Qiddiya.',
      descAr: 'الحصول على الاعتماد الكامل لتوريد وتوزيع حديد التسليح المعزول بالإيبوكسي للمشاريع الكبرى في نيوم والقدية.'
    },
    {
      year: '2026',
      titleEn: 'Digital Inventory Leadership',
      titleAr: 'الريادة الرقمية للصلب',
      descEn: 'Serving over 39+ standard steel catalogs online, processing immediate quote validation directly via WhatsApp pipelines.',
      descAr: 'توريد ٣٩ نوعاً وكتالوجاً من منتجات الحديد المعتمدة، مع معالجة وتوليد فوري للتسعيرات مباشرة عبر مبيعات الواتساب.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 bg-brand-surface">
      {/* Page header and Breadcrumb */}
      <div className="border-b border-white/5 pb-6">
        <div className="text-[10px] text-brand-muted font-bold tracking-widest mb-2.5 flex items-center gap-2 uppercase">
          <Link href="/" className="hover:text-white transition-colors">{t.navHome}</Link>
          <span>/</span>
          <span className="text-brand-primary">{t.navAbout}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          {language === 'ar' ? 'من نحن وقيمنا الإستراتيجية' : 'About PrimeSteelKSA & Core Values'}
        </h1>
      </div>

      {/* Hero Narrative Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-bold text-brand-primary uppercase tracking-wider">
            <Milestone className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'رحلة التميز منذ ٢٠١٢' : 'Journey of Excellence Since 2012'}</span>
          </div>
          <h2 className="text-2xl sm:text-4.5xl font-extrabold text-white leading-tight font-display">
            {language === 'ar' ? 'بناء الغد بحديد صلب وعزيمة وطنية لا تلين' : 'Forging KSA Infrastructure with Certified Integrity'}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-brand-muted">
            {t.aboutStoryDesc}
          </p>
          <div className="border-l-4 border-brand-primary pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4 text-xs italic text-brand-muted font-semibold">
            {language === 'ar' 
              ? '"كل أساس خرساني متين في هذا الوطن الغالي هو شهادة على جودة منتجاتنا وقوة شراكاتنا الصناعية."'
              : '"Every reinforced concrete foundation supporting this nation is a testament to the safety and standard of our distributed steel."'}
          </div>
        </div>

        {/* Visual Abstract Steel Structure Graphic */}
        <div className="glass-panel border border-white/5 rounded-3xl p-8 min-h-[300px] flex items-center justify-center relative overflow-hidden shadow-glow">
          <div className="absolute inset-0 bg-hero-pattern opacity-[0.05] z-0"></div>
          <div className="relative z-10 text-center space-y-4">
            <div className="w-16 h-16 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl flex items-center justify-center text-brand-primary mx-auto">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">SASO & ASTM COMPLIANT</h3>
            <p className="text-xs text-brand-muted max-w-sm leading-relaxed">
              {language === 'ar' 
                ? 'نعمل بشكل حصري مع مصانع الحديد المرخصة محلياً ودولياً لضمان مطابقة كود البناء السعودي تماماً.'
                : 'We operate exclusively with licensed regional steel mills ensuring 100% compliance with Saudi Building Code.'}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission blocks */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel border border-white/5 p-8 rounded-2xl space-y-4 hover:border-brand-primary/30 transition-colors duration-300 shadow-glow">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white font-display">{t.aboutMissionTitle}</h3>
          <p className="text-sm text-brand-muted leading-relaxed">{t.aboutMissionDesc}</p>
        </div>

        <div className="glass-panel border border-white/5 p-8 rounded-2xl space-y-4 hover:border-brand-primary/30 transition-colors duration-300 shadow-glow">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white font-display">{t.aboutVisionTitle}</h3>
          <p className="text-sm text-brand-muted leading-relaxed">{t.aboutVisionDesc}</p>
        </div>
      </section>

      {/* Timeline steps */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            {language === 'ar' ? 'محطات تطور شركتنا التاريخية' : 'Milestones in Our History'}
          </h2>
          <p className="text-brand-muted text-xs sm:text-sm max-w-lg mx-auto">
            {language === 'ar' 
              ? 'تتبع المسار الزمني الذي جعلنا الوجهة الأولى لعقود توريد الحديد في المملكة.'
              : 'Trace the developmental timeline that established us as KSA’s leading digital steel catalog.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {timelineSteps.map((step) => (
            <div key={step.year} className="glass-panel border border-white/5 p-6 rounded-xl space-y-3 relative overflow-hidden">
              <span className="text-4xl font-extrabold text-brand-primary/5 absolute -top-1 -right-2 font-mono select-none">
                {step.year}
              </span>
              <span className="text-brand-primary font-extrabold text-lg block relative z-10">{step.year}</span>
              <h4 className="text-sm font-bold text-white relative z-10 font-display">{language === 'ar' ? step.titleAr : step.titleEn}</h4>
              <p className="text-xs text-brand-muted leading-relaxed relative z-10">{language === 'ar' ? step.descAr : step.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certification details */}
      <section className="glass-panel border border-white/5 bg-[#0b0d14]/30 p-8 rounded-3xl space-y-6 text-center shadow-glow">
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display">{t.aboutCertsTitle}</h2>
          <p className="text-xs sm:text-sm text-brand-muted max-w-2xl mx-auto leading-relaxed">
            {t.aboutCertsDesc}
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 pt-4 text-xs font-bold">
          <span className="px-4 py-2 bg-[#05060a]/60 border border-white/10 rounded-xl text-brand-muted">SASO ISO 6935-2</span>
          <span className="px-4 py-2 bg-[#05060a]/60 border border-white/10 rounded-xl text-brand-muted">ASTM A615 / A775</span>
          <span className="px-4 py-2 bg-[#05060a]/60 border border-white/10 rounded-xl text-brand-muted">JIS G3192 Standard</span>
          <span className="px-4 py-2 bg-[#05060a]/60 border border-white/10 rounded-xl text-brand-muted">DIN 1025 EN Standards</span>
        </div>

        <div className="pt-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-primary hover:bg-brand-primary-light text-brand-surface font-extrabold rounded-xl text-sm transition-all shadow-md shadow-brand-primary/20"
          >
            <span>{language === 'ar' ? 'عرض الكتالوج الفني للمخزون' : 'Browse Inventory Specs'}</span>
            <ArrowRight className="w-4 h-4 rtl-mirror" />
          </Link>
        </div>
      </section>
    </div>
  );
}
