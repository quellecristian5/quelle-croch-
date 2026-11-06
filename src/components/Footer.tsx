import React, { useState } from 'react';
import { ShieldCheck, Lock, Mail, Instagram, ArrowRight, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#1E1A16] text-[#D5C7B9] pt-16 pb-12 border-t border-[#342D26]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#342D26]">
          {/* Brand Manifesto (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-editorial text-2xl font-semibold tracking-tight text-[#FBF9F6] block mb-3">
                QUELLE CROCHÊ
              </span>
              <p className="text-xs text-[#A89F95] leading-relaxed max-w-sm mb-6">
                Ateliê de alta costura em crochê estruturado. Peças autorais feitas à mão com fios nobres, metais italianos e acabamento de luxo eterno.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#EAE3DC]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#C29B38] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C29B38]" />
                <span>@quellecroche</span>
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FBF9F6] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A89F95]">
              <li>
                <a href="#colecao" className="hover:text-[#FBF9F6] transition-colors">Bolsas de Ombro</a>
              </li>
              <li>
                <a href="#colecao" className="hover:text-[#FBF9F6] transition-colors">Clutches & Noite</a>
              </li>
              <li>
                <a href="#colecao" className="hover:text-[#FBF9F6] transition-colors">Bolsas Estruturadas</a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#FBF9F6] transition-colors">Masterclass & Cursos</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#FBF9F6] transition-colors">Avaliações das Clientes</a>
              </li>
            </ul>
          </div>

          {/* Customer Care (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FBF9F6] mb-4">
              Atendimento
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A89F95]">
              <li>
                <a href="#atelie" className="hover:text-[#FBF9F6] transition-colors">Como Cuidar do Crochê</a>
              </li>
              <li>
                <a href="#atelie" className="hover:text-[#FBF9F6] transition-colors">Guia de Cores & Fios</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FBF9F6] transition-colors">Prazos e Rastreamento</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FBF9F6] transition-colors">Garantia de 1 Ano</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FBF9F6] transition-colors">Trocas e Devoluções</a>
              </li>
            </ul>
          </div>

          {/* VIP Newsletter (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FBF9F6] mb-2">
              Clube do Ateliê
            </h4>
            <p className="text-xs text-[#A89F95] mb-4 leading-relaxed">
              Receba convites antecipados para novos lançamentos de cores exclusivas e vagas limitadas da Masterclass.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-[#2A231C] border border-[#C29B38]/50 rounded-lg text-xs text-[#D4AF37]">
                Obrigada! Você receberá nossos lançamentos em primeira mão.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 bg-[#2A231C] border border-[#3E352B] rounded-lg text-xs text-[#FBF9F6] placeholder-[#7A7065] focus:outline-none focus:border-[#C29B38]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#C29B38] text-[#1E1A16] text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#D4AF37] transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="flex items-center gap-4 text-[11px] text-[#7A7065] mt-4">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#C29B38]" />
                Dados 100% Criptografados
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#C29B38]" />
                Compra Protegida
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7A7065]">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} Ateliê Quelle Crochê LTDA · CNPJ 42.891.312/0001-49</p>
            <p className="text-[11px] text-[#5E554C] mt-0.5">São Paulo - SP · Brasil · Todos os direitos reservados.</p>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span>Desenvolvido com</span>
            <Heart className="w-3 h-3 text-[#C29B38] fill-[#C29B38]" />
            <span>para amantes do feito à mão</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
