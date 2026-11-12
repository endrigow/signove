import React from 'react';
import { ArrowRight, Activity, Radio, Sparkles, ChevronDown, MonitorCheck, ShieldCheck } from 'lucide-react';

export default function Hero({ t, onExplore, onOpenDemo }) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
      {/* ========================================================================= */}
      {/* ASYMMETRIC BACKGROUND: Clear at Left (ICU Monitor) -> Dark at Right (Text) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* User-Provided Hospital ICU & Bed Telemetry Photo with Ken Burns Smooth Pan/Zoom */}
        <div className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]">
          <img
            src="/images/hospital-icu-telemetry.jpg"
            alt="Central de Monitoração de Leitos UTI, Telemetria Médica e IoMT Signove"
            className="w-full h-full object-cover object-left lg:object-center animate-ken-burns transform-gpu will-change-transform filter brightness-105 contrast-[1.08]"
          />
        </div>

        {/* Horizontal Gradient: Cristalino/Claro à Esquerda e Escuro/Profundo à Direita */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/50 to-slate-950/95 lg:via-slate-950/60 lg:to-slate-950/95" />
        
        {/* Vertical Vignette para Topo e Rodapé */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />

        {/* Ambient Glows específicos na coluna da direita */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/15 blur-[120px] rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-emerald-500/15 blur-[130px] rounded-full animate-float-delayed" />

        {/* Micro-pulsos de telemetria sutis na área de transição */}
        <div className="absolute top-1/3 left-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400/80 animate-ping shadow-[0_0_12px_#22d3ee]" />
        <div className="absolute top-2/3 left-[45%] w-2 h-2 rounded-full bg-emerald-400/70 animate-ping delay-700 shadow-[0_0_10px_#34d399]" />
      </div>

      {/* Main Hero Content: Two-Column Layout (Clear image at left, texts at right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Lado Esquerdo: Área Limpa com Ênfase Total na Imagem e Tag Flutuante do Leito */}
          <div className="lg:col-span-5 hidden lg:flex flex-col justify-end h-full pt-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-slate-950/60 backdrop-blur-md text-white border border-white/20 shadow-2xl max-w-fit animate-float-slow">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div className="text-left font-mono">
                <div className="text-[11px] font-bold text-cyan-300">Leito 04 UTI • Monitor Multiparamétrico</div>
                <div className="text-[10px] text-slate-300">ECG • SatO2 92% • PA 120/80 • Online</div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Textos do Hero com Fundo Mais Escuro e Contraste Máximo */}
          <div className="lg:col-span-7 text-left lg:pl-6 xl:pl-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-xl text-xs sm:text-sm font-semibold text-cyan-300 mb-6 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.2)] animate-float-slow">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <MonitorCheck className="w-4 h-4 text-cyan-400" />
              <span>Telemetria Médica & Monitoração de Leitos</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300 font-normal">Tempo Real</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md">
              {t.hero.titleStart}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent underline decoration-cyan-400/40 decoration-wavy decoration-2">
                {t.hero.titleHighlight}
              </span>
              {t.hero.titleEnd}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              Engenharia de software biomédico para vigilância contínua de leitos hospitalares, centrais de telemetria multiparamétrica e monitoramento remoto de pacientes (RPM) com certificação ISO 13485 e patente registrada no USPTO.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4 mb-10">
              <button
                onClick={onExplore}
                className="btn-bio-primary group text-xs sm:text-sm !py-3 !px-6 cursor-pointer shadow-lg shadow-cyan-500/25"
              >
                <Activity className="w-4 h-4 text-emerald-300 group-hover:scale-110 transition-transform" />
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#telemetry-strip"
                className="px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-slate-900/70 hover:bg-slate-800/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Ver Monitoração de Leitos ao Vivo</span>
              </a>
            </div>

            {/* 4 Floating Trust Metrics Cards (Dispostos em 2x2 ou linha compacta) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {t.hero.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/70 backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group text-left relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all" />
                  <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-0.5 group-hover:text-cyan-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-slate-300 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Anchor Indicator */}
      <div className="text-center pt-6 z-10">
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
