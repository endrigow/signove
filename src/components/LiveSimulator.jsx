import React, { useState, useEffect } from 'react';
import { Activity, Wifi, Heart, Shield, RefreshCw, Cpu, Check, AlertCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LiveSimulator({ t }) {
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);
  const [bpm, setBpm] = useState(72);
  const [spo2, setSpo2] = useState(98);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState('agora');
  const [syncCount, setSyncCount] = useState(1420);

  const currentProfile = t.liveSimulator.patientProfiles[activeProfileIndex];

  // Subtle real-time heart rhythm jitter
  useEffect(() => {
    const baseBpm = parseInt(currentProfile.bpm, 10) || 72;
    const interval = setInterval(() => {
      const variation = Math.floor(Math.random() * 5) - 2;
      setBpm(baseBpm + variation);
    }, 2800);
    return () => clearInterval(interval);
  }, [activeProfileIndex, currentProfile]);

  const handleSimulateSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncCount(prev => prev + 1);
      setLastSyncTime('há poucos instantes');
      
      // Gentle celebratory micro-burst of medical cyan particles
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#00D2D3', '#00A896', '#0284C7', '#10B981']
      });
    }, 1200);
  };

  return (
    <section id="simulator" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-400/10 text-brand-600 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/20">
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            <span>{t.liveSimulator.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.liveSimulator.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.liveSimulator.description}
          </p>
        </div>

        {/* Profile Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-10">
          {t.liveSimulator.patientProfiles.map((profile, idx) => (
            <button
              key={profile.id}
              onClick={() => {
                setActiveProfileIndex(idx);
                setBpm(parseInt(profile.bpm, 10));
              }}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                activeProfileIndex === idx
                  ? 'bg-gradient-to-r from-brand-600 to-lifemed-teal text-white shadow-md shadow-brand-500/25 scale-105'
                  : 'glass-panel text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/40'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeProfileIndex === idx ? 'bg-white animate-ping' : 'bg-brand-500'}`} />
              <span>{profile.name}</span>
            </button>
          ))}
        </div>

        {/* Telemetry Console Card */}
        <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle top indicator bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-500/10 dark:bg-brand-400/10 border border-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {currentProfile.hospital}
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>{currentProfile.device}</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                    <Wifi className="w-2.5 h-2.5 mr-1" /> BLE Conectado
                  </span>
                </div>
              </div>
            </div>

            {/* Cloud Sync Status Indicator */}
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  {t.liveSimulator.syncLabel}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  {isSyncing ? 'Sincronizando payload...' : t.liveSimulator.syncedNow}
                </div>
              </div>
              <button
                onClick={handleSimulateSync}
                disabled={isSyncing}
                className={`p-3 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
                  isSyncing
                    ? 'bg-brand-500 text-white animate-spin'
                    : 'bg-brand-50 hover:bg-brand-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-brand-600 dark:text-brand-300 border border-brand-500/30 hover:scale-105'
                }`}
                title={t.liveSimulator.buttonSimulate}
              >
                <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Dynamic ECG Live Waveform Visualizer */}
          <div className="relative bg-slate-950 rounded-2xl p-4 sm:p-6 mb-8 overflow-hidden border border-cyan-900/40 shadow-inner">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="flex items-center justify-between text-xs text-cyan-400/80 font-mono mb-2 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold">{t.liveSimulator.liveBeat}</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-400">Canal I - 25mm/s - 10mm/mV</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                <span>IEEE 11073-10406 Validado</span>
              </div>
            </div>

            {/* Simulated Animated ECG SVG Path */}
            <div className="h-28 sm:h-36 w-full flex items-center relative overflow-hidden">
              <svg viewBox="0 0 1000 120" preserveAspectRatio="none" className="w-full h-full text-cyan-400 stroke-current" strokeWidth="2.5" fill="none">
                <path
                  d="M0,60 L80,60 L95,60 L105,45 L115,75 L125,60 L180,60 L200,60 L210,20 L225,105 L240,60 L270,60 L290,48 L310,60 L360,60 L440,60 L455,45 L465,75 L475,60 L540,60 L550,15 L565,110 L580,60 L610,60 L630,48 L650,60 L720,60 L800,60 L810,20 L825,105 L840,60 L870,60 L890,48 L910,60 L1000,60"
                  className="ecg-path"
                />
              </svg>

              {/* Scanning light gradient beam */}
              <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none animate-ecg-scan" />
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mt-2 pt-2 border-t border-cyan-900/30">
              <span>Sincronização: Segura (AES-256 GCM)</span>
              <span>Dispositivo UUID: 0000180D-0000-1000-8000-00805F9B34FB</span>
            </div>
          </div>

          {/* Vitals Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {/* BPM */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-rose-500/40 transition-all">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                <span>Frequência Cardíaca</span>
                <Heart className="w-4 h-4 text-rose-500 animate-bounce" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono">
                  {bpm}
                </span>
                <span className="text-xs font-bold text-slate-500">BPM</span>
              </div>
              <div className="mt-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                <Check className="w-3 h-3" /> Ritmo Sinusal Normal
              </div>
            </div>

            {/* SpO2 */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                <span>Oxímetria (SpO2)</span>
                <Activity className="w-4 h-4 text-cyan-500" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono">
                  {currentProfile.spo2}
                </span>
                <span className="text-xs font-bold text-slate-500">SatO2</span>
              </div>
              <div className="mt-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                <Check className="w-3 h-3" /> Oxigenação Excelente
              </div>
            </div>

            {/* Blood Pressure */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-lifemed-teal/40 transition-all">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                <span>Pressão Arterial</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono">NIBP</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono">
                  {currentProfile.bp}
                </span>
                <span className="text-xs font-bold text-slate-500">mmHg</span>
              </div>
              <div className="mt-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                <Check className="w-3 h-3" /> Normotenso
              </div>
            </div>

            {/* Temperature */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-amber-500/40 transition-all">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                <span>Temperatura</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono">TEMP</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono">
                  {currentProfile.temp}
                </span>
              </div>
              <div className="mt-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                <Check className="w-3 h-3" /> Afebril
              </div>
            </div>
          </div>

          {/* Simulation Trigger Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <p className="max-w-xl text-left leading-relaxed">
              <strong className="text-slate-900 dark:text-white">{currentProfile.name}:</strong> {currentProfile.description}
            </p>
            <button
              onClick={handleSimulateSync}
              className="btn-bio-primary !py-2.5 !px-5 text-xs whitespace-nowrap cursor-pointer flex-shrink-0"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{t.liveSimulator.buttonSimulate}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
