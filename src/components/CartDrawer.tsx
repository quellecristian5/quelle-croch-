import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, Tag, Truck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: () => void;
  couponDiscount: number;
  appliedCoupon: string | null;
  onApplyCoupon: (code: string) => { success: boolean; message: string };
  onRemoveCoupon: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  couponDiscount,
  appliedCoupon,
  onApplyCoupon,
  onRemoveCoupon
}) => {
  const [couponCodeInput, setCouponCodeInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<string | null>(null);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 450;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - rawSubtotal);
  const freeShippingProgress = Math.min(100, (rawSubtotal / freeShippingThreshold) * 100);

  const discountAmount = (rawSubtotal * couponDiscount) / 100;
  const shippingFee = rawSubtotal >= freeShippingThreshold || rawSubtotal === 0 ? 0 : 24.9;
  const total = Math.max(0, rawSubtotal - discountAmount + shippingFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCodeInput.trim()) return;
    const res = onApplyCoupon(couponCodeInput.trim().toUpperCase());
    setCouponFeedback(res.message);
    if (res.success) {
      setCouponCodeInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
      <div
        className="w-full max-w-md bg-[#FBF9F6] h-full shadow-2xl flex flex-col justify-between border-l border-[#EAE3DC] animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#EAE3DC] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C29B38]" />
            <h2 className="font-editorial text-lg font-bold text-[#1E1A16]">
              Sua Sacola de Compras
            </h2>
            <span className="text-xs bg-[#FAF7F2] border border-[#EAE3DC] text-[#7A7065] px-2 py-0.5 rounded-full font-mono tabular-nums">
              {items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#7A7065] hover:text-[#1E1A16] hover:bg-[#F5EFEB] transition-colors cursor-pointer"
            aria-label="Fechar sacola"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#FAF7F2] p-3.5 border-b border-[#EAE3DC] text-xs">
          {remainingForFreeShipping > 0 ? (
            <div>
              <div className="flex items-center justify-between text-[#5E554C] mb-1.5">
                <span>Faltam <strong className="text-[#1E1A16] font-mono tabular-nums">R$ {remainingForFreeShipping.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> para Frete Grátis</span>
                <Truck className="w-4 h-4 text-[#C29B38]" />
              </div>
              <div className="w-full h-1.5 bg-[#EAE3DC] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C29B38] transition-all duration-300"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-emerald-800 font-medium">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Parabéns! Você ganhou <strong>Frete Grátis</strong> para todo o Brasil.</span>
            </div>
          )}
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#7A7065]">
              <div className="w-16 h-16 rounded-full bg-[#F5EFEB] flex items-center justify-center mb-4 text-[#C29B38]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-editorial text-lg text-[#1E1A16] mb-1">Sua sacola está vazia</h3>
              <p className="text-xs text-[#8C827A] max-w-xs mb-6">
                Descubra nossas bolsas em crochê de alta costura e escolha a sua peça perfeita.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#1E1A16] text-[#FBF9F6] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#342D26] transition-colors"
              >
                Ver Coleções
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3.5 p-3.5 bg-white rounded-xl border border-[#EAE3DC] shadow-xs"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#F7F4F0] shrink-0 border border-[#EAE3DC]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-semibold text-[#1E1A16] line-clamp-1">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#8C827A] hover:text-rose-600 transition-colors p-1"
                        aria-label="Remover item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-[#7A7065] mt-0.5 space-y-0.5">
                      <div>Cor: {item.selectedColor}</div>
                      {item.selectedHardware && (
                        <div>Metais: {item.selectedHardware.split(' ')[0]}</div>
                      )}
                      {item.monogram && (
                        <div>Iniciais: <strong className="font-mono text-[#C29B38]">{item.monogram}</strong></div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-[#EAE3DC] rounded bg-[#FAF7F2]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-0.5 text-xs font-bold text-[#1E1A16] hover:bg-[#EAE3DC] transition-colors"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 text-xs font-mono tabular-nums text-[#1E1A16]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2 py-0.5 text-xs font-bold text-[#1E1A16] hover:bg-[#EAE3DC] transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold font-mono text-[#1E1A16] tabular-nums">
                        R$ {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Calculation / Checkout */}
        {items.length > 0 && (
          <div className="p-5 bg-white border-t border-[#EAE3DC] space-y-4">
            {/* Coupon input */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900">
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Cupom <strong>{appliedCoupon}</strong> (-{couponDiscount}%)</span>
                  </div>
                  <button
                    onClick={onRemoveCoupon}
                    className="text-xs text-rose-600 hover:underline cursor-pointer font-medium"
                  >
                    Remover
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Cupom (ex: QUELLE10)"
                    value={couponCodeInput}
                    onChange={(e) => setCouponCodeInput(e.target.value)}
                    className="flex-1 px-3 py-1.5 bg-[#FAF7F2] border border-[#D5C7B9] rounded-lg text-xs uppercase font-mono focus:outline-none focus:border-[#C29B38]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#F5EFEB] hover:bg-[#EAE3DC] text-[#1E1A16] text-xs font-medium rounded-lg transition-colors border border-[#D5C7B9] cursor-pointer"
                  >
                    Aplicar
                  </button>
                </form>
              )}
              {couponFeedback && !appliedCoupon && (
                <p className="text-[11px] text-amber-700 mt-1">{couponFeedback}</p>
              )}
            </div>

            {/* Totals Breakdown */}
            <div className="space-y-1.5 text-xs text-[#5E554C] pt-2 border-t border-[#F0EAE4]">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-mono tabular-nums">
                  R$ {rawSubtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>

              {couponDiscount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Desconto de Cupom:</span>
                  <span className="font-mono tabular-nums">
                    - R$ {discountAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Frete:</span>
                <span className="font-mono tabular-nums">
                  {shippingFee === 0 ? (
                    <strong className="text-emerald-700">Grátis</strong>
                  ) : (
                    `R$ ${shippingFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
                  )}
                </span>
              </div>

              <div className="flex justify-between text-sm font-bold text-[#1E1A16] pt-2 border-t border-[#EAE3DC]">
                <span>Total:</span>
                <div className="text-right">
                  <span className="font-mono text-base tabular-nums">
                    R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                  <p className="text-[10px] text-[#7A7065] font-normal">
                    ou até 10x de R$ {(total / 10).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full py-3.5 bg-[#1E1A16] text-[#FBF9F6] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#342D26] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Finalizar Compra</span>
              <ArrowRight className="w-4 h-4 text-[#C29B38]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
