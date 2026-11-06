import React, { useState } from 'react';
import { X, Sparkles, Check, Send, ShoppingBag, ShieldCheck, Clock, Scissors } from 'lucide-react';
import { CustomBagConfig, CartItem } from '../types';

interface CustomBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCustomToCart: (item: CartItem) => void;
}

const MODELS = [
  {
    id: 'custom-banheiro',
    name: 'Jogo de Banheiro Harmonia (3 Peças)',
    price: 260,
    image: '/src/assets/images/crochet_bathroom_set_1793930031023.jpg',
    description: 'Encaixe anatômico sob medida para seu vaso e lavabo com base antiderrapante.'
  },
  {
    id: 'custom-sousplat',
    name: 'Kit Sousplat Mesa Posta (6 Lugares)',
    price: 290,
    image: '/src/assets/images/crochet_table_sousplat_1793930031862.jpg',
    description: '6 Sousplats rendados (38cm) + 6 anéis porta-guardanapo na cor dos seus pratos.'
  },
  {
    id: 'custom-tapete',
    name: 'Tapete Oval Russo Majestade (1,50m)',
    price: 380,
    image: '/src/assets/images/crochet_rug_living_1793930033384.jpg',
    description: 'Medida especial e combinação de cores para a sala de estar ou quarto.'
  },
  {
    id: 'custom-riviera',
    name: 'Bolsa Riviera Estruturada',
    price: 580,
    image: '/src/assets/images/bag_riviera_nautical_1793929437979.jpg',
    description: 'Bolsa de alta costura em fio náutico nobre com plaquinha com suas iniciais.'
  }
];

const CORDS = [
  { name: 'Areia Nude Natural', hex: '#D7C4B7' },
  { name: 'Terracota Âmbar Quente', hex: '#B8532F' },
  { name: 'Preto Ônix Profundo', hex: '#1C1917' },
  { name: 'Verde Sálvia Italiano', hex: '#879482' },
  { name: 'Caramelo Mel Nobre', hex: '#A3683B' },
  { name: 'Off-White Puro Pérola', hex: '#F7F5F0' }
];

export const CustomBuilderModal: React.FC<CustomBuilderModalProps> = ({
  isOpen,
  onClose,
  onAddCustomToCart
}) => {
  if (!isOpen) return null;

  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [selectedCord, setSelectedCord] = useState(CORDS[0]);
  const [selectedHardware, setSelectedHardware] = useState<'Dourado Nobre (Verniz Italiano)' | 'Prata Níquel Alto Brilho'>('Dourado Nobre (Verniz Italiano)');
  const [strapType, setStrapType] = useState<'Alça Dupla em Crochê' | 'Corrente com Ombreira em Couro' | 'Alça Longa Transversal'>('Corrente com Ombreira em Couro');
  const [monogram, setMonogram] = useState('');
  const [lining, setLining] = useState<'Cetim Champagne' | 'Cetim Preto Acetinado' | 'Cetim Nude Rosé'>('Cetim Champagne');

  const totalPrice = selectedModel.price;

  const handleAddToCart = () => {
    const customItem: CartItem = {
      id: `custom-${Date.now()}`,
      productId: selectedModel.id,
      name: `${selectedModel.name} [Sob Medida]`,
      price: totalPrice,
      image: selectedModel.image,
      selectedColor: selectedCord.name,
      selectedHardware: selectedHardware,
      monogram: monogram ? monogram.toUpperCase().slice(0, 3) : undefined,
      quantity: 1,
      isDigital: false
    };

    onAddCustomToCart(customItem);
    onClose();
  };

  const handleWhatsAppConsult = () => {
    const text = encodeURIComponent(
      `Olá Quelle Crochê! Gostaria de encomendar uma peça personalizada sob medida no ateliê:\n` +
      `• Modelo: ${selectedModel.name}\n` +
      `• Cor do Fio: ${selectedCord.name}\n` +
      `• Ferragens: ${selectedHardware}\n` +
      `• Alça: ${strapType}\n` +
      `• Forro: ${lining}\n` +
      `• Iniciais na plaquinha: ${monogram || 'Sem gravação'}\n` +
      `• Valor estimado: R$ ${totalPrice.toFixed(2)}`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#EAE3DC] overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#FAF7F2] border-b border-[#EAE3DC] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#1E1A16] text-[#D4AF37] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-editorial text-xl font-bold text-[#1E1A16]">
                Ateliê Sob Medida: Encomenda Personalizada
              </h2>
              <p className="text-xs text-[#7A7065]">
                Configure sua bolsa exclusiva. Nossas artesãs tecerão cada ponto especialmente para você.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white text-[#1E1A16] flex items-center justify-center border border-[#EAE3DC] hover:bg-[#F5EFEB] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Customization Controls (Left 7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Step 1: Model */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1A16] mb-3">
                  1. Escolha a Silhueta / Modelo:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {MODELS.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedModel(m)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedModel.id === m.id
                          ? 'border-[#C29B38] bg-[#FDFBF7] ring-1 ring-[#C29B38]'
                          : 'border-[#EAE3DC] hover:border-[#D5C7B9] bg-white'
                      }`}
                    >
                      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-2 bg-[#F5EFEB]">
                        <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-xs font-semibold text-[#1E1A16]">{m.name}</div>
                      <div className="text-[11px] font-mono text-[#93784A] font-bold mt-0.5">
                        R$ {m.price.toFixed(2)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Cord Color */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1A16] mb-2">
                  2. Cor do Fio Náutico Premium: <span className="text-[#93784A] font-medium">{selectedCord.name}</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {CORDS.map((cord) => (
                    <button
                      key={cord.name}
                      onClick={() => setSelectedCord(cord)}
                      className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs transition-all ${
                        selectedCord.name === cord.name
                          ? 'border-[#C29B38] bg-[#FDFBF7] font-semibold text-[#1E1A16]'
                          : 'border-[#EAE3DC] bg-white text-[#5E554C] hover:border-[#C29B38]'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-black/15 shrink-0 shadow-xs"
                        style={{ backgroundColor: cord.hex }}
                      />
                      <span className="truncate">{cord.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Hardware Finish */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1A16] mb-2">
                  3. Banho dos Metais e Fecho:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedHardware('Dourado Nobre (Verniz Italiano)')}
                    className={`p-3 rounded-lg border text-left text-xs transition-all ${
                      selectedHardware === 'Dourado Nobre (Verniz Italiano)'
                        ? 'border-[#C29B38] bg-[#FDFBF7] text-[#1E1A16]'
                        : 'border-[#EAE3DC] bg-white text-[#5E554C]'
                    }`}
                  >
                    <div className="font-bold text-[#93784A]">Dourado Nobre</div>
                    <div className="text-[11px] text-[#7A7065] mt-0.5">Verniz cataforético 18k anti-descascamento</div>
                  </button>

                  <button
                    onClick={() => setSelectedHardware('Prata Níquel Alto Brilho')}
                    className={`p-3 rounded-lg border text-left text-xs transition-all ${
                      selectedHardware === 'Prata Níquel Alto Brilho'
                        ? 'border-[#C29B38] bg-[#FDFBF7] text-[#1E1A16]'
                        : 'border-[#EAE3DC] bg-white text-[#5E554C]'
                    }`}
                  >
                    <div className="font-bold text-slate-700">Prata Níquel Nobre</div>
                    <div className="text-[11px] text-[#7A7065] mt-0.5">Polimento espelhado italiano</div>
                  </button>
                </div>
              </div>

              {/* Step 4: Strap Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1A16] mb-2">
                  4. Tipo de Alça:
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {(['Corrente com Ombreira em Couro', 'Alça Dupla em Crochê', 'Alça Longa Transversal'] as const).map((strap) => (
                    <button
                      key={strap}
                      onClick={() => setStrapType(strap)}
                      className={`p-2.5 rounded-lg border text-center transition-all ${
                        strapType === strap
                          ? 'border-[#C29B38] bg-[#FDFBF7] font-semibold text-[#1E1A16]'
                          : 'border-[#EAE3DC] bg-white text-[#5E554C]'
                      }`}
                    >
                      {strap}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 5: Monogram */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1E1A16]">
                    5. Iniciais na Plaquinha Metálica (Laser):
                  </label>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                    Grátis
                  </span>
                </div>
                <input
                  type="text"
                  maxLength={3}
                  value={monogram}
                  onChange={(e) => setMonogram(e.target.value.toUpperCase())}
                  placeholder="Ex: MV ou ACL (até 3 letras)"
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5C7B9] rounded-lg text-xs font-mono font-bold tracking-widest text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                />
              </div>
            </div>

            {/* Summary Preview Box (Right 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#F7F4F0] p-6 rounded-2xl border border-[#EAE3DC]">
              <div>
                <h3 className="font-editorial text-lg font-bold text-[#1E1A16] mb-3">
                  Resumo da sua Encomenda
                </h3>

                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-[#EAE3DC] bg-white shadow-xs">
                  <img
                    src={selectedModel.image}
                    alt={selectedModel.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2 text-xs text-[#5E554C] pb-4 border-b border-[#EAE3DC]">
                  <div className="flex justify-between">
                    <span className="text-[#8C827A]">Modelo:</span>
                    <span className="font-semibold text-[#1E1A16]">{selectedModel.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8C827A]">Cor selecionada:</span>
                    <span className="font-semibold text-[#1E1A16]">{selectedCord.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8C827A]">Metais:</span>
                    <span className="font-semibold text-[#1E1A16]">{selectedHardware.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8C827A]">Alça:</span>
                    <span className="font-semibold text-[#1E1A16]">{strapType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8C827A]">Gravação Laser:</span>
                    <span className="font-mono font-bold text-[#C29B38]">{monogram || 'Sem gravação'}</span>
                  </div>
                </div>

                <div className="py-4 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[#7A7065]">
                    <Clock className="w-4 h-4 text-[#C29B38]" />
                    <span>Prazo de confecção manual: <strong>7 a 10 dias úteis</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-[#7A7065]">
                    <Scissors className="w-4 h-4 text-[#C29B38]" />
                    <span>Feita ponto a ponto no ateliê por mestras artesãs</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#7A7065]">
                    <ShieldCheck className="w-4 h-4 text-[#C29B38]" />
                    <span>Garantia vitalícia na costura e estrutura</span>
                  </div>
                </div>

                <div className="pt-2 mb-6">
                  <div className="text-xs text-[#7A7065]">Investimento da Peça Única:</div>
                  <div className="text-2xl font-bold font-mono text-[#1E1A16] tabular-nums">
                    R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                  <div className="text-xs text-[#7A7065]">
                    em até 10x de R$ {(totalPrice / 10).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={handleAddToCart}
                  className="w-full py-3.5 bg-[#1E1A16] text-[#FBF9F6] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#342D26] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#C29B38]" />
                  <span>Adicionar Encomenda à Sacola</span>
                </button>

                <button
                  onClick={handleWhatsAppConsult}
                  className="w-full py-3 bg-white text-[#1E1A16] border border-[#D5C7B9] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#FAF7F2] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Consultar Detalhes no WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
