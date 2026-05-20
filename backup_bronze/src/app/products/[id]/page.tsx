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
    const waNumber = '966500000000'; // Placeholder number
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Back button & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border/60 pb-6">
        <div className="text-xs text-brand-muted font-bold tracking-wider flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-brand-dark transition-colors">{t.navHome}</Link>
          <ChevronRight className="w-3.5 h-3.5 rtl-mirror" />
          <Link href="/products" className="hover:text-brand-dark transition-colors">{t.navProducts}</Link>
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
          <div className="bg-gradient-to-br from-brand-surface to-brand-surface-mid/30 border border-brand-border/80 rounded-2xl p-8 flex items-center justify-center min-h-[350px] relative overflow-hidden group shadow-card">
            {product.image ? (
              <img src={product.image} alt={product.nameEn} className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <>
                <div className="absolute inset-0 bg-hero-pattern opacity-50 opacity-10 z-0"></div>
                {/* Visual Abstract Steel Indicator */}
                <div className="relative z-10 w-36 h-36 bg-brand-surface-alt/75 border-2 border-brand-primary/35 rounded-2xl flex items-center justify-center shadow-card group-hover:scale-105 transition-transform duration-300">
                  <span className="text-brand-primary font-mono font-bold text-sm tracking-widest">{product.sku}</span>
                </div>
              </>
            )}
            
            {/* Tag badges */}
            <div className="absolute top-4 left-4 bg-brand-surface-alt/95 border border-brand-border/50 px-3 py-1 rounded-lg text-xs font-bold text-brand-primary flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>SASO Certified</span>
            </div>

            <div
              className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-xs font-bold ${
                product.inStock
                  ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/30'
                  : 'bg-brand-primary/10 text-brand-primary border border-brand-primary/30'
              }`}
            >
              {product.inStock ? t.prodInStock : t.prodOutOfStock}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="border border-brand-border bg-brand-surface-alt/20 p-2.5 rounded-xl text-center text-[10px] text-brand-muted font-semibold">
              {language === 'ar' ? 'درجة ممتازة' : 'Premium Quality'}
            </div>
            <div className="border border-brand-border bg-brand-surface-alt/20 p-2.5 rounded-xl text-center text-[10px] text-brand-muted font-semibold">
              {language === 'ar' ? 'فحص المصنع كامل' : 'Mill Tested'}
            </div>
            <div className="border border-brand-border bg-brand-surface-alt/20 p-2.5 rounded-xl text-center text-[10px] text-brand-muted font-semibold">
              {language === 'ar' ? 'شحن سريع مؤمن' : 'Insured Delivery'}
            </div>
          </div>
        </div>

        {/* Right Side: Product Details & CTA */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-brand-surface-alt text-brand-primary font-bold text-[10px] uppercase tracking-wider">
              {language === 'ar' ? product.categoryAr : product.categoryEn}
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark leading-tight">
              {language === 'ar' ? product.nameAr : product.nameEn}
            </h1>
            <div className="flex items-center gap-4 text-xs font-bold text-brand-muted uppercase tracking-wider">
              <span>{t.prodSku}: <span className="text-brand-dark font-mono">{product.sku}</span></span>
              <span>•</span>
              <span>{t.prodMaterial}: <span className="text-brand-dark">{language === 'ar' ? product.materialAr : product.materialEn}</span></span>
            </div>
          </div>

          {/* Pricing warning / prompt */}
          <div className="bg-brand-surface-alt/50 border border-brand-border/45 rounded-xl p-4 flex gap-3 items-center">
            <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0" />
            <div className="text-xs text-brand-muted">
              {product.priceSAR ? (
                <>
                  <p className="font-bold text-brand-dark mb-0.5 text-lg">
                    {product.priceSAR} SAR
                  </p>
                  <p>
                    {language === 'ar'
                      ? 'السعر الإرشادي المعروض. قد يختلف السعر الفعلي بناءً على الكمية.'
                      : 'Indicative price shown. Actual price may vary based on volume.'}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-bold text-brand-dark mb-0.5">
                    {language === 'ar' ? 'التسعير عند الطلب' : 'Pricing Upon Request'}
                  </p>
                  <p>
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
            <div className="bg-brand-surface-mid border border-brand-border/50 p-4 rounded-xl space-y-1">
              <span className="text-[10px] text-brand-muted font-bold uppercase tracking-wider">{t.prodMaterial}</span>
              <p className="text-sm font-bold text-brand-dark">{language === 'ar' ? product.materialAr : product.materialEn}</p>
            </div>
            <div className="bg-brand-surface-mid border border-brand-border/50 p-4 rounded-xl space-y-1">
              <span className="text-[10px] text-brand-muted font-bold uppercase tracking-wider">{t.prodGrade}</span>
              <p className="text-sm font-bold text-brand-dark">{language === 'ar' ? product.gradeAr : product.gradeEn}</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleSingleInquiry}
              className="flex-grow inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-primary hover:bg-brand-primary-light text-white font-extrabold rounded-xl shadow-md shadow-brand-primary/20 transform active:scale-[0.98] transition-all text-sm"
            >
              <Send className="w-4.5 h-4.5" />
              <span>{t.prodBtnInquire}</span>
            </button>

            {isInBasket(product.id) ? (
              <button
                onClick={() => removeFromBasket(product.id)}
                className="w-full sm:w-auto px-6 py-3.5 bg-brand-rust/10 border border-brand-rust/45 text-brand-rust hover:bg-brand-rust/20 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>{t.prodBtnRemoveFromBasket}</span>
              </button>
            ) : (
              <button
                onClick={() => addToBasket(product)}
                className="w-full sm:w-auto px-6 py-3.5 bg-brand-surface-alt border border-brand-border/60 text-brand-dark hover:border-brand-primary hover:bg-brand-surface-mid/40 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>{t.prodBtnAddToBasket}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tabs segment: technical sheet vs details */}
      <div className="bg-brand-surface-mid border border-brand-border/80 rounded-2xl overflow-hidden mt-8">
        <div className="flex border-b border-brand-border/70 bg-brand-surface/60">
          <button
            onClick={() => setActiveTab('specs')}
            className={`px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'specs'
                ? 'border-brand-primary text-brand-primary bg-brand-surface-alt/30'
                : 'border-transparent text-brand-muted hover:text-brand-dark'
            }`}
          >
            {t.prodSpecsTab}
          </button>
          <button
            onClick={() => setActiveTab('desc')}
            className={`px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'desc'
                ? 'border-brand-primary text-brand-primary bg-brand-surface-alt/30'
                : 'border-transparent text-brand-muted hover:text-brand-dark'
            }`}
          >
            {t.prodDescTab}
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {activeTab === 'specs' ? (
            <div className="space-y-6">
              <div className="overflow-hidden border border-brand-border/45 rounded-xl">
                <table className="min-w-full divide-y divide-brand-navy-light/45 text-xs sm:text-sm">
                  <tbody className="divide-y divide-brand-navy-light/45 bg-transparent">
                    {Object.entries(language === 'ar' ? product.specsAr : product.specsEn).map(([key, value]) => (
                      <tr key={key} className="odd:bg-brand-surface-alt/20">
                        <td className="px-6 py-4 font-bold text-brand-dark w-1/3">{key}</td>
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
                    <div className="bg-brand-surface-alt/20 border border-brand-border/45 rounded-xl p-4">
                      <p className="text-xs font-bold text-brand-dark mb-2">{language === 'ar' ? 'المنشأ' : 'Available Origins'}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.origins.map(origin => (
                          <span key={origin} className="px-2 py-1 bg-brand-surface border border-brand-border/50 rounded text-[10px] text-brand-primary">{origin}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.widthsMm && (
                    <div className="bg-brand-surface-alt/20 border border-brand-border/45 rounded-xl p-4">
                      <p className="text-xs font-bold text-brand-dark mb-2">{language === 'ar' ? 'العرض (ملم)' : 'Widths (mm)'}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.widthsMm.map(w => (
                          <span key={w} className="px-2 py-1 bg-brand-surface border border-brand-border/50 rounded text-[10px] text-brand-muted">{w}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.heightsMm && (
                    <div className="bg-brand-surface-alt/20 border border-brand-border/45 rounded-xl p-4">
                      <p className="text-xs font-bold text-brand-dark mb-2">{language === 'ar' ? 'الارتفاع (ملم)' : 'Heights (mm)'}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.heightsMm.map(h => (
                          <span key={h} className="px-2 py-1 bg-brand-surface border border-brand-border/50 rounded text-[10px] text-brand-muted">{h}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.lengthsMm && (
                    <div className="bg-brand-surface-alt/20 border border-brand-border/45 rounded-xl p-4">
                      <p className="text-xs font-bold text-brand-dark mb-2">{language === 'ar' ? 'الطول (ملم)' : 'Lengths (mm)'}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.lengthsMm.map(l => (
                          <span key={l} className="px-2 py-1 bg-brand-surface border border-brand-border/50 rounded text-[10px] text-brand-muted">{l}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.wt && (
                    <div className="bg-brand-surface-alt/20 border border-brand-border/45 rounded-xl p-4">
                      <p className="text-xs font-bold text-brand-dark mb-2">WT</p>
                      <div className="flex flex-wrap gap-2">
                        {product.wt.map(val => (
                          <span key={val} className="px-2 py-1 bg-brand-surface border border-brand-border/50 rounded text-[10px] text-brand-muted">{val}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.tf && (
                    <div className="bg-brand-surface-alt/20 border border-brand-border/45 rounded-xl p-4">
                      <p className="text-xs font-bold text-brand-dark mb-2">TF</p>
                      <div className="flex flex-wrap gap-2">
                        {product.tf.map(val => (
                          <span key={val} className="px-2 py-1 bg-brand-surface border border-brand-border/50 rounded text-[10px] text-brand-muted">{val}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-brand-muted">
              {product.longDescriptionEn ? (
                <div className="space-y-4 whitespace-pre-line">
                  {language === 'ar' ? (/* No Arabic translation provided, fallback to EN for long desc temporarily or handle appropriately. Using 'product.descriptionAr' as fallback */ product.descriptionAr) : product.longDescriptionEn}
                </div>
              ) : (
                <p>{language === 'ar' ? product.descriptionAr : product.descriptionEn}</p>
              )}
              
              {product.specificationsEn && (
                <div className="border-t border-brand-border/50 pt-4 mt-4 space-y-2 text-xs">
                  <p className="font-bold text-brand-dark uppercase tracking-wider">
                    {language === 'ar' ? 'المواصفات الفنية:' : 'Technical Specifications:'}
                  </p>
                  <ul className="list-disc pl-5 rtl:pl-0 rtl:pr-5 space-y-1 text-brand-muted">
                    {product.specificationsEn.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {product.applicationsEn && (
                <div className="border-t border-brand-border/50 pt-4 mt-4 space-y-2 text-xs">
                  <p className="font-bold text-brand-dark uppercase tracking-wider">
                    {language === 'ar' ? 'التطبيقات:' : 'Applications:'}
                  </p>
                  <ul className="list-disc pl-5 rtl:pl-0 rtl:pr-5 space-y-1 text-brand-muted">
                    {product.applicationsEn.map((app, i) => (
                      <li key={i}>{app}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Fallback to original standards if not overridden */}
              {!product.specificationsEn && (
                <div className="border-t border-brand-border/50 pt-4 mt-4 space-y-2 text-xs">
                  <p className="font-bold text-brand-dark uppercase tracking-wider">
                    {language === 'ar' ? 'معايير فحص الجودة المطبقة:' : 'Applicable Compliance Standards:'}
                  </p>
                  <ul className="list-disc pl-5 rtl:pl-0 rtl:pr-5 space-y-1 text-brand-muted">
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
        <section className="space-y-6 pt-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">
            {t.prodRelatedTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-brand-surface-mid border border-brand-border/50 rounded-xl overflow-hidden hover:border-brand-primary/40 shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-32 bg-gradient-to-br from-brand-surface to-brand-surface-mid/30 flex items-center justify-center p-3 border-b border-brand-border/50 relative overflow-hidden">
                  {prod.image ? (
                    <img src={prod.image} alt={prod.nameEn} className="absolute inset-0 w-full h-full object-cover z-0" />
                  ) : (
                    <span className="text-brand-primary font-mono font-bold text-[10px] bg-brand-surface-alt/60 border border-brand-primary/20 px-2 py-1 rounded relative z-10">
                      {prod.sku}
                    </span>
                  )}
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
                  <h3 className="text-xs font-bold text-brand-dark line-clamp-2 min-h-[32px]">
                    {language === 'ar' ? prod.nameAr : prod.nameEn}
                  </h3>
                  <Link
                    href={`/products/${prod.id}`}
                    className="w-full py-1.5 bg-brand-surface-alt hover:bg-brand-surface-mid/50 text-brand-dark font-bold rounded-lg text-[10px] border border-brand-border/50 text-center block"
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
