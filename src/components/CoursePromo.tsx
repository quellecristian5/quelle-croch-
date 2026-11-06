import React from 'react';
import { PlayCircle, Check, Award, FileText, Users, ShoppingBag, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface CoursePromoProps {
  courseProduct: Product;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const CoursePromo: React.FC<CoursePromoProps> = ({
  courseProduct,
  onAddToCart,
  onSelectProduct
}) => {
  return (
    <section id="cursos" className="py-16 lg:py-20 bg-[#F5EFEB] border-b border-[#EAE3DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#1E1A16] text-[#FBF9F6] rounded-2xl p-8 sm:p-12 lg:p-14 overflow-hidden relative shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C29B38]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Column: Course Pitch */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Formação Profissional em Crochê de Luxo</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-5 text-balance text-white">
                Masterclass: O Segredo da Bolsa Estruturada Perfeita
              </h2>

              <p className="text-sm sm:text-base text-[#D5C7B9] leading-relaxed mb-6">
                Descubra o passo a passo exato criado por Quelle Cristian para estruturar bolsas de crochê que ficam rígidas, não cedem com o peso e encantam clientes que pagam de R$ 400 a R$ 800 por peça.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-[#EAE3DC]">
                  <div className="w-5 h-5 rounded-full bg-[#342D26] text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>36 Videoaulas em alta resolução 4K</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#EAE3DC]">
                  <div className="w-5 h-5 rounded-full bg-[#342D26] text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Lista secreta de fornecedores com desconto</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#EAE3DC]">
                  <div className="w-5 h-5 rounded-full bg-[#342D26] text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>5 Receitas completas em PDF com diagramas</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#EAE3DC]">
                  <div className="w-5 h-5 rounded-full bg-[#342D26] text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Acesso vitalício + Suporte direto de dúvidas</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-baseline sm:items-center gap-6 pt-6 border-t border-[#342D26]">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold font-mono text-white tabular-nums">
                      R$ 197,00
                    </span>
                    <span className="text-sm text-[#8C827A] line-through font-mono tabular-nums">
                      R$ 397,00
                    </span>
                  </div>
                  <p className="text-xs text-[#A89F95]">ou 10x de R$ 19,70 sem juros</p>
                </div>

                <button
                  onClick={() => onAddToCart(courseProduct)}
                  className="py-3 px-6 bg-[#C29B38] text-[#1E1A16] font-semibold text-xs uppercase tracking-wider rounded-md hover:bg-[#D4AF37] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Garantir Acesso Imediato</span>
                </button>
              </div>
            </div>

            {/* Right Column: Course Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#26211C] p-6 rounded-xl border border-[#3E352B] shadow-lg flex flex-col gap-4">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black/40 group cursor-pointer" onClick={() => onSelectProduct(courseProduct)}>
                  <img
                    src="/src/assets/images/artisan_atelier_crochet_1793929438683.jpg"
                    alt="Prévia das videoaulas de crochê estruturado"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-[#C29B38] text-[#1E1A16] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-8 h-8 fill-current" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2 text-xs">
                  <div className="flex items-center justify-between text-[#D5C7B9]">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#D4AF37]" />
                      Material de Apoio
                    </span>
                    <span className="font-semibold text-white">5 E-books / PDFs</span>
                  </div>
                  <div className="flex items-center justify-between text-[#D5C7B9]">
                    <span className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#D4AF37]" />
                      Certificado
                    </span>
                    <span className="font-semibold text-white">Incluso e Reconhecido</span>
                  </div>
                  <div className="flex items-center justify-between text-[#D5C7B9]">
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#D4AF37]" />
                      Comunidade
                    </span>
                    <span className="font-semibold text-white">+1.240 Alunas Ativas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
