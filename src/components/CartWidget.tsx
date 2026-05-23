'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { ShoppingCart, X, Trash2, Send, ChevronUp, ChevronDown } from 'lucide-react';

export const CartWidget: React.FC = () => {
  const { basketItems, removeFromBasket, clearBasket, triggerWhatsAppInquiry } = useCart();
  const { language, t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  if (basketItems.length === 0) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 max-w-sm w-[90vw] sm:w-96 glass-panel border border-white/5 rounded-2xl shadow-glow transition-all duration-500 overflow-hidden ${
        isExpanded ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-0'
      }`}
    >
      {/* Header bar */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gradient-to-r from-[#0b0d14] to-brand-surface-alt/80 border-b border-white/5 p-4 flex items-center justify-between cursor-pointer hover:bg-brand-surface-alt transition-colors select-none"
      >
        <div className="flex items-center gap-2.5">
          <div className="relative p-2 bg-brand-primary/10 rounded-lg border border-white/5">
            <ShoppingCart className="w-5 h-5 text-brand-primary" />
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-primary text-brand-surface font-extrabold text-xs rounded-full flex items-center justify-center animate-bounce">
              {basketItems.length}
            </span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide font-display">
              {t.basketTitle}
            </h4>
            <p className="text-[10px] text-brand-muted">
              {basketItems.length} {t.basketCountItems}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-brand-muted hover:text-white" />
          ) : (
            <ChevronUp className="w-5 h-5 text-brand-muted hover:text-white" />
          )}
        </div>
      </div>

      {/* Expanded body panel */}
      {isExpanded && (
        <div className="flex flex-col max-h-80 bg-[#05060a]/95 backdrop-blur-md">
          {/* Items list */}
          <div className="overflow-y-auto p-4 space-y-3 divide-y divide-white/5">
            {basketItems.map((item) => (
              <div key={item.id} className="flex items-start justify-between gap-3 pt-3 first:pt-0">
                <div className="flex-1">
                  <h5 className="text-xs font-semibold text-white line-clamp-1">
                    {language === 'ar' ? item.nameAr : item.nameEn}
                  </h5>
                  <p className="text-[10px] text-brand-muted font-bold uppercase mt-0.5 tracking-wider font-mono">
                    SKU: {item.sku}
                  </p>
                </div>
                <button
                  onClick={() => removeFromBasket(item.id)}
                  className="p-1 rounded text-brand-muted hover:text-brand-rust hover:bg-[#0b0d14] transition-colors"
                  title={t.prodBtnRemoveFromBasket}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Footer inquiry triggers */}
          <div className="p-4 bg-brand-surface-alt border-t border-white/5 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-brand-muted">
              <span>{language === 'ar' ? 'استفسار مجمع:' : 'Bulk Inquiry:'}</span>
              <button
                onClick={clearBasket}
                className="text-[10px] text-brand-rust hover:underline font-bold"
              >
                {language === 'ar' ? 'مسح السلة' : 'Clear All'}
              </button>
            </div>
            <button
              onClick={triggerWhatsAppInquiry}
              className="flex items-center justify-center gap-2 p-3 bg-brand-primary text-white hover:text-brand-surface font-extrabold text-xs rounded-xl hover:bg-brand-primary-light hover:shadow-md shadow-brand-primary/20 shadow-sm transition-all duration-300 w-full active:scale-[0.98]"
            >
              <Send className="w-4 h-4 shrink-0" />
              <span>{t.basketInquireSelected}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartWidget;
