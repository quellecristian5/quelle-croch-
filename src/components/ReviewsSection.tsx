import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-[#FBF9F6] border-b border-[#EAE3DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#93784A] font-medium mb-3">
            <span>Experiência das Clientes</span>
            <span aria-hidden="true">·</span>
            <span>Avaliações Reais</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#1E1A16] leading-tight mb-4">
            O encanto de quem já segura uma bolsa Quelle Crochê nos braços.
          </h2>

          <div className="flex items-center justify-center gap-2 text-sm text-[#5E554C]">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
            <span className="font-bold text-[#1E1A16] font-mono tabular-nums">4.98 / 5.0</span>
            <span className="text-[#8C827A]">baseado em mais de 480 avaliações verificadas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-xl border border-[#EAE3DC] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#8C827A] font-mono">{review.date}</span>
                </div>

                <p className="text-xs text-[#4A423A] leading-relaxed mb-4 italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EAE4]">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1E1A16]">
                  <span>{review.author}</span>
                  {review.verified && (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                  )}
                </div>
                <div className="text-[11px] text-[#8C827A] flex items-center justify-between mt-0.5">
                  <span>{review.city}</span>
                  <span className="text-[#93784A] font-medium truncate ml-1">{review.productName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
