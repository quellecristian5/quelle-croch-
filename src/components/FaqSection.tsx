import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/products';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-20 bg-[#F5EFEB] border-b border-[#EAE3DC]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#93784A] font-medium mb-3">
            <HelpCircle className="w-4 h-4 text-[#C29B38]" />
            <span>Tire suas Dúvidas</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#1E1A16]">
            Perguntas Frequentes sobre Nossas Peças
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6156] mt-2">
            Transparência e cuidado total em cada etapa do processo artesanal.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-[#EAE3DC] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-[#1E1A16] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 text-[#93784A] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#C29B38] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5E554C] leading-relaxed border-t border-[#F0EAE4] bg-[#FAF7F2]/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
