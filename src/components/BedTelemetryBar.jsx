import React, { useState, useEffect } from 'react';
import { Wifi, Activity, Heart, Shield, CheckCircle2, Clock, Cpu, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function BedTelemetryBar({ t, onOpenDemo }) {
  const [tickerTime, setTickerTime] = useState(new Date().toLocaleTimeString());
  const [pulseState, setPulseState] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerTime(new Date().toLocaleTimeString());
      setPulseState(prev => !prev);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const beds = [
    {
      bedId: "Leito 01",
      sector: "UTI Coronariana",
      patientCode: "PAC-4821",
      device: "Monitor Multiparamétrico de Cabeceira",
      bpm: pulseState ? "74" : "75",
      spo2: "99%",
      bp: "120/78",
      temp: "36.6 ºC",
      status: "Vigilância Ativa 24/7",
      statusColor: "emerald",
      latency: "8ms"
    },
    {
      bedId: "Leito 04",
      sector: "Pós-Operatório Cardíaco",
      patientCode: "PAC-1904",
      device: "Sensor ECG Contínuo Bluetooth LE",
      bpm: pulseState ? "68" : "67",
      spo2: "97%",
      bp: "118/76",
      temp: "36.8 ºC",
      status: "Telemetria Ambulatorial Conectada",
      statusColor: "cyan",
      latency: "12ms"
    },
    {
      bedId: "Leito 12",
      sector: "Semi-Intensiva & Infusão",
      patientCode: "PAC-7732",
      device: "Hub Multiparamétrico Integrado",
      bpm: pulseState ? "82" : "83",
      spo2: "98%",
      bp: "125/82",
      temp: "37.0 ºC",
      status: "Sinais Vitais Estáveis",
      statusColor: "brand",
      latency: "10ms"
    }
  ];

  return (
    <section id="telemetry-strip" className="relative py-12 sm:py-16 bg-slate-900/90 dark:bg-slate-950 border-y border-cyan-900/40 text-slate-100 overflow-hidden">
      {/* Background Subtle Tech Glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Conectado em Tempo Real</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 font-mono">{tickerTime}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Monitoração de Leitos & Telemetria Médica Hospitalar
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Transmissão contínua de parâmetros biomédicos críticos de beira de leito diretamente à central médica e prontuário com latência ultrabaixa.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="glass-panel px-4 py-2 rounded-2xl border border-slate-700 text-xs text-slate-300 flex items-center gap-2">
              <Wifi className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Gateway IoMT: <strong>Online</strong></span>
            </div>
            <div className="glass-panel px-4 py-2 rounded-2xl border border-slate-700 text-xs text-slate-300 flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>TLS 1.3 & AES-256</span>
            </div>
            <button
              onClick={onOpenDemo}
              className="btn-bio-primary !py-2 !px-4 text-xs font-semibold cursor-pointer"
            >
              <span>Integrar Central</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Real-time Bed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {beds.map((bed, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 rounded-3xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl group relative overflow-hidden"
            >
              {/* Top Bed Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                      {bed.bedId}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {bed.sector}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                    ID: {bed.patientCode} • Latência: {bed.latency}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Sincronizado</span>
                </div>
              </div>

              {/* Vitals Numbers Bar */}
              <div className="grid grid-cols-4 gap-2 text-center py-2 bg-slate-900/60 rounded-2xl border border-slate-800 mb-4">
                <div className="p-1">
                  <div className="text-[10px] uppercase font-mono text-slate-400 flex items-center justify-center gap-1">
                    <Heart className="w-3 h-3 text-rose-500" /> FC
                  </div>
                  <div className="text-base font-extrabold text-white font-mono">{bed.bpm}</div>
                  <div className="text-[9px] text-slate-500">bpm</div>
                </div>
                <div className="p-1 border-l border-slate-800">
                  <div className="text-[10px] uppercase font-mono text-slate-400">SpO2</div>
                  <div className="text-base font-extrabold text-cyan-400 font-mono">{bed.spo2}</div>
                  <div className="text-[9px] text-slate-500">SatO2</div>
                </div>
                <div className="p-1 border-l border-slate-800">
                  <div className="text-[10px] uppercase font-mono text-slate-400">PA</div>
                  <div className="text-base font-extrabold text-white font-mono">{bed.bp}</div>
                  <div className="text-[9px] text-slate-500">mmHg</div>
                </div>
                <div className="p-1 border-l border-slate-800">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Temp</div>
                  <div className="text-base font-extrabold text-emerald-400 font-mono">{bed.temp}</div>
                  <div className="text-[9px] text-slate-500">Normal</div>
                </div>
              </div>

              {/* Sub-device info */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <span className="text-[11px] text-slate-400 truncate max-w-[200px]">
                  {bed.device}
                </span>
                <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> {bed.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Capabilities Ticker Bar */}
        <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 flex flex-wrap items-center justify-around gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Padrões: <strong>IEEE 11073 • HL7 FHIR • Continua PAN/WAN</strong></span>
          </div>
          <div className="hidden md:block w-px h-6 bg-slate-800" />
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Monitoração Contínua: <strong>UTI, Centro Cirúrgico & Home Care</strong></span>
          </div>
          <div className="hidden md:block w-px h-6 bg-slate-800" />
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-blue-400" />
            <span>Certificação Médica: <strong>ISO 13485 & Patente USPTO</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
