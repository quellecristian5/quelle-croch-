import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Ol%C3%A1%20Quelle%20Croch%C3%AA!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20as%20bolsas%20de%20croch%C3%AA."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#1E1A16] hover:bg-[#342D26] text-white p-3.5 rounded-full shadow-2xl border border-[#C29B38]/60 flex items-center gap-2 group transition-all duration-300 hover:scale-105"
      aria-label="Falar com consultora do Ateliê no WhatsApp"
    >
      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
      <MessageSquare className="w-5 h-5 text-[#D4AF37]" />
      <span className="hidden sm:inline text-xs font-semibold tracking-wide pr-1">
        Consultora no WhatsApp
      </span>
    </a>
  );
};
