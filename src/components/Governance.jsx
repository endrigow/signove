import React, { useState } from 'react';
import { ShieldCheck, UserCheck, Megaphone, ArrowUpRight, Lock, CheckCircle2, X } from 'lucide-react';

export default function Governance({ t }) {
  const [activeModal, setActiveModal] = useState(null); // 'dsar' | 'dpo' | 'whistle'
  const [submitted, setSubmitted] = useState(false);

  const icons = {
    dsar: ShieldCheck,
    dpo: UserCheck,
    whistle: Megaphone
  };

  const handleOpen = (type) => {
    setActiveModal(type);
    setSubmitted(false);
  };

  const handleClose = () => {
    setActiveModal(null);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2500);
  };

  return (
    <section id="governance" className="py-20 lg:py-28 relative bg-slate-50/60 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-400/10 text-brand-600 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/20">
            <Lock className="w-3.5 h-3.5" />
            <span>{t.governance.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.governance.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.governance.subtitle}
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.governance.cards.map((card) => {
            const Icon = icons[card.id] || ShieldCheck;
            return (
              <div
                key={card.id}
                className="glass-panel-elevated p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-lifemed-teal text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-8">
                    {card.desc}
                  </p>
                </div>

                <button
                  onClick={() => handleOpen(card.id)}
                  className="w-full py-3 px-5 rounded-2xl glass-panel text-slate-800 dark:text-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-brand-600 hover:to-lifemed-teal text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-slate-200 dark:border-slate-700/80"
                >
                  <span>{card.buttonText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal for DSAR / DPO / Whistleblowing */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel-elevated max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-2xl relative">
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Protocolo Registrado com Sucesso
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Sua manifestação foi encaminhada com criptografia aos responsáveis regulatórios da Signove Tecnologia S.A.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {activeModal === 'dsar' && 'Requisição de Acesso aos Dados (DSAR)'}
                      {activeModal === 'dpo' && 'Contato com Encarregado de Dados (DPO)'}
                      {activeModal === 'whistle' && 'Canal de Denúncias e Integridade'}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Conformidade com a Lei Geral de Proteção de Dados (LGPD)
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {activeModal !== 'whistle' && (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Nome do Titular
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {activeModal === 'whistle' ? 'E-mail para Acompanhamento (Opcional)' : 'E-mail de Contato'}
                    </label>
                    <input
                      type="email"
                      required={activeModal !== 'whistle'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      placeholder="exemplo@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Detalhamento da Solicitação
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      placeholder={
                        activeModal === 'dsar'
                          ? 'Descreva quais dados pessoais você deseja consultar, retificar ou excluir...'
                          : activeModal === 'dpo'
                          ? 'Dúvidas jurídicas sobre o tratamento de dados de saúde...'
                          : 'Relato confidencial de integridade...'
                      }
                    />
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    🔒 Os dados enviados são protegidos por sigilo profissional e tratados exclusivamente pelo comitê de privacidade da Signove Tecnologia S.A.
                  </p>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="btn-bio-primary !py-2.5 !px-5 text-xs font-semibold"
                    >
                      Confirmar e Enviar
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
