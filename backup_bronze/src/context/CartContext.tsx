'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';
import { useLanguage } from './LanguageContext';

interface CartContextType {
  basketItems: Product[];
  addToBasket: (product: Product) => void;
  removeFromBasket: (productId: string) => void;
  clearBasket: () => void;
  isInBasket: (productId: string) => boolean;
  triggerWhatsAppInquiry: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [basketItems, setBasketItems] = useState<Product[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    const stored = localStorage.getItem('primesteel_basket');
    if (stored) {
      try {
        setBasketItems(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse basket items', e);
      }
    }
  }, []);

  const saveBasket = (items: Product[]) => {
    setBasketItems(items);
    localStorage.setItem('primesteel_basket', JSON.stringify(items));
  };

  const addToBasket = (product: Product) => {
    if (!basketItems.some((item) => item.id === product.id)) {
      const updated = [...basketItems, product];
      saveBasket(updated);
    }
  };

  const removeFromBasket = (productId: string) => {
    const updated = basketItems.filter((item) => item.id !== productId);
    saveBasket(updated);
  };

  const clearBasket = () => {
    saveBasket([]);
  };

  const isInBasket = (productId: string) => {
    return basketItems.some((item) => item.id === productId);
  };

  const triggerWhatsAppInquiry = () => {
    if (basketItems.length === 0) return;

    const waNumber = '966500000000'; // Placeholder KSA number as per spec

    let text = '';
    if (language === 'ar') {
      text = `مرحباً PrimeSteelKSA، أنا مهتم بالاستفسار عن المنتجات التالية:\n\n`;
      basketItems.forEach((item, index) => {
        text += `${index + 1}. ${item.nameAr} (رمز المنتج SKU: ${item.sku})\n`;
      });
      text += `\nيرجى تزويدي بالأسعار ومدى توفرها في مخازنكم. شكراً لكم!`;
    } else {
      text = `Hello PrimeSteelKSA, I am interested in inquiring about the following products:\n\n`;
      basketItems.forEach((item, index) => {
        text += `${index + 1}. ${item.nameEn} (SKU: ${item.sku})\n`;
      });
      text += `\nPlease share current pricing and availability. Thank you!`;
    }

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;
    window.open(waUrl, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        basketItems,
        addToBasket,
        removeFromBasket,
        clearBasket,
        isInBasket,
        triggerWhatsAppInquiry,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
export { CartContext };
