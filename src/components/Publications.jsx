import React from 'react';
import { BookOpen, MapPin, Building2, ArrowRight } from 'lucide-react';

export default function Publications({ t }) {
  const images = [
    '/images/hospital-joao-xxiii.jpg',
    '/images/lifeview-screen.jpg',
    '/images/hospital-sao-francisco-paula.jpg'
  ];

  return (
    <section id="cases" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-400/10 text-brand-600 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.publications.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.publications.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.publications.subtitle}
          </p>
        </div>

        {/* 3 Hospital & Clinical Case Studies with Real Authentic Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.publications.cards.map((card, idx) => (
            <div
              key={idx}
              className="glass-panel-elevated rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group"
            >
              <div>
                {/* Real Case Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={images[idx]}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Tag on Top of Image */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-brand-600 dark:text-brand-300 border border-brand-500/30 backdrop-blur-md shadow-sm">
                      {card.tag}
                    </span>
                  </div>

                  {/* Location Pin */}
                  <div className="absolute bottom-3 right-4 flex items-center gap-1 text-[11px] font-medium text-white/90 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{card.location}</span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    <Building2 className="w-4 h-4 text-brand-500" />
                    <span>{card.institution}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center justify-between">
                  <span>Validação em Ambiente Clínico Real</span>
                  <ArrowRight className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
