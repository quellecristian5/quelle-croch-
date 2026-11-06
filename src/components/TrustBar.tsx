import React from 'react';
import { Package, ShieldCheck, Sparkles, Clock } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#F5EFEB] py-8 border-b border-[#EAE3DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#E3DAD0] text-[#C29B38]">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1E1A16]">Embalagem Perfumada</h4>
              <p className="text-xs text-[#6B6156] mt-1 leading-relaxed">
                Caixa especial para presente com seda e o aroma exclusivo Quelle Crochê.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#E3DAD0] text-[#C29B38]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1E1A16]">Base Antiderrapante</h4>
              <p className="text-xs text-[#6B6156] mt-1 leading-relaxed">
                Camada emborrachada termofixada para segurança total em banheiros e cozinhas.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#E3DAD0] text-[#C29B38]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1E1A16]">100% Algodão Nobre</h4>
              <p className="text-xs text-[#6B6156] mt-1 leading-relaxed">
                Fios penteados de alta absorção que não soltam tinta e podem ir à máquina.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#E3DAD0] text-[#C29B38]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1E1A16]">Despacho Rápido em 24h</h4>
              <p className="text-xs text-[#6B6156] mt-1 leading-relaxed">
                Pronta entrega com código de rastreamento enviado diretamente no WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
