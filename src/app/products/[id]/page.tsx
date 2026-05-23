'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { useLanguage } from '../../../context/LanguageContext';
import { useCart } from '../../../context/CartContext';
import { products, Product } from '../../../data/products';
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  Plus,
  Send,
  Sparkles,
  Info,
  Layers,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const { addToBasket, isInBasket, removeFromBasket } = useCart();
  const [activeTab, setActiveTab] = useState<'specs' | 'desc'>('specs');

  // Find the exact product
  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  // Related products (4 items from the same category)
  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  // Single WhatsApp Inquiry CTA trigger
  const handleSingleInquiry = () => {
    const waNumber = '966551438917'; // Updated WhatsApp number
    const prodName = language === 'ar' ? product.nameAr : product.nameEn;
    const text = language === 'ar'
      ? `مرحباً PrimeSteelKSA، أنا مهتم بالاستفسار عن هذا المنتج:\n\n*المنتج:* ${prodName}\n*الرمز SKU:* ${product.sku}\n*المادة الخام:* ${product.materialAr}\n\nيرجى تزويدي بالأسعار ومدى توفرها حالياً. شكراً!`
      : `Hello PrimeSteelKSA, I am interested in inquiring about this product:\n\n*Product:* ${prodName}\n*SKU:* ${product.sku}\n*Material:* ${product.materialEn}\n\nPlease share current pricing and availability. Thank you!`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;
    window.open(waUrl, '_blank');
  };

  // Schema.org Product Structured Data JSON
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: language === 'ar' ? product.nameAr : product.nameEn,
    image: 'https://primesteelksa.com/assets/logo.svg', // logo fallback
    description: language === 'ar' ? product.descriptionAr : product.descriptionEn,
    sku: product.sku,
    mpn: product.sku,
    brand: {
      '@type': 'Brand',
      name: 'PrimeSteelKSA',
    },
    offers: {
      '@type': 'Offer',
      url: `https://primesteelksa.com/products/${product.id}`,
      priceCurrency: 'SAR',
      price: '0.00', // upon request
      priceValidUntil: '2027-01-01',
      itemCondition: 'https://schema.org/NewCondition',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
      seller: {
        '@type': 'LocalBusiness',
        name: 'PrimeSteelKSA',
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 bg-brand-surface">
      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Back button & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
        <div className="text-[10px] text-brand-muted font-bold tracking-widest flex items-center gap-2 flex-wrap uppercase">
          <Link href="/" className="hover:text-white transition-colors">{t.navHome}</Link>
          <ChevronRight className="w-3.5 h-3.5 rtl-mirror" />
          <Link href="/products" className="hover:text-white transition-colors">{t.navProducts}</Link>
          <ChevronRight className="w-3.5 h-3.5 rtl-mirror" />
          <span className="text-brand-primary max-w-xs truncate">
            {language === 'ar' ? product.nameAr : product.nameEn}
          </span>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs text-brand-primary hover:underline font-bold"
        >
          <ArrowLeft className="w-4 h-4 rtl-mirror" />
          <span>{language === 'ar' ? 'العودة إلى الكتالوج' : 'Back to Catalog'}</span>
        </Link>
      </div>

      {/* Main product panel grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Product visual showcase */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel border border-white/5 rounded-2xl p-8 flex items-center justify-center min-h-[350px] relative overflow-hidden group shadow-glow">
            {product.image ? (
              <img src={product.image} alt={product.nameEn} className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <>
                <div className="absolute inset-0 bg-hero-pattern opacity-[0.05] z-0"></div>
                {/* Visual Abstract Steel Indicator */}
                <div className="relative z-10 w-36 h-36 bg-brand-surface-mid border border-white/10 rounded-2xl flex items-center justify-center shadow-card group-hover:scale-105 transition-transform duration-300">
                  <span className="text-brand-primary font-mono font-bold text-sm tracking-widest">{product.sku}</span>
                </div>
              </>
            )}
            
            {/* Tag badges */}
            <div className="absolute top-4 left-4 bg-[#05060a]/90 border border-white/10 px-3 py-1 rounded-lg text-xs font-bold text-brand-primary flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>SASO Certified</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="glass-panel border border-white/5 bg-[#0b0d14]/30 p-3 rounded-xl text-center text-[10px] text-brand-muted font-bold">
              {language === 'ar' ? 'درجة ممتازة' : 'Premium Quality'}
            </div>
            <div className="glass-panel border border-white/5 bg-[#0b0d14]/30 p-3 rounded-xl text-center text-[10px] text-brand-muted font-bold">
              {language === 'ar' ? 'فحص المصنع كامل' : 'Mill Tested'}
            </div>
            <div className="glass-panel border border-white/5 bg-[#0b0d14]/30 p-3 rounded-xl text-center text-[10px] text-brand-muted font-bold">
              {language === 'ar' ? 'شحن سريع مؤمن' : 'Insured Delivery'}
            </div>
          </div>
        </div>

        {/* Right Side: Product Details & CTA */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3.5">
            <div className="inline-flex items-center gap-1 text-brand-primary font-extrabold text-[10px] uppercase tracking-widest">
              {language === 'ar' ? product.categoryAr : product.categoryEn}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight font-display">
              {language === 'ar' ? product.nameAr : product.nameEn}
            </h1>
            <div className="flex items-center gap-4 text-xs font-bold text-brand-muted uppercase tracking-wider">
              <span>{t.prodSku}: <span className="text-white font-mono">{product.sku}</span></span>
              <span>•</span>
              <span>{t.prodMaterial}: <span className="text-white">{language === 'ar' ? product.materialAr : product.materialEn}</span></span>
            </div>
          </div>

          {/* Pricing warning / prompt */}
          <div className="glass-panel border border-white/5 bg-[#0b0d14]/40 rounded-xl p-5 flex gap-4 items-center">
            <ShieldCheck className="w-6 h-6 text-brand-primary shrink-0" />
            <div className="text-xs text-brand-muted space-y-1">
              {product.priceSAR ? (
                <>
                  <p className="font-extrabold text-white text-xl">
                    {product.priceSAR} SAR
                  </p>
                  <p className="leading-relaxed">
                    {language === 'ar'
                      ? 'السعر الإرشادي المعروض. قد يختلف السعر الفعلي بناءً على الكمية.'
                      : 'Indicative price shown. Actual price may vary based on volume.'}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-extrabold text-white text-sm">
                    {language === 'ar' ? 'التسعير عند الطلب' : 'Pricing Upon Request'}
                  </p>
                  <p className="leading-relaxed">
                    {language === 'ar'
                      ? 'بسبب تقلبات أسعار الحديد، نوفر عروض أسعار دقيقة ومحدثة فوراً لمشروعك عبر الواتساب.'
                      : 'Due to steel market fluctuations, we provide exact updated custom quotes via direct WhatsApp inquiry.'}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Core Specs Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel border border-white/5 p-4 rounded-xl space-y-1">
              <span className="text-[10px] text-brand-muted font-bold uppercase tracking-wider">{t.prodMaterial}</span>
              <p className="text-sm font-bold text-white">{language === 'ar' ? product.materialAr : product.materialEn}</p>
            </div>
            <div className="glass-panel border border-white/5 p-4 rounded-xl space-y-1">
              <span className="text-[10px] text-brand-muted font-bold uppercase tracking-wider">{t.prodGrade}</span>
              <p className="text-sm font-bold text-white">{language === 'ar' ? product.gradeAr : product.gradeEn}</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
            <button
              onClick={handleSingleInquiry}
              className="flex-grow inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-brand-primary hover:bg-brand-primary-light text-white hover:text-brand-surface font-extrabold rounded-xl shadow-md shadow-brand-primary/20 transition-all duration-300 text-sm"
            >
              <Send className="w-4.5 h-4.5" />
              <span>{t.prodBtnInquire}</span>
            </button>

            {isInBasket(product.id) ? (
              <button
                onClick={() => removeFromBasket(product.id)}
                className="w-full sm:w-auto px-6 py-4 bg-brand-rust/10 border border-brand-rust/30 text-brand-rust hover:bg-brand-rust/20 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>{t.prodBtnRemoveFromBasket}</span>
              </button>
            ) : (
              <button
                onClick={() => addToBasket(product)}
                className="w-full sm:w-auto px-6 py-4 bg-brand-surface-alt border border-white/10 text-white hover:border-brand-primary hover:bg-[#0b0d14] font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{t.prodBtnAddToBasket}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grouped Product Items Section */}
      {product.groupedItems && product.groupedItems.length > 0 && (
        <div className="space-y-6 mt-8">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-brand-primary" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display">
              {language === 'ar' ? 'المقاسات والأسعار المتاحة للمنتج' : 'Available Sizes & Grouped Items'}
            </h2>
          </div>
          <div className="overflow-x-auto border border-white/5 rounded-2xl glass-panel bg-[#0b0d14]/20">
            <table className="min-w-full divide-y divide-white/5 text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#05060a]/60 text-left rtl:text-right text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">
                  <th className="px-6 py-4">{language === 'ar' ? 'البند التفصيلي والمقاس' : 'Detailed Item & Dimensions'}</th>
                  <th className="px-6 py-4 w-1/4">{language === 'ar' ? 'السعر (ريال سعودي)' : 'Price (SAR)'}</th>
                  <th className="px-6 py-4 w-1/4 text-center">{language === 'ar' ? 'طلب عرض سعر سريع' : 'Inquire'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-transparent">
                {product.groupedItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors odd:bg-[#0b0d14]/40">
                    <td className="px-6 py-4 font-semibold text-white font-mono">{item.name}</td>
                    <td className="px-6 py-4 font-mono font-bold text-brand-primary text-sm sm:text-base">
                      {item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })} SAR
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => {
                          const waNumber = '966551438917';
                          const prodName = language === 'ar' ? product.nameAr : product.nameEn;
                          const text = language === 'ar'
                            ? `مرحباً PrimeSteelKSA، أود الاستفسار عن هذا البند المحدد:\n\n*المنتج الرئيسي:* ${prodName}\n*البند المطلوب:* ${item.name}\n*السعر:* ${item.price} ريال سعودي\n\nيرجى تزويدي بالتوفر ومواعيد التوصيل لمشروعي. شكراً!`
                            : `Hello PrimeSteelKSA, I am interested in inquiring about this specific item option:\n\n*Main Product:* ${prodName}\n*Selected Item:* ${item.name}\n*Price:* ${item.price} SAR\n\nPlease confirm availability and delivery timeframe. Thank you!`;
                          window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, '_blank');
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-white font-extrabold rounded-lg text-xs transition-all duration-300"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>{language === 'ar' ? 'استفسار' : 'Inquire'}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tabs segment: technical sheet vs details */}
      <div className="glass-panel border border-white/5 rounded-2xl overflow-hidden mt-8">
        <div className="flex border-b border-white/5 bg-[#05060a]/35">
          <button
            onClick={() => setActiveTab('specs')}
            className={`px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'specs'
                ? 'border-brand-primary text-brand-primary bg-brand-surface-alt/30'
                : 'border-transparent text-brand-muted hover:text-white'
            }`}
          >
            {t.prodSpecsTab}
          </button>
          <button
            onClick={() => setActiveTab('desc')}
            className={`px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'desc'
                ? 'border-brand-primary text-brand-primary bg-brand-surface-alt/30'
                : 'border-transparent text-brand-muted hover:text-white'
            }`}
          >
            {t.prodDescTab}
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {activeTab === 'specs' ? (
            <div className="space-y-6">
              <div className="overflow-hidden border border-white/5 rounded-xl">
                <table className="min-w-full divide-y divide-white/5 text-xs sm:text-sm">
                  <tbody className="divide-y divide-white/5 bg-transparent">
                    {Object.entries(language === 'ar' ? product.specsAr : product.specsEn).map(([key, value]) => (
                      <tr key={key} className="odd:bg-[#0b0d14]/40">
                        <td className="px-6 py-4 font-bold text-white w-1/3">{key}</td>
                        <td className="px-6 py-4 text-brand-muted font-semibold">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Detailed Technical Dimensions */}
              {(product.widthsMm || product.origins) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.origins && (
                    <div className="glass-panel border border-white/5 bg-[#0b0d14]/20 p-4 rounded-xl">
                      <p className="text-xs font-bold text-white mb-2.5 font-display">{language === 'ar' ? 'المنشأ' : 'Available Origins'}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.origins.map(origin => (
                          <span key={origin} className="px-2 py-1 bg-[#0b0d14] border border-white/10 rounded text-[10px] text-brand-primary font-bold uppercase tracking-wider">{origin}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.widthsMm && (
                    <div className="glass-panel border border-white/5 bg-[#0b0d14]/20 p-4 rounded-xl">
                      <p className="text-xs font-bold text-white mb-2.5 font-display">{language === 'ar' ? 'العرض (ملم)' : 'Widths (mm)'}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.widthsMm.map(w => (
                          <span key={w} className="px-2 py-1 bg-[#0b0d14] border border-white/10 rounded text-[10px] text-brand-muted font-bold">{w}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.heightsMm && (
                    <div className="glass-panel border border-white/5 bg-[#0b0d14]/20 p-4 rounded-xl">
                      <p className="text-xs font-bold text-white mb-2.5 font-display">{language === 'ar' ? 'الارتفاع (ملم)' : 'Heights (mm)'}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.heightsMm.map(h => (
                          <span key={h} className="px-2 py-1 bg-[#0b0d14] border border-white/10 rounded text-[10px] text-brand-muted font-bold">{h}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.lengthsMm && (
                    <div className="glass-panel border border-white/5 bg-[#0b0d14]/20 p-4 rounded-xl">
                      <p className="text-xs font-bold text-white mb-2.5 font-display">{language === 'ar' ? 'الطول (ملم)' : 'Lengths (mm)'}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.lengthsMm.map(l => (
                          <span key={l} className="px-2 py-1 bg-[#0b0d14] border border-white/10 rounded text-[10px] text-brand-muted font-bold">{l}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.wt && (
                    <div className="glass-panel border border-white/5 bg-[#0b0d14]/20 p-4 rounded-xl">
                      <p className="text-xs font-bold text-white mb-2.5 font-display">WT</p>
                      <div className="flex flex-wrap gap-2">
                        {product.wt.map(val => (
                          <span key={val} className="px-2 py-1 bg-[#0b0d14] border border-white/10 rounded text-[10px] text-brand-muted font-bold">{val}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.tf && (
                    <div className="glass-panel border border-white/5 bg-[#0b0d14]/20 p-4 rounded-xl">
                      <p className="text-xs font-bold text-white mb-2.5 font-display">TF</p>
                      <div className="flex flex-wrap gap-2">
                        {product.tf.map(val => (
                          <span key={val} className="px-2 py-1 bg-[#0b0d14] border border-white/10 rounded text-[10px] text-brand-muted font-bold">{val}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-brand-muted">
              {product.longDescriptionEn ? (
                <div className="space-y-4 whitespace-pre-line">
                  {language === 'ar' ? (product.longDescriptionAr || product.descriptionAr) : product.longDescriptionEn}
                </div>
              ) : (
                <p>{language === 'ar' ? product.descriptionAr : product.descriptionEn}</p>
              )}
              
              {(language === 'ar' ? product.specificationsAr : product.specificationsEn) && (
                <div className="border-t border-white/5 pt-4 mt-4 space-y-2.5 text-xs">
                  <p className="font-bold text-white uppercase tracking-wider font-display">
                    {language === 'ar' ? 'المواصفات الفنية:' : 'Technical Specifications:'}
                  </p>
                  <ul className="list-disc pl-5 rtl:pl-0 rtl:pr-5 space-y-1.5 text-brand-muted">
                    {(language === 'ar' ? product.specificationsAr : product.specificationsEn)?.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {(language === 'ar' ? product.applicationsAr : product.applicationsEn) && (
                <div className="border-t border-white/5 pt-4 mt-4 space-y-2.5 text-xs">
                  <p className="font-bold text-white uppercase tracking-wider font-display">
                    {language === 'ar' ? 'التطبيقات:' : 'Applications:'}
                  </p>
                  <ul className="list-disc pl-5 rtl:pl-0 rtl:pr-5 space-y-1.5 text-brand-muted">
                    {(language === 'ar' ? product.applicationsAr : product.applicationsEn)?.map((app, i) => (
                      <li key={i}>{app}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Fallback to original standards if not overridden */}
              {!product.specificationsEn && (
                <div className="border-t border-white/5 pt-4 mt-4 space-y-2.5 text-xs">
                  <p className="font-bold text-white uppercase tracking-wider font-display">
                    {language === 'ar' ? 'معايير فحص الجودة المطبقة:' : 'Applicable Compliance Standards:'}
                  </p>
                  <ul className="list-disc pl-5 rtl:pl-0 rtl:pr-5 space-y-1.5 text-brand-muted">
                    <li>{language === 'ar' ? 'الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)' : 'Saudi Standards, Metrology and Quality Organization (SASO)'}</li>
                    <li>{language === 'ar' ? 'الجمعية الأمريكية للاختبار والمواد (ASTM)' : 'American Society for Testing and Materials (ASTM)'}</li>
                    <li>{language === 'ar' ? 'معايير الصناعات اليابانية (JIS)' : 'Japanese Industrial Standards (JIS)'}</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Related items */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6 pt-8 border-t border-white/5">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display">
            {t.prodRelatedTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((prod) => (
              <div
                key={prod.id}
                className="glass-panel glass-panel-hover rounded-xl overflow-hidden flex flex-col justify-between group"
              >
                <div className="h-32 bg-gradient-to-br from-brand-surface-alt to-brand-surface-mid/30 flex items-center justify-center p-3 border-b border-white/5 relative overflow-hidden">
                  {prod.image ? (
                    <img src={prod.image} alt={prod.nameEn} className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <span className="text-brand-primary font-mono font-bold text-[10px] bg-brand-surface-mid border border-white/10 px-2.5 py-1 rounded relative z-10">
                      {prod.sku}
                    </span>
                  )}
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between space-y-3 bg-[#05060a]/20">
                  <h3 className="text-xs font-bold text-white line-clamp-2 min-h-[32px] group-hover:text-brand-primary transition-colors">
                    {language === 'ar' ? prod.nameAr : prod.nameEn}
                  </h3>
                  <Link
                    href={`/products/${prod.id}`}
                    className="w-full py-1.5 bg-brand-surface-mid/80 hover:bg-brand-surface-mid text-white font-bold rounded-lg text-[10px] border border-white/10 text-center block"
                  >
                    {t.prodBtnDetails}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
