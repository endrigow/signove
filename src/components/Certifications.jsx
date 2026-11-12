import React from 'react';
import { Award, Check } from 'lucide-react';

export default function Certifications({ t }) {
  const certLogos = [
    '/images/logo-iso.png',
    '/images/logo-iso.png',
    '/images/logo-iso.png',
    '/images/logo-uspto.png',
    '/images/logo-continua.png',
    '/images/logo-bluetooth.png'
  ];

  const partnerLogos = [
    { name: 'Nokia', src: '/images/logo-nokia.png' },
    { name: 'A&D Medical', src: '/images/logo-ad-medical.png' },
    { name: 'SBIS', src: '/images/logo-sbis.png' },
    { name: 'INDT', src: '/images/logo-indt.png' },
    { name: 'Open Connectivity Foundation', src: '/images/logo-ocf.png' },
    { name: 'Continua Health Alliance', src: '/images/logo-continua.png' }
  ];

  return (
    <section id="certifications" className="py-20 lg:py-28 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-400/10 text-brand-600 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>{t.standards.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.standards.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.standards.subtitle}
          </p>
        </div>

        {/* 6 High-Trust Certification Badges with Official Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.standards.items.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200/90 dark:border-slate-800 hover:border-brand-500/40 transition-all duration-300 hover:shadow-xl group relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-brand-50 dark:bg-slate-800 text-brand-700 dark:text-brand-300 border border-brand-500/30">
                    {item.code}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Official Seal/Logo Display Container */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Selo Oficial
                </span>
                <div className="h-9 px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center">
                  <img
                    src={certLogos[idx]}
                    alt={item.code}
                    className="h-6 w-auto max-w-[90px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Technology Partners Showcase */}
        <div className="glass-panel-elevated p-8 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-slate-800 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
            Parceiros de P&D, Indústria e Padronização Internacional
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {partnerLogos.map((partner, pIdx) => (
              <div
                key={pIdx}
                className="w-full h-16 px-4 py-2 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-sm"
                title={partner.name}
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-h-8 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
