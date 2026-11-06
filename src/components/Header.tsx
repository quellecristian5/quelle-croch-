import React from 'react';
import { ShoppingBag, Sparkles, Tag, ChevronRight } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenCustomBuilder: () => void;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenCustomBuilder,
  activeCategory,
  onSelectCategory
}) => {
  const handleCategoryClick = (categoryName: string) => {
    onSelectCategory(categoryName);
    const section = document.getElementById('colecao');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F6]/95 backdrop-blur-md border-b border-[#EAE3DC] transition-all">
      {/* Main Top Bar Contract: 3-Zone Architecture */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="/"
          className="font-editorial text-2xl md:text-3xl tracking-tight text-[#1E1A16] font-semibold hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
        >
          QUELLE CROCHÊ
        </a>

        {/* Zone 2: 4-5 clean single-line nav links focused on requested utility & decor categories */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-[#544E47]">
          <button
            onClick={() => handleCategoryClick('Jogos de Banheiro')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeCategory === 'Jogos de Banheiro'
                ? 'text-[#1E1A16] underline underline-offset-8 decoration-[#C29B38] decoration-2'
                : 'hover:text-[#1E1A16] hover:underline underline-offset-8'
            }`}
          >
            Jogos de Banheiro
          </button>

          <button
            onClick={() => handleCategoryClick('Mesa & Decoração')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeCategory === 'Mesa & Decoração'
                ? 'text-[#1E1A16] underline underline-offset-8 decoration-[#C29B38] decoration-2'
                : 'hover:text-[#1E1A16] hover:underline underline-offset-8'
            }`}
          >
            Mesa & Decoração
          </button>

          <button
            onClick={() => handleCategoryClick('Tapetes & Passadeiras')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeCategory === 'Tapetes & Passadeiras'
                ? 'text-[#1E1A16] underline underline-offset-8 decoration-[#C29B38] decoration-2'
                : 'hover:text-[#1E1A16] hover:underline underline-offset-8'
            }`}
          >
            Tapetes & Passadeiras
          </button>

          <button
            onClick={() => handleCategoryClick('Ofertas & Promoções')}
            className={`transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 cursor-pointer font-bold ${
              activeCategory === 'Ofertas & Promoções'
                ? 'text-[#B8532F] underline underline-offset-8 decoration-[#B8532F] decoration-2'
                : 'text-[#B8532F] hover:text-[#933D20] hover:underline underline-offset-8'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            <span>Ofertas & Promoções</span>
          </button>

          <button
            onClick={onOpenCustomBuilder}
            className="hover:text-[#1E1A16] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
            <span>Sob Medida</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FBF9F6] bg-[#1E1A16] rounded-md hover:bg-[#342D26] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
            aria-label="Abrir sacola de compras"
          >
            <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
            <span className="hidden sm:inline">Sacola</span>
            <span className="bg-[#C29B38] text-[#1E1A16] font-bold text-[11px] px-1.5 py-0.5 rounded-full font-mono tabular-nums leading-none">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Sub-Header Navigation Bar: Category Departments Strip */}
      <div className="bg-[#F5EFEB] border-t border-[#EAE3DC] px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 text-xs">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#93784A] hidden sm:inline mr-1">
              Departamentos:
            </span>

            {[
              { label: 'Todos os Produtos', value: 'Todas as Peças' },
              { label: 'Jogos de Banheiro', value: 'Jogos de Banheiro' },
              { label: 'Mesa & Decoração', value: 'Mesa & Decoração' },
              { label: 'Tapetes & Passadeiras', value: 'Tapetes & Passadeiras' },
              { label: 'Bolsas & Acessórios', value: 'Bolsas & Acessórios' },
              { label: 'Ofertas & Promoções', value: 'Ofertas & Promoções', highlight: true },
              { label: 'Cursos & Receitas', value: 'Cursos & Receitas' }
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryClick(cat.value)}
                className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-[#1E1A16] text-[#FBF9F6] shadow-xs'
                    : cat.highlight
                    ? 'text-[#B8532F] font-bold hover:bg-[#EAE3DC]'
                    : 'text-[#5E554C] hover:text-[#1E1A16] hover:bg-[#EAE3DC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenCustomBuilder}
            className="hidden md:flex items-center gap-1.5 text-xs text-[#93784A] hover:text-[#1E1A16] transition-colors font-medium whitespace-nowrap shrink-0 pl-4 border-l border-[#D5C7B9]"
          >
            <span>Encomendar Medida Especial</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
