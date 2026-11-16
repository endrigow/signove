import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, ShieldCheck, Medal, Globe, ChevronDown, Activity } from 'lucide-react';

export default function Hero({ t, onExplore, onOpenDemo }) {
  const [pulseBeat, setPulseBeat] = useState(72);

  // Subtle real-time heart rate variation (72-74 bpm) to simulate active telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseBeat(prev => (prev === 72 ? 73 : prev === 73 ? 74 : 72));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const getStatIcon = (index) => {
    switch (index) {
      case 0:
        return <Award className="w-5 h-5 stroke-[2]" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 stroke-[2]" />;
      case 2:
        return <Medal className="w-5 h-5 stroke-[2]" />;
      case 3:
      default:
        return <Globe className="w-5 h-5 stroke-[2]" />;
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden">
      {/* ========================================================================= */}
      {/* ASYMMETRIC BACKGROUND: Ken Burns Animated ICU Photo + IoMT Mesh Overlay   */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Hospital ICU & Bed Telemetry Photo with Ken Burns Smooth Pan/Zoom */}
        <div className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]">
          <img
            src="/images/hospital-icu-telemetry.jpg"
            alt="Central de Monitoração de Leitos UTI, Telemetria Médica e IoMT Signove"
            className="w-full h-full object-cover object-left lg:object-center animate-ken-burns transform-gpu will-change-transform filter brightness-[1.02] contrast-[1.08]"
          />
        </div>

        {/* Horizontal Vignette: Clear on Left (Hospital Monitor) -> Dark on Right (Text/Card) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-slate-950/45 to-slate-950/85 lg:from-slate-950/10 lg:via-slate-950/40 lg:to-slate-950/90" />
        
        {/* Vertical Top/Bottom Dark Vignette for contrast with Navbar and Footer */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80" />

        {/* ===================================================================== */}
        {/* ANIMATED IoMT TELEMETRY CONSTELLATION MESH (Over the Monitor and Bed) */}
        {/* ===================================================================== */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Telemetry packet glow */}
            <filter id="packetGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="streamGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Dotted Connection Pathways between Monitor, Patient, and Cloud */}
          <path
            id="pathMonitorToPatient"
            d="M 270 380 Q 340 350 420 400 T 560 370"
            fill="none"
            stroke="url(#streamGrad1)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-60"
          />
          <path
            id="pathPatientToCloud"
            d="M 420 400 Q 500 320 620 340 T 780 290"
            fill="none"
            stroke="url(#streamGrad2)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            className="opacity-50"
          />

          {/* Animated Flowing Telemetry Packets along the lines */}
          <circle r="3.5" fill="#22D3EE" filter="url(#packetGlow)">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 270 380 Q 340 350 420 400 T 560 370" />
          </circle>
          <circle r="3" fill="#34D399" filter="url(#packetGlow)">
            <animateMotion dur="5s" begin="1.5s" repeatCount="indefinite" path="M 420 400 Q 500 320 620 340 T 780 290" />
          </circle>

          {/* Hexagonal IoMT Data Nodes Floating in the Room */}
          <g transform="translate(420, 310)" className="animate-pulse-subtle">
            <polygon
              points="0,-16 14,-8 14,8 0,16 -14,8 -14,-8"
              fill="rgba(6,182,212,0.08)"
              stroke="rgba(34,211,238,0.5)"
              strokeWidth="1.2"
            />
            <circle r="2.5" fill="#22D3EE" />
          </g>

          <g transform="translate(490, 260)" className="animate-float-delayed">
            <polygon
              points="0,-12 10,-6 10,6 0,12 -10,6 -10,-6"
              fill="rgba(16,185,129,0.08)"
              stroke="rgba(52,211,153,0.4)"
              strokeWidth="1"
            />
            <circle r="2" fill="#34D399" />
          </g>

          {/* Pulsing Telemetry Micro-Beacons */}
          <circle cx="270" cy="380" r="4" fill="#06B6D4" className="animate-ping opacity-75" />
          <circle cx="270" cy="380" r="3" fill="#22D3EE" />

          <circle cx="420" cy="400" r="4" fill="#10B981" className="animate-ping opacity-75" style={{ animationDelay: '1s' }} />
          <circle cx="420" cy="400" r="3" fill="#34D399" />

          <circle cx="560" cy="370" r="3.5" fill="#38BDF8" className="animate-ping opacity-75" style={{ animationDelay: '2s' }} />
          <circle cx="560" cy="370" r="2.5" fill="#38BDF8" />
        </svg>

        {/* Ambient Backlight Glows on the right column */}
        <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-cyan-500/12 blur-[130px] rounded-full animate-float-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-8 w-[420px] h-[420px] bg-emerald-500/12 blur-[140px] rounded-full animate-float-delayed pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* MAIN HERO CONTENT: Clear Image at Left + Frosted Glass Card at Right     */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Lado Esquerdo: Área Limpa com Ênfase Total no Monitor e Badge Flutuante do Leito */}
          <div className="lg:col-span-5 hidden lg:flex flex-col justify-end h-full pt-20 pb-4">
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-950/75 backdrop-blur-md text-white border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(6,182,212,0.25)] max-w-fit animate-float-slow transition-transform hover:scale-105">
              <div className="relative flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping absolute opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative" />
              </div>
              <div className="text-left font-mono">
                <div className="text-[11px] font-bold text-cyan-300 tracking-tight">
                  {t.hero.bedBadgeTitle || "Leito 04 UTI • Monitor Multiparamétrico"}
                </div>
                <div className="text-[10px] text-slate-300 flex items-center gap-2 mt-0.5">
                  <span className="text-emerald-400 font-semibold">{pulseBeat} BPM</span>
                  <span>•</span>
                  <span>SpO2 92%</span>
                  <span>•</span>
                  <span>PA 120/80</span>
                  <span>•</span>
                  <span className="text-cyan-300 font-bold">Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Grande Cartão de Vidro Fosco (Glassmorphism Sofisticado) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-9 xl:p-10 rounded-3xl bg-slate-950/70 backdrop-blur-2xl border border-white/15 dark:border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_35px_rgba(6,182,212,0.15)] relative overflow-hidden transition-all duration-300 hover:border-cyan-500/35">
              
              {/* Sutil brilho de canto no cartão */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />

              {/* Tag / Badge Superior */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-[10px] sm:text-[11px] font-semibold text-cyan-300 uppercase tracking-wider mb-5 shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>{t.hero.tag || "TECNOLOGIA SIGHEALTH | TELEMETRIA MÉDICA & MONITORAMENTO DE LEITOS | TEMPO REAL"}</span>
              </div>

              {/* Título Principal */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-extrabold text-white tracking-tight leading-[1.14] mb-4">
                {t.hero.titleStart}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent font-extrabold">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              {/* Subtítulo / Descrição */}
              <p className="text-xs sm:text-sm lg:text-[15px] text-slate-200/90 leading-relaxed mb-7 font-normal">
                {t.hero.subtitle}
              </p>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-7">
                <button
                  onClick={onExplore}
                  className="px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 via-teal-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 shadow-lg shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group hover:scale-[1.02]"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#simulator"
                  className="px-5 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/20 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  <span>{t.hero.ctaSecondary}</span>
                </a>
              </div>

              {/* 4 Métricas Circulares (Ícones Circulares com Título e Subtítulo) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/10">
                {t.hero.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                    {/* Ícone Circular com Borda Cyan e Brilho Sutil */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-cyan-400/40 bg-cyan-500/10 flex items-center justify-center text-cyan-300 mb-2 group-hover:scale-110 group-hover:border-cyan-300 group-hover:bg-cyan-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                      {getStatIcon(idx)}
                    </div>
                    {/* Valor em destaque */}
                    <div className="text-sm sm:text-base font-extrabold text-white tracking-tight mb-0.5 group-hover:text-cyan-300 transition-colors">
                      {stat.value}
                    </div>
                    {/* Descrição abaixo */}
                    <div className="text-[10px] sm:text-[11px] font-medium text-slate-300 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Down Scroll Anchor Indicator */}
      <div className="text-center pt-4 z-10">
        <a
          href="#telemetry-strip"
          aria-label="Rolar para Telemetria de Leitos"
          className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors animate-bounce cursor-pointer"
        >
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest">Leitos Conectados</span>
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
