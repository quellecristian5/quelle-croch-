import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#1E1A16] text-[#F5EFEB] text-xs py-2 px-4 border-b border-[#342D26]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-4 text-center">
          <span className="flex items-center gap-1.5 text-[#D4AF37] font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            FRETE GRÁTIS
          </span>
          <span className="hidden sm:inline text-[#E8DFD8]">
            para todo o Brasil acima de R$ 450
          </span>
          <span className="text-[#8C827A]" aria-hidden="true">·</span>
          <span className="text-[#E8DFD8]">
            Até 10x sem juros no cartão
          </span>
          <span className="text-[#8C827A] hidden md:inline" aria-hidden="true">·</span>
          <span className="text-[#D4AF37] hidden md:inline font-medium">
            5% OFF no Pix
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-[#8C827A] hover:text-[#F5EFEB] transition-colors p-1"
          aria-label="Fechar aviso"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
