import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, Heart, Bath, UtensilsCrossed, Grid, Tag } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onCustomClick: () => void;
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onCustomClick, onSelectCategory }) => {
  const handleCategoryShortcut = (categoryName: string) => {
    onSelectCategory(categoryName);
    const section = document.getElementById('colecao');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-[#FBF9F6] border-b border-[#EAE3DC] pt-8 pb-14 lg:pt-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#93784A] font-semibold mb-3">
              <span>Ateliê Quelle Crochê</span>
              <span aria-hidden="true">·</span>
              <span>Utilidades & Decoração Artesanal</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] text-[#1E1A16] font-normal tracking-tight mb-5 text-balance">
              A sofisticação do crochê na decoração e utilidades do seu lar.
            </h1>

            <p className="text-base text-[#5E554C] leading-relaxed mb-8 max-w-xl">
              Jogos de banheiro com base antiderrapante, sousplats rendados para mesa posta, tapetes de alta densidade e peças sob medida feitas à mão com barbantes ecológicos 100% algodão e fios nobres.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1E1A16] text-[#FBF9F6] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#342D26] active:scale-[0.98] transition-all cursor-pointer shadow-md group"
              >
                <span>Ver Todos os Produtos</span>
                <ArrowRight className="w-4 h-4 text-[#C29B38] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onCustomClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#1E1A16] border border-[#D5C7B9] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#F5EFEB] hover:border-[#1E1A16] active:scale-[0.98] transition-all cursor-pointer shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>Encomenda Sob Medida</span>
              </button>
            </div>

            {/* Quick Reassurance */}
            <div className="flex items-center gap-6 pt-5 border-t border-[#EAE3DC] text-xs text-[#70665C]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C29B38]" />
                <span>Base Antiderrapante</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C29B38]" />
                <span>100% Algodão Puro</span>
              </div>
              <div className="flex items-center gap-2 hidden sm:flex">
                <Heart className="w-4 h-4 text-[#C29B38]" />
                <span>Lavável na Máquina</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-[#EFECE6] border border-[#E3DAD0]">
              <img
                src="/src/assets/images/crochet_bathroom_set_1793930031023.jpg"
                alt="Jogo de Banheiro em crochê artesanal de luxo Quelle Crochê"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A16]/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Product Badge in Card Corner */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#EAE3DC] shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#93784A] font-semibold">Destaque de Decoração</p>
                  <p className="text-sm font-semibold text-[#1E1A16]">Jogo de Banheiro Harmonia (3 Peças)</p>
                  <p className="text-xs text-[#6B6156]">Ponto relevo massageador com encaixe anatômico e antiderrapante</p>
                </div>
                <div className="text-right shrink-0 pl-3">
                  <p className="text-sm font-mono font-bold text-[#1E1A16] tabular-nums">R$ 260</p>
                  <p className="text-[10px] text-[#7A7065]">10x de R$ 26,00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Shortcuts Grid Inspired by Top Home Decor Stores */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#EAE3DC]">
          <button
            onClick={() => handleCategoryShortcut('Jogos de Banheiro')}
            className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-[#EAE3DC] hover:border-[#C29B38] hover:shadow-md transition-all text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#EAE3DC] flex items-center justify-center text-[#C29B38] group-hover:bg-[#1E1A16] group-hover:text-[#FBF9F6] transition-colors shrink-0">
              <Bath className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1A16] group-hover:text-[#93784A] transition-colors">
                Jogos de Banheiro
              </h4>
              <p className="text-[11px] text-[#7A7065]">3 e 4 peças com encaixe</p>
            </div>
          </button>

          <button
            onClick={() => handleCategoryShortcut('Mesa & Decoração')}
            className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-[#EAE3DC] hover:border-[#C29B38] hover:shadow-md transition-all text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#EAE3DC] flex items-center justify-center text-[#C29B38] group-hover:bg-[#1E1A16] group-hover:text-[#FBF9F6] transition-colors shrink-0">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1A16] group-hover:text-[#93784A] transition-colors">
                Mesa & Decoração
              </h4>
              <p className="text-[11px] text-[#7A7065]">Sousplats, trilhos e porta-copos</p>
            </div>
          </button>

          <button
            onClick={() => handleCategoryShortcut('Tapetes & Passadeiras')}
            className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-[#EAE3DC] hover:border-[#C29B38] hover:shadow-md transition-all text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#EAE3DC] flex items-center justify-center text-[#C29B38] group-hover:bg-[#1E1A16] group-hover:text-[#FBF9F6] transition-colors shrink-0">
              <Grid className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1A16] group-hover:text-[#93784A] transition-colors">
                Tapetes & Passadeiras
              </h4>
              <p className="text-[11px] text-[#7A7065]">Ovais, cozinha e sala</p>
            </div>
          </button>

          <button
            onClick={() => handleCategoryShortcut('Ofertas & Promoções')}
            className="flex items-center gap-3.5 p-3.5 bg-[#FDF9F6] rounded-xl border border-[#B8532F]/30 hover:border-[#B8532F] hover:shadow-md transition-all text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#FBEFEA] border border-[#B8532F]/20 flex items-center justify-center text-[#B8532F] group-hover:bg-[#B8532F] group-hover:text-white transition-colors shrink-0">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8532F] group-hover:text-[#933D20] transition-colors flex items-center gap-1">
                Ofertas & Promoções
              </h4>
              <p className="text-[11px] text-[#7A7065]">Pronta entrega até 25% OFF</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
