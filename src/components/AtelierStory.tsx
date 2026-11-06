import React from 'react';
import { Sparkles, CheckCircle2, Feather, HeartHandshake } from 'lucide-react';

interface AtelierStoryProps {
  onCustomClick: () => void;
}

export const AtelierStory: React.FC<AtelierStoryProps> = ({ onCustomClick }) => {
  return (
    <section id="atelie" className="py-16 lg:py-24 bg-[#FBF9F6] border-b border-[#EAE3DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-[#EFECE6] border border-[#E3DAD0]">
              <img
                src="/src/assets/images/artisan_atelier_crochet_1793929438683.jpg"
                alt="Mãos de mestra artesã tecendo crochê de luxo no ateliê"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A16]/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-[#FBF9F6]">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1">
                  Feito com Alma no Brasil
                </p>
                <p className="font-editorial text-xl font-normal leading-snug">
                  "O crochê de luxo não é apenas uma técnica; é uma escultura vestível que atravessa gerações sem perder a forma."
                </p>
                <p className="text-xs text-[#D5C7B9] mt-1.5">— Quelle Cristian, Fundadora & Diretora Criativa</p>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#93784A] font-medium mb-3">
              <span>Manifesto & Tradição</span>
              <span aria-hidden="true">·</span>
              <span>Slow Fashion de Alto Padrão</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1A16] leading-tight mb-6 text-balance">
              Por que uma bolsa Quelle Crochê é diferente de qualquer outra?
            </h2>

            <p className="text-sm sm:text-base text-[#5E554C] leading-relaxed mb-6">
              Em um mundo tomado pela pressa da produção em massa e tecidos sintéticos descartáveis, nosso ateliê segue no ritmo da perfeição. Cada bolsa leva de <strong>18 a 36 horas ininterruptas de tecelagem manual</strong>, onde cada ponto é milimetricamente calibrado com a mesma tensão.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#EAE3DC] text-[#C29B38] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1E1A16]">Estrutura Rígida Térmica</h4>
                  <p className="text-xs text-[#6B6156] mt-0.5 leading-relaxed">
                    Você nunca verá uma bolsa nossa "mole" ou "caída". Desenvolvemos um reforço interno exclusivo que protege a trama contra peso e deformação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#EAE3DC] text-[#C29B38] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1E1A16]">Fio Náutico Naval Anti-Desbotamento</h4>
                  <p className="text-xs text-[#6B6156] mt-0.5 leading-relaxed">
                    Resistente ao sol, água e atrito. Não desfia e não cria bolinhas, mantendo o toque sedoso ano após ano.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#EAE3DC] text-[#C29B38] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1E1A16]">Metais de Alta Joalheria</h4>
                  <p className="text-xs text-[#6B6156] mt-0.5 leading-relaxed">
                    Todas as argolas, correntes e fechos recebem verniz cataforético dourado 18k que suporta clima litorâneo e não oxida.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onCustomClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E1A16] text-[#FBF9F6] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#342D26] transition-colors cursor-pointer shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>Conversar com a Artesã no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
