/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CustomBuilderModal } from './components/CustomBuilderModal';
import { AtelierStory } from './components/AtelierStory';
import { CoursePromo } from './components/CoursePromo';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';
import { Sparkles, Filter, Check, ShoppingBag } from 'lucide-react';

export default function App() {
  // State
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas as Peças');
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('quelle_cart_items') || localStorage.getItem('mv_cart_items');
      return saved ? JSON.parse(saved) : [
        {
          id: 'initial-item-1',
          productId: 'bolsa-riviera',
          name: 'Bolsa Riviera Náutica',
          price: 580,
          image: '/src/assets/images/bag_riviera_nautical_1793929437979.jpg',
          selectedColor: 'Areia Natural',
          selectedHardware: 'Dourado Nobre',
          monogram: 'QC',
          quantity: 1,
          isDigital: false
        }
      ];
    } catch {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCustomBuilderOpen, setIsCustomBuilderOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Coupons
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('quelle_cart_items', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (
    product: Product,
    selectedColor?: string,
    selectedHardware?: string,
    monogram?: string,
    quantity: number = 1
  ) => {
    const color = selectedColor || product.colors[0]?.name || 'Padrão';
    const hardware = selectedHardware || 'Dourado Nobre';
    const cleanMonogram = monogram?.trim() || undefined;
    const instanceId = `${product.id}-${color}-${hardware}-${cleanMonogram || 'nomono'}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === instanceId);
      if (existing) {
        return prev.map((item) =>
          item.id === instanceId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: instanceId,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          selectedColor: color,
          selectedHardware: hardware,
          monogram: cleanMonogram,
          quantity: quantity,
          isDigital: product.isDigital
        }
      ];
    });

    showToast(`"${product.name}" foi adicionada à sua sacola.`);
    setIsCartOpen(true);
  };

  const handleAddCustomToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
    showToast(`Sua encomenda sob medida foi adicionada à sacola.`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleApplyCoupon = (code: string) => {
    if (code === 'QUELLE10' || code === 'MARIA10' || code === 'PRIMEIRACOMPRA') {
      setAppliedCoupon(code);
      setCouponDiscount(10);
      return { success: true, message: 'Cupom de 10% aplicado com sucesso!' };
    }
    if (code === 'BEMVINDA') {
      setAppliedCoupon(code);
      setCouponDiscount(15);
      return { success: true, message: 'Cupom exclusivo de 15% aplicado!' };
    }
    return { success: false, message: 'Cupom inválido. Tente QUELLE10' };
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filter products by Home Decor & Utility Categories
  const categories = [
    'Todas as Peças',
    'Jogos de Banheiro',
    'Mesa & Decoração',
    'Tapetes & Passadeiras',
    'Ofertas & Promoções',
    'Bolsas & Acessórios',
    'Cursos & Receitas'
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === 'Todas as Peças') return true;
    if (selectedCategory === 'Ofertas & Promoções') {
      return p.isPromo === true || p.category === 'Ofertas & Promoções';
    }
    return p.category === selectedCategory;
  });

  const courseProduct = PRODUCTS.find((p) => p.isDigital) || PRODUCTS[PRODUCTS.length - 1];

  // Calculate cart count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Cart total calculation for checkout
  const rawSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (rawSubtotal * couponDiscount) / 100;
  const shippingFee = rawSubtotal >= 450 || rawSubtotal === 0 ? 0 : 24.9;
  const total = Math.max(0, rawSubtotal - discountAmount + shippingFee);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F6] text-[#24211D]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#1E1A16] text-[#FBF9F6] text-xs py-3 px-4 rounded-xl shadow-2xl border border-[#C29B38] flex items-center gap-2 animate-in fade-in slide-in-from-top duration-300">
          <Check className="w-4 h-4 text-[#C29B38]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Top Header with Categories Sub-bar */}
      <Header
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCustomBuilder={() => setIsCustomBuilderOpen(true)}
        activeCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      <main className="flex-1">
        {/* 3. Hero Section with Category Shortcuts */}
        <Hero
          onExploreClick={() => {
            const section = document.getElementById('colecao');
            section?.scrollIntoView({ behavior: 'smooth' });
          }}
          onCustomClick={() => setIsCustomBuilderOpen(true)}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 4. Trust Reassurance Pillars */}
        <TrustBar />

        {/* 5. Featured Products & Catalog Section */}
        <section id="colecao" className="py-14 lg:py-20 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#EAE3DC]">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#93784A] font-semibold mb-2">
                <span>Catálogo Completo</span>
                <span aria-hidden="true">·</span>
                <span>Utilidades & Decoração Artesanal</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#1E1A16]">
                Coleção para Casa, Mesa & Banho
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6156] mt-1.5 max-w-xl">
                Jogos de banheiro com base antiderrapante, sousplats rendados para mesa posta, tapetes aconchegantes e peças com pronta entrega ou sob medida.
              </p>
            </div>

            {/* Interactive Filter Tabs (Functional Button Controls §1.A) */}
            <div className="flex items-center gap-1.5 p-1.5 bg-[#FAF7F2] rounded-xl border border-[#EAE3DC] overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#1E1A16] text-[#FBF9F6] shadow-xs'
                      : cat === 'Ofertas & Promoções'
                      ? 'text-[#B8532F] font-bold hover:bg-[#FBEFEA]'
                      : 'text-[#6B6156] hover:text-[#1E1A16] hover:bg-[#F0EAE4]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid (Generous 3-column desktop layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(prod) => setSelectedProduct(prod)}
                onAddToCart={(prod, color) => handleAddToCart(prod, color)}
              />
            ))}
          </div>

          {/* Custom Order Callout Strip */}
          <div className="mt-14 p-8 sm:p-10 bg-[#F5EFEB] rounded-2xl border border-[#EAE3DC] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#93784A] font-semibold mb-1.5">
                <Sparkles className="w-4 h-4 text-[#C29B38]" />
                <span>Ateliê Sob Medida</span>
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#1E1A16]">
                Deseja uma cor específica ou tamanho sob medida?
              </h3>
              <p className="text-xs sm:text-sm text-[#5E554C] mt-1 leading-relaxed">
                Nossas mestras artesãs tecem peças personalizadas com paleta de mais de 12 cores de fios náuticos e gravação das suas iniciais a laser na plaquinha de metal.
              </p>
            </div>

            <button
              onClick={() => setIsCustomBuilderOpen(true)}
              className="py-3 px-6 bg-[#1E1A16] text-[#FBF9F6] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#342D26] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer shadow-md shrink-0"
            >
              Criar Bolsa Personalizada
            </button>
          </div>
        </section>

        {/* 6. Atelier Story & Slow Fashion Craft */}
        <AtelierStory onCustomClick={() => setIsCustomBuilderOpen(true)} />

        {/* 7. Course & Masterclass Promotion */}
        <CoursePromo
          courseProduct={courseProduct}
          onAddToCart={(prod) => handleAddToCart(prod)}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
        />

        {/* 8. Customer Reviews & Social Proof */}
        <ReviewsSection />

        {/* 9. FAQ Section */}
        <div id="faq">
          <FaqSection />
        </div>
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Floating WhatsApp Concierge Button */}
      <WhatsAppButton />

      {/* 12. Modals and Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CustomBuilderModal
        isOpen={isCustomBuilderOpen}
        onClose={() => setIsCustomBuilderOpen(false)}
        onAddCustomToCart={handleAddCustomToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        couponDiscount={couponDiscount}
        appliedCoupon={appliedCoupon}
        onApplyCoupon={handleApplyCoupon}
        onRemoveCoupon={handleRemoveCoupon}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        total={total}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
