import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingBag, Eye, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product, colorName?: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart
}) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const selectedColor = product.colors[selectedColorIndex] || product.colors[0];

  return (
    <div
      className="group flex flex-col bg-white rounded-xl border border-[#EAE3DC] overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Slot: 65-75% visual prominence */}
      <div className="relative aspect-[4/3] bg-[#F7F4F0] overflow-hidden cursor-pointer" onClick={() => onSelect(product)}>
        <img
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Minimal Unboxed Status Badge */}
        {product.badge && (
          <div className={`absolute top-3 left-3 text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded shadow-xs ${
            product.isPromo || product.badge.includes('OFF') || product.badge.includes('Oferta')
              ? 'bg-[#B8532F] text-white font-bold'
              : 'bg-[#1E1A16]/90 backdrop-blur-xs text-[#F5EFEB]'
          }`}>
            {product.badge}
          </div>
        )}

        {/* Quick View Floating Action */}
        <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="flex items-center gap-2 bg-white/95 text-[#1E1A16] px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider shadow-md hover:bg-white transition-all transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#C29B38]" />
            <span>Ver Detalhes</span>
          </button>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Metadata line: Category & Status */}
          <div className="flex items-center justify-between text-xs text-[#82776C] mb-1.5">
            <span className="uppercase tracking-wider text-[11px] font-medium text-[#93784A]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[11px] text-[#524B43]">
              <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
              <span className="font-semibold font-mono tabular-nums">{product.rating.toFixed(1)}</span>
              <span className="text-[#8C827A]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onSelect(product)}
            className="font-editorial text-lg font-semibold text-[#1E1A16] hover:text-[#93784A] transition-colors cursor-pointer line-clamp-1 mb-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#6B6156] line-clamp-2 leading-relaxed mb-4">
            {product.subtitle}
          </p>
        </div>

        <div>
          {/* Color Swatches (if physical bag) */}
          {!product.isDigital && product.colors.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] text-[#7A7065]">Cor:</span>
              <div className="flex items-center gap-1.5">
                {product.colors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedColorIndex(idx);
                    }}
                    title={color.name}
                    className={`w-4 h-4 rounded-full border transition-all ${
                      selectedColorIndex === idx
                        ? 'ring-2 ring-[#C29B38] ring-offset-1 scale-110'
                        : 'border-[#D5C7B9] opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Selecionar cor ${color.name}`}
                  />
                ))}
              </div>
              <span className="text-[11px] text-[#8C827A] truncate ml-1">
                {selectedColor.name}
              </span>
            </div>
          )}

          {/* Price & Installments */}
          <div className="pt-3 border-t border-[#F0EAE4] flex items-baseline justify-between mb-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold font-mono text-[#1E1A16] tabular-nums">
                  R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-[#9E948A] line-through font-mono tabular-nums">
                    R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-[#7A7065] mt-0.5">
                ou {product.installments}x de <span className="font-semibold text-[#1E1A16] font-mono tabular-nums">R$ {product.installmentValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span> sem juros
              </p>
            </div>

            <div className="text-[11px] text-right">
              {product.isReadyToShip ? (
                <span className="text-emerald-700 font-medium">Pronta Entrega</span>
              ) : (
                <span className="text-[#8C6D2E] font-medium">Sob Encomenda</span>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelect(product)}
              className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#1E1A16] bg-[#F7F4F0] hover:bg-[#EFE9E2] rounded-md transition-colors text-center cursor-pointer"
            >
              Ver Detalhes
            </button>
            <button
              onClick={() => onAddToCart(product, selectedColor?.name)}
              className="w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#FBF9F6] bg-[#1E1A16] hover:bg-[#342D26] active:scale-[0.98] rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>{product.isDigital ? 'Acessar' : 'Comprar'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
