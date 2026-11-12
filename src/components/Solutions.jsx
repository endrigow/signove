import React, { useState } from 'react';
import { Stethoscope, MonitorCheck, Network, CheckCircle2, ChevronRight, Activity, ArrowUpRight } from 'lucide-react';

export default function Solutions({ t, onOpenDemo }) {
  const [activeTab, setActiveTab] = useState(0);

  const iconList = [Stethoscope, MonitorCheck, Network];

  return (
    <section id="solutions" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-400/10 text-brand-600 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/20">
            <span>{t.solutions.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.solutions.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.solutions.subtitle}
          </p>
        </div>

        {/* Dynamic Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.solutions.items.map((item, idx) => {
            const Icon = iconList[idx] || Activity;
            return (
              <div
                key={item.id}
                className="glass-panel-elevated rounded-3xl p-8 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:border-brand-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group relative overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-lifemed-teal text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-4">
                    {item.highlight}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800/80 mb-8">
                    {item.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenDemo}
                  className="w-full py-3 px-5 rounded-2xl glass-panel text-slate-800 dark:text-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-brand-600 hover:to-lifemed-teal text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-brand-500/40 cursor-pointer"
                >
                  <span>Saiba Mais sobre a Solução</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
