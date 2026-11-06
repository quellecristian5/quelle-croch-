import React, { useState } from 'react';
import { Product } from '../types';
import { X, Check, Star, ShieldCheck, Truck, Sparkles, ShoppingBag, Heart, Ruler, Info } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (
    product: Product,
    selectedColor: string,
    selectedHardware?: string,
    monogram?: string,
    quantity?: number
  ) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedHardware, setSelectedHardware] = useState('Dourado Nobre (Verniz Italiano)');
  const [monogram, setMonogram] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState('');
  const [shippingResult, setShippingResult] = useState<{ pac: string; sedex: string } | null>(null);
  const [isCalculatingShipping, setIsCalculatingShipping] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleCalculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    if (cep.length < 8) return;
    setIsCalculatingShipping(true);
    setTimeout(() => {
      setIsCalculatingShipping(false);
      setShippingResult({
        pac: product.price >= 450 ? 'Grátis (4 a 6 dias úteis)' : 'R$ 24,90 (4 a 6 dias úteis)',
        sedex: 'R$ 38,90 (1 a 2 dias úteis via Sedex Express)'
      });
    }, 450);
  };

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedHardware, monogram.toUpperCase().slice(0, 3), quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#EAE3DC] overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#1E1A16] flex items-center justify-center shadow-md border border-[#EAE3DC] transition-all cursor-pointer"
          aria-label="Fechar detalhes do produto"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto flex-1 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery / Image column */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F7F4F0] border border-[#EAE3DC]">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-[#1E1A16] text-[#F5EFEB] text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded">
                    {product.badge}
                  </div>
                )}
              </div>

              {product.secondaryImage && (
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden border-2 border-[#C29B38] bg-[#F7F4F0]">
                    <img
                      src={product.image}
                      alt="Miniatura 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#EAE3DC] bg-[#F7F4F0] opacity-90 hover:opacity-100 transition-opacity">
                    <img
                      src={product.secondaryImage}
                      alt="Miniatura 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#EAE3DC] bg-[#F7F4F0] flex items-center justify-center p-2 text-center text-[10px] text-[#7A7065]">
                    Acabamento com verniz cataforético
                  </div>
                </div>
              )}

              {/* Technical Specifications Box */}
              {product.dimensions && (
                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EAE3DC] text-xs">
                  <div className="flex items-center gap-1.5 text-[#93784A] font-semibold uppercase tracking-wider mb-2.5">
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Especificações de Engenharia Têxtil</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[#4A423A]">
                    <div>
                      <span className="text-[#8C827A]">Altura:</span> {product.dimensions.height}
                    </div>
                    <div>
                      <span className="text-[#8C827A]">Largura:</span> {product.dimensions.width}
                    </div>
                    <div>
                      <span className="text-[#8C827A]">Profundidade:</span> {product.dimensions.depth}
                    </div>
                    <div>
                      <span className="text-[#8C827A]">Peso estimado:</span> {product.dimensions.weight}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Purchase & Options column */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between text-xs text-[#82776C] mb-1">
                <span className="uppercase tracking-wider text-[11px] font-semibold text-[#93784A]">
                  {product.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                  <span className="font-semibold text-[#1E1A16] font-mono tabular-nums">{product.rating.toFixed(1)}</span>
                  <span className="text-[#8C827A]">({product.reviewsCount} avaliações)</span>
                </div>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#1E1A16] mb-2">
                {product.name}
              </h2>

              <p className="text-xs sm:text-sm text-[#5E554C] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Price Display */}
              <div className="p-4 bg-[#F7F4F0] rounded-xl border border-[#EAE3DC] mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold font-mono text-[#1E1A16] tabular-nums">
                    R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#8C827A] line-through font-mono tabular-nums">
                      R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  )}
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    5% OFF no Pix: R$ {(product.price * 0.95).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <p className="text-xs text-[#7A7065] mt-1">
                  ou <strong className="text-[#1E1A16]">{product.installments}x de R$ {product.installmentValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> sem juros no cartão de crédito
                </p>
              </div>

              {/* Physical Product Selectors */}
              {!product.isDigital && (
                <>
                  {/* Color Selector */}
                  <div className="mb-5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1A16] mb-2">
                      Cor do Fio Náutico: <span className="font-normal text-[#93784A]">{selectedColor}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color.name)}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                            selectedColor === color.name
                              ? 'border-[#C29B38] bg-[#FBF7EE] text-[#1E1A16] shadow-xs'
                              : 'border-[#EAE3DC] bg-white text-[#5E554C] hover:border-[#C29B38]'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span>{color.name}</span>
                          {selectedColor === color.name && <Check className="w-3.5 h-3.5 text-[#C29B38]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Hardware Selection */}
                  <div className="mb-5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E1A16] mb-2">
                      Banho dos Metais e Fecho:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedHardware('Dourado Nobre (Verniz Italiano)')}
                        className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                          selectedHardware === 'Dourado Nobre (Verniz Italiano)'
                            ? 'border-[#C29B38] bg-[#FBF7EE] text-[#1E1A16]'
                            : 'border-[#EAE3DC] bg-white text-[#5E554C]'
                        }`}
                      >
                        <div className="font-semibold text-[#93784A] flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          Dourado Nobre
                        </div>
                        <div className="text-[11px] text-[#7A7065] mt-0.5">Verniz cataforético 18k</div>
                      </button>

                      <button
                        onClick={() => setSelectedHardware('Prata Níquel Alto Brilho')}
                        className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                          selectedHardware === 'Prata Níquel Alto Brilho'
                            ? 'border-[#C29B38] bg-[#FBF7EE] text-[#1E1A16]'
                            : 'border-[#EAE3DC] bg-white text-[#5E554C]'
                        }`}
                      >
                        <div className="font-semibold text-[#4A423A] flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                          Prateado Níquel
                        </div>
                        <div className="text-[11px] text-[#7A7065] mt-0.5">Polimento espelhado</div>
                      </button>
                    </div>
                  </div>

                  {/* Monogram Laser Engraving */}
                  <div className="mb-6 p-3.5 bg-[#FAF7F2] rounded-xl border border-[#EAE3DC]">
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#1E1A16]">
                        Personalização com Iniciais (Opcional):
                      </label>
                      <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                        Cortesia Ateliê
                      </span>
                    </div>
                    <p className="text-[11px] text-[#7A7065] mb-2">
                      Grave até 3 letras ou iniciais na plaquinha metálica dourada costurada à bolsa.
                    </p>
                    <input
                      type="text"
                      maxLength={3}
                      placeholder="Ex: MV ou CL"
                      value={monogram}
                      onChange={(e) => setMonogram(e.target.value.toUpperCase())}
                      className="w-full px-3 py-2 bg-white border border-[#D5C7B9] rounded-lg text-xs font-mono font-bold tracking-widest text-[#1E1A16] uppercase focus:outline-none focus:border-[#C29B38]"
                    />
                  </div>
                </>
              )}

              {/* Quantity and Add Button */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center border border-[#D5C7B9] rounded-lg bg-white overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-xs font-bold text-[#1E1A16] hover:bg-[#F5EFEB] transition-colors"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-mono font-bold text-[#1E1A16] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-xs font-bold text-[#1E1A16] hover:bg-[#F5EFEB] transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  disabled={addedAnimation}
                  className="flex-1 py-3 px-6 bg-[#1E1A16] text-[#FBF9F6] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#342D26] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <ShoppingBag className="w-4 h-4 text-[#C29B38]" />
                  <span>{addedAnimation ? 'Adicionado com Sucesso!' : 'Adicionar à Sacola'}</span>
                </button>
              </div>

              {/* Shipping Simulator */}
              <div className="pt-4 border-t border-[#EAE3DC]">
                <form onSubmit={handleCalculateShipping} className="flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#7A7065] font-medium">
                    <Truck className="w-3.5 h-3.5 text-[#C29B38]" />
                    <span>Calcular prazo e frete para sua região:</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      maxLength={9}
                      placeholder="00000-000"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      className="w-36 px-3 py-1.5 bg-[#FAF7F2] border border-[#D5C7B9] rounded-lg text-xs font-mono focus:outline-none focus:border-[#C29B38]"
                    />
                    <button
                      type="submit"
                      disabled={isCalculatingShipping}
                      className="px-3 py-1.5 bg-[#F5EFEB] hover:bg-[#EAE3DC] text-[#1E1A16] text-xs font-medium rounded-lg transition-colors border border-[#D5C7B9]"
                    >
                      {isCalculatingShipping ? 'Calculando...' : 'Calcular'}
                    </button>
                  </div>
                </form>

                {shippingResult && (
                  <div className="mt-2.5 p-2.5 bg-emerald-50/70 border border-emerald-200/80 rounded-lg text-xs text-emerald-950 flex flex-col gap-1">
                    <div className="flex justify-between">
                      <span className="font-medium">PAC Correios:</span>
                      <span className="font-bold">{shippingResult.pac}</span>
                    </div>
                    <div className="flex justify-between text-slate-700">
                      <span>SEDEX Expresso:</span>
                      <span>{shippingResult.sedex}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
