import React, { useState } from 'react';
import { X, Check, ShieldCheck, QrCode, CreditCard, Barcode, Copy, CheckCircle2, ArrowRight, MessageSquare, Printer, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  total,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [formData, setFormData] = useState({
    name: 'Carolina Mendes',
    email: 'carolina.mendes@email.com',
    phone: '(11) 98765-4321',
    cpf: '123.456.789-00',
    cep: '01414-000',
    street: 'Rua Oscar Freire',
    number: '1420',
    complement: 'Apto 82',
    neighborhood: 'Cerqueira César',
    city: 'São Paulo',
    state: 'SP'
  });

  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'boleto'>('pix');
  const [installments, setInstallments] = useState(1);
  const [pixCopied, setPixCopied] = useState(false);
  const [orderId, setOrderId] = useState('');

  const pixDiscount = paymentMethod === 'pix' ? total * 0.05 : 0;
  const finalPayableTotal = Math.max(0, total - pixDiscount);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handleFinishOrder = () => {
    const generatedId = `QC-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep('success');
    onClearCart();
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136quellecroche.atelie@pix.com.br520400005303986540' + finalPayableTotal.toFixed(2) + '5802BR5925ATELIE QUELLE CROCHE LTDA6009SAO PAULO62070503***6304E8A9');
    setPixCopied(true);
    setTimeout(() => setPixCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#EAE3DC] overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#FAF7F2] border-b border-[#EAE3DC] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C29B38]" />
            <div>
              <h2 className="font-editorial text-xl font-bold text-[#1E1A16]">
                {step === 'success' ? 'Pedido Confirmado' : 'Finalizar Pedido Seguro'}
              </h2>
              <p className="text-xs text-[#7A7065]">
                {step === 'info' && 'Passo 1 de 2: Dados do destinatário e entrega'}
                {step === 'payment' && 'Passo 2 de 2: Escolha sua forma de pagamento'}
                {step === 'success' && `Número do Pedido: #${orderId}`}
              </p>
            </div>
          </div>
          {step !== 'success' && (
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white text-[#1E1A16] flex items-center justify-center border border-[#EAE3DC] hover:bg-[#F5EFEB] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {/* STEP 1: Personal and Delivery Data */}
          {step === 'info' && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E1A16] pb-2 border-b border-[#F0EAE4]">
                Dados Pessoais
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#5E554C] mb-1">Nome Completo</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5C7B9] rounded-lg text-xs text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#5E554C] mb-1">E-mail para confirmação</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5C7B9] rounded-lg text-xs text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#5E554C] mb-1">WhatsApp / Celular</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5C7B9] rounded-lg text-xs text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#5E554C] mb-1">CPF (para emissão de NF-e)</label>
                  <input
                    type="text"
                    required
                    value={formData.cpf}
                    onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5C7B9] rounded-lg text-xs text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                  />
                </div>
              </div>

              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E1A16] pt-3 pb-2 border-b border-[#F0EAE4]">
                Endereço de Entrega
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#5E554C] mb-1">CEP</label>
                  <input
                    type="text"
                    required
                    value={formData.cep}
                    onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5C7B9] rounded-lg text-xs font-mono text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#5E554C] mb-1">Rua / Logradouro</label>
                  <input
                    type="text"
                    required
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5C7B9] rounded-lg text-xs text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#5E554C] mb-1">Número</label>
                  <input
                    type="text"
                    required
                    value={formData.number}
                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5C7B9] rounded-lg text-xs text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-[#5E554C] mb-1">Complemento</label>
                  <input
                    type="text"
                    value={formData.complement}
                    onChange={(e) => setFormData({ ...formData, complement: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5C7B9] rounded-lg text-xs text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#5E554C] mb-1">Bairro</label>
                  <input
                    type="text"
                    required
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5C7B9] rounded-lg text-xs text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#5E554C] mb-1">Cidade</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5C7B9] rounded-lg text-xs text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#5E554C] mb-1">UF</label>
                  <input
                    type="text"
                    required
                    maxLength={2}
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value.toUpperCase() })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5C7B9] rounded-lg text-xs font-mono uppercase text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1E1A16] text-[#FBF9F6] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#342D26] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Continuar para o Pagamento</span>
                  <ArrowRight className="w-4 h-4 text-[#C29B38]" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Payment Method */}
          {step === 'payment' && (
            <div className="space-y-6">
              {/* Payment Selector Tabs */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    paymentMethod === 'pix'
                      ? 'border-[#C29B38] bg-[#FDFBF7] ring-1 ring-[#C29B38]'
                      : 'border-[#EAE3DC] bg-white hover:bg-[#FAF7F2]'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#1E1A16] mb-0.5">
                    <QrCode className="w-4 h-4 text-emerald-600" />
                    <span>Pix</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                    5% de Desconto
                  </span>
                </button>

                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-[#C29B38] bg-[#FDFBF7] ring-1 ring-[#C29B38]'
                      : 'border-[#EAE3DC] bg-white hover:bg-[#FAF7F2]'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#1E1A16] mb-0.5">
                    <CreditCard className="w-4 h-4 text-[#C29B38]" />
                    <span>Cartão</span>
                  </div>
                  <span className="text-[10px] text-[#7A7065]">
                    Até 10x sem juros
                  </span>
                </button>

                <button
                  onClick={() => setPaymentMethod('boleto')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    paymentMethod === 'boleto'
                      ? 'border-[#C29B38] bg-[#FDFBF7] ring-1 ring-[#C29B38]'
                      : 'border-[#EAE3DC] bg-white hover:bg-[#FAF7F2]'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#1E1A16] mb-0.5">
                    <Barcode className="w-4 h-4 text-slate-700" />
                    <span>Boleto</span>
                  </div>
                  <span className="text-[10px] text-[#7A7065]">
                    Vencimento em 3 dias
                  </span>
                </button>
              </div>

              {/* Pix View */}
              {paymentMethod === 'pix' && (
                <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#EAE3DC] text-center space-y-4">
                  <div className="inline-block p-3 bg-white rounded-xl shadow-xs border border-[#EAE3DC]">
                    <div className="w-40 h-40 bg-white flex flex-col items-center justify-center border-2 border-dashed border-[#C29B38] p-2">
                      <QrCode className="w-28 h-28 text-[#1E1A16]" />
                      <span className="text-[9px] uppercase font-bold text-[#93784A] mt-1">QR Code Pix Instantâneo</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-[#5E554C]">
                      Pague com Pix e garanta <strong>5% de desconto automático</strong>.
                    </p>
                    <div className="text-xl font-bold font-mono text-emerald-800 tabular-nums mt-0.5">
                      R$ {finalPayableTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                    <p className="text-[11px] text-[#7A7065]">
                      Você economizou R$ {pixDiscount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} pagando no Pix!
                    </p>
                  </div>

                  <button
                    onClick={copyPixCode}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#D5C7B9] text-xs font-semibold rounded-lg hover:bg-[#F5EFEB] text-[#1E1A16] transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#C29B38]" />
                    <span>{pixCopied ? 'Código Copiado!' : 'Copiar Código Pix (Copia e Cola)'}</span>
                  </button>
                </div>
              )}

              {/* Card View */}
              {paymentMethod === 'card' && (
                <div className="space-y-3 bg-[#FAF7F2] p-5 rounded-xl border border-[#EAE3DC]">
                  <div>
                    <label className="block text-xs font-medium text-[#5E554C] mb-1">Número do Cartão</label>
                    <input
                      type="text"
                      placeholder="4532 •••• •••• 8912"
                      defaultValue="4532 8912 3456 7890"
                      className="w-full px-3 py-2 bg-white border border-[#D5C7B9] rounded-lg text-xs font-mono text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#5E554C] mb-1">Validade (MM/AA)</label>
                      <input
                        type="text"
                        placeholder="11/29"
                        defaultValue="08/29"
                        className="w-full px-3 py-2 bg-white border border-[#D5C7B9] rounded-lg text-xs font-mono text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#5E554C] mb-1">CVV</label>
                      <input
                        type="text"
                        maxLength={4}
                        placeholder="892"
                        defaultValue="892"
                        className="w-full px-3 py-2 bg-white border border-[#D5C7B9] rounded-lg text-xs font-mono text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#5E554C] mb-1">Parcelamento sem Juros</label>
                    <select
                      value={installments}
                      onChange={(e) => setInstallments(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-white border border-[#D5C7B9] rounded-lg text-xs font-mono text-[#1E1A16] focus:outline-none focus:border-[#C29B38]"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                        <option key={n} value={n}>
                          {n}x de R$ {(total / n).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros (Total: R$ {total.toFixed(2)})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Boleto View */}
              {paymentMethod === 'boleto' && (
                <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#EAE3DC] text-center space-y-2">
                  <Barcode className="w-12 h-12 mx-auto text-slate-700" />
                  <p className="text-xs text-[#5E554C]">
                    O boleto será gerado ao confirmar o pedido. Você pode pagar pelo aplicativo do seu banco ou lotéricas.
                  </p>
                  <p className="text-[11px] text-[#7A7065]">
                    Prazo de compensação: até 2 dias úteis.
                  </p>
                </div>
              )}

              {/* Order total & CTA */}
              <div className="pt-3 border-t border-[#EAE3DC] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#7A7065]">Total a pagar:</span>
                  <div className="text-2xl font-bold font-mono text-[#1E1A16] tabular-nums">
                    R$ {finalPayableTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setStep('info')}
                    className="px-4 py-3 bg-white text-[#5E554C] border border-[#D5C7B9] text-xs font-semibold rounded-lg hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={handleFinishOrder}
                    className="px-6 py-3 bg-[#1E1A16] text-[#FBF9F6] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#342D26] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <Check className="w-4 h-4 text-[#C29B38]" />
                    <span>Confirmar Pagamento</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Success Confirmation */}
          {step === 'success' && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#93784A] font-bold">
                  Ateliê Quelle Crochê
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1E1A16] mt-1">
                  Parabéns, {formData.name.split(' ')[0]}! Seu pedido foi confirmado.
                </h3>
                <p className="text-xs sm:text-sm text-[#5E554C] max-w-md mx-auto mt-2 leading-relaxed">
                  Enviamos o recibo para <strong className="text-[#1E1A16]">{formData.email}</strong>. Nossas artesãs já estão preparando a sua embalagem perfumada com todo o cuidado no ateliê.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#EAE3DC] text-left max-w-md mx-auto text-xs space-y-2.5">
                <div className="flex justify-between border-b border-[#EAE3DC] pb-2">
                  <span className="text-[#7A7065]">Código do Pedido:</span>
                  <span className="font-mono font-bold text-[#1E1A16]">#{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A7065]">Forma de Pagamento:</span>
                  <span className="font-semibold text-[#1E1A16] uppercase">{paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A7065]">Endereço de Entrega:</span>
                  <span className="text-right text-[#1E1A16]">
                    {formData.street}, {formData.number} - {formData.city}/{formData.state}
                  </span>
                </div>
                <div className="flex justify-between border-t border-[#EAE3DC] pt-2">
                  <span className="font-bold text-[#1E1A16]">Valor Total:</span>
                  <span className="font-mono font-bold text-base text-[#1E1A16] tabular-nums">
                    R$ {finalPayableTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá! Acabei de fazer o pedido #${orderId} no site Quelle Crochê e gostaria de acompanhar a confecção da minha peça!`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-[#1E1A16] text-[#FBF9F6] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#342D26] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Acompanhar no WhatsApp do Ateliê</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 bg-white text-[#1E1A16] border border-[#D5C7B9] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#FAF7F2] transition-colors"
                >
                  Continuar Navegando
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
