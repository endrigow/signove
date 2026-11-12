import React from 'react';
import { Cpu, ShieldCheck, Network, Activity, ArrowRight, Smartphone, Cloud, Hospital, Database } from 'lucide-react';

export default function SigHealthPlatform({ t, onOpenDemo }) {
  const iconMap = {
    Cpu: Cpu,
    ShieldCheck: ShieldCheck,
    Network: Network,
    Activity: Activity
  };

  const steps = [
    {
      title: "1. Dispositivos Pessoais",
      sub: "Oxímetros, ECG, Glicosímetros, NIBP",
      icon: Smartphone,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "2. Gateway SigHealth",
      sub: "Bluetooth Low Energy & Continua PAN",
      icon: Cpu,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "3. Nuvem Segura SigHealth",
      sub: "Criptografia TLS 1.3 & Triagem Clínica",
      icon: Cloud,
      color: "from-indigo-500 to-lifemed-teal"
    },
    {
      title: "4. Equipes Médicas & PEP",
      sub: "Painel Clínico, Prontuário & Alertas",
      icon: Hospital,
      color: "from-lifemed-teal to-emerald-500"
    }
  ];

  return (
    <section id="platform" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-400/10 text-brand-600 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/20">
            <span>{t.sigHealth.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.sigHealth.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.sigHealth.subtitle}
          </p>
        </div>

        {/* Visual Architecture Pipeline */}
        <div className="mb-14">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xl">
            <div className="text-xs font-bold text-center uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
              Fluxo de Interoperabilidade Médica de Ponta a Ponta
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={idx} className="relative flex flex-col items-center text-center p-5 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 group hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {step.sub}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Official Architecture Diagram Display Card */}
        <div className="mb-20 glass-panel-elevated p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                Padrão Global Continua / IEEE 11073
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Diagrama de Arquitetura da Plataforma SigHealth
              </h3>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
              Camada de Nuvem & Gateway PAN/WAN
            </span>
          </div>

          <div className="bg-white/95 dark:bg-slate-900/95 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-center justify-center overflow-hidden">
            <img
              src="/images/sighealth-architecture.png"
              alt="Arquitetura do Sistema SigHealth"
              className="max-h-[380px] w-auto object-contain rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {t.sigHealth.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Activity;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/40 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-500/20 to-lifemed-teal/20 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-brand-500/20">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="glass-panel-elevated p-8 sm:p-10 rounded-3xl border border-brand-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Deseja integrar dispositivos à plataforma SigHealth?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              Nossa equipe de Campina Grande fornece SDKs certificados para fabricantes de hardware e apoio de engenharia regulatória.
            </p>
          </div>
          <button
            onClick={onOpenDemo}
            className="btn-bio-primary whitespace-nowrap cursor-pointer flex-shrink-0"
          >
            <span>Falar com Engenharia</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
