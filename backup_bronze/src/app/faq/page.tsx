'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { HelpCircle, ChevronDown, ChevronUp, Search, Layers } from 'lucide-react';

export default function FaqPage() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'products' | 'shipping' | 'technical'>('products');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqData = [
    {
      category: 'products',
      qEn: 'Do you supply certified SASO steel?',
      qAr: 'هل توفرون حديد معتمد من الهيئة السعودية للمواصفات والمقاييس (SASO)؟',
      aEn: 'Yes. All our products comply fully with Saudi Standards, Metrology and Quality Organization (SASO) regulations. We provide certified mill test sheets for every batch delivery.',
      aAr: 'نعم، بكل تأكيد. جميع منتجاتنا مطابقة بالكامل للوائح الفنية لهيئة المواصفات والمقاييس والجودة (SASO)، ونقدم شهادات فحص المصانع المعتمدة مع كل شحنة توريد.'
    },
    {
      category: 'products',
      qEn: 'What is the minimum order quantity (MOQ)?',
      qAr: 'ما هو الحد الأدنى لكمية الطلب (MOQ) لديكم؟',
      aEn: 'We support bulk commercial contracts (by tonnage) for major developments, as well as smaller structural steel bundles for custom contractors. Contact our sales department on WhatsApp with your exact list for details.',
      aAr: 'ندعم العقود التجارية الضخمة (بالأطنان) للمشاريع الكبرى، وكذلك حزم التوريد المتوسطة للمقاولين والورش المعتمدة. تواصل مع مبيعات الواتساب بقائمتك المحددة للتفاصيل.'
    },
    {
      category: 'technical',
      qEn: 'What standards are your H-beams manufactured to?',
      qAr: 'ما هي المواصفات المعتمدة لجسور H-beam لديكم؟',
      aEn: 'Our H-beams (including heavy HEB, HEA, and lightweight IPE) conform strictly to JIS G3192 Japanese standards and EN 10025-2 European regulations.',
      aAr: 'جسور H لدينا (بما في ذلك HEB الثقيل، HEA الخفيف، وجسور IPE) مصنعة بما يتوافق تماماً مع المقاييس اليابانية JIS G3192 والمواصفات الأوروبية EN 10025-2.'
    },
    {
      category: 'technical',
      qEn: 'Why choose epoxy-coated rebar over bare steel?',
      qAr: 'لماذا يفضل حديد التسليح المعزول بالإيبوكسي عن الحديد الأسود العادي؟',
      aEn: 'Epoxy coating (Fusion-Bonded Epoxy FBE) provides an excellent corrosion barrier. It prevents saline air, saltwater humidity, and soil sulfates from corroding the core, increasing structure lifespans.',
      aAr: 'يوفر عزل الإيبوكسي (FBE) حاجزاً متيناً مانعاً للصدأ. يمنع الرطوبة الساحلية، المياه المالحة، وكبريتات التربة من تآكل الصلب، مما يضاعف العمر الافتراضي للهياكل الخرسانية.'
    },
    {
      category: 'shipping',
      qEn: 'Do you deliver steel across all of Saudi Arabia?',
      qAr: 'هل تقومون بتوصيل الحديد لكافة مدن ومحافظات المملكة؟',
      aEn: 'Yes. We provide comprehensive nationwide logistics coverage across Riyadh, Jeddah, Dammam, Rabigh, Jubail, Neom, and all regional construction sites.',
      aAr: 'نعم، نوفر شبكة توصيل لوجستية شاملة تغطي كافة أنحاء المملكة بما في ذلك الرياض، جدة، الدمام، رابغ، الجبيل، ومشاريع نيوم، وكافة مواقع التشييد الإقليمية.'
    },
    {
      category: 'shipping',
      qEn: 'How long does shipment dispatch take?',
      qAr: 'كم من الوقت يستغرق تجهيز وشحن الطلبات؟',
      aEn: 'Standard stock orders are dispatched within 24 to 48 hours. Custom cut structural steel and large-tonnage specialty epoxy treatments are delivered based on contract agreements.',
      aAr: 'يتم شحن الطلبات القياسية المتوفرة بالمخازن خلال ٢٤ إلى ٤٨ ساعة. أما مقاسات الجسور المخصصة وعقود التوريد بالطن فتتم جدولتها وتوريدها بموجب الاتفاق التعاقدي.'
    }
  ];

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = faq.category === activeTab;
    const searchString = searchQuery.toLowerCase();
    const matchesSearch =
      faq.qEn.toLowerCase().includes(searchString) ||
      faq.qAr.includes(searchQuery) ||
      faq.aEn.toLowerCase().includes(searchString) ||
      faq.aAr.includes(searchQuery);

    return matchesCategory && (searchQuery ? matchesSearch : true);
  });

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // FAQPage Schema JSON
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: language === 'ar' ? faq.qAr : faq.qEn,
      acceptedAnswer: {
        '@type': 'Answer',
        text: language === 'ar' ? faq.aAr : faq.aEn,
      },
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Page Header */}
      <div className="border-b border-brand-border/60 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="text-xs text-brand-muted font-bold tracking-wider mb-2 flex items-center gap-2">
            <Link href="/" className="hover:text-brand-dark transition-colors">{t.navHome}</Link>
            <span>/</span>
            <span className="text-brand-primary">{t.navFaq}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-brand-dark">{t.faqTitle}</h1>
          <p className="text-sm text-brand-muted mt-1">{t.faqSubtitle}</p>
        </div>

        {/* Live FAQ search */}
        <div className="relative w-full md:w-80 shadow-sm rounded-xl overflow-hidden bg-brand-surface-alt/50 border border-brand-border/60 focus-within:border-brand-primary transition-colors flex items-center p-1">
          <Search className="w-4 h-4 text-brand-muted mx-2.5" />
          <input
            type="text"
            placeholder={language === 'ar' ? 'بحث في الأسئلة...' : 'Search questions...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-0 outline-none py-2 text-xs text-brand-dark placeholder-brand-silver/50 focus:ring-0"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Category tabs */}
        <div className="lg:col-span-4 bg-brand-surface-mid border border-brand-border/75 p-6 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-brand-dark border-l-4 border-brand-primary pl-3 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-3 mb-2 flex items-center gap-2">
            <Layers className="w-4.5 h-4.5 text-brand-primary" />
            <span>{t.faqCategories}</span>
          </h3>

          <div className="flex flex-col space-y-1">
            <button
              onClick={() => {
                setActiveTab('products');
                setExpandedIndex(0);
              }}
              className={`text-left rtl:text-right px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'products'
                  ? 'bg-brand-primary text-white'
                  : 'bg-brand-surface text-brand-muted hover:bg-brand-surface-alt/45 hover:text-brand-dark border border-brand-border/30'
              }`}
            >
              {language === 'ar' ? 'المنتجات والمخزون' : 'Products & Stock'}
            </button>
            <button
              onClick={() => {
                setActiveTab('technical');
                setExpandedIndex(0);
              }}
              className={`text-left rtl:text-right px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'technical'
                  ? 'bg-brand-primary text-white'
                  : 'bg-brand-surface text-brand-muted hover:bg-brand-surface-alt/45 hover:text-brand-dark border border-brand-border/30'
              }`}
            >
              {language === 'ar' ? 'المواصفات والرموز الفنية' : 'Technical Specifications'}
            </button>
            <button
              onClick={() => {
                setActiveTab('shipping');
                setExpandedIndex(0);
              }}
              className={`text-left rtl:text-right px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'shipping'
                  ? 'bg-brand-primary text-white'
                  : 'bg-brand-surface text-brand-muted hover:bg-brand-surface-alt/45 hover:text-brand-dark border border-brand-border/30'
              }`}
            >
              {language === 'ar' ? 'الشحن والتوصيل اللوجستي' : 'Shipping & Logistics'}
            </button>
          </div>
        </div>

        {/* Right Side: Expanding Accordion Q&A */}
        <div className="lg:col-span-8 space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = expandedIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-brand-surface-mid border border-brand-border/75 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <div
                    onClick={() => toggleExpand(idx)}
                    className="p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-brand-surface-alt/20 transition-colors select-none"
                  >
                    <h3 className="text-sm font-bold text-brand-dark flex items-start gap-2.5">
                      <HelpCircle className="w-4.5 h-4.5 text-brand-primary shrink-0 mt-0.5" />
                      <span>{language === 'ar' ? faq.qAr : faq.qEn}</span>
                    </h3>
                    <button className="text-brand-muted">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-brand-border/45 bg-brand-surface/35 text-xs sm:text-sm text-brand-muted leading-relaxed pl-12 rtl:pl-0 rtl:pr-12 animate-fade-in">
                      {language === 'ar' ? faq.aAr : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-brand-surface-mid border border-brand-border/60 p-12 rounded-2xl text-center text-brand-muted text-sm">
              {language === 'ar' ? 'لا توجد أسئلة تطابق بحثك حالياً.' : 'No FAQs matching your search query.'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
