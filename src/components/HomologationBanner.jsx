import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

export default function HomologationBanner({ lang, onDismiss }) {
  const content = {
    pt: {
      badge: "HOMOLOGAÇÃO & PROTÓTIPO",
      text: "Ambiente de testes e validação conceitual • Este portal não é o site oficial em produção da Signove.",
      watermark: "Versão de Homologação"
    },
    en: {
      badge: "STAGING & PROTOTYPE",
      text: "Testing & concept validation environment • This portal is not Signove's official production website.",
      watermark: "Homologation Version"
    }
  };

  const t = content[lang] || content.pt;

  return (
    <>
      {/* Top Banner Notice */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 px-4 py-1.5 text-xs font-semibold shadow-md border-b border-amber-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 flex-1 justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950 text-amber-300 text-[10px] font-extrabold uppercase tracking-wider shadow-sm animate-pulse">
              <AlertTriangle className="w-3 h-3 text-amber-400" />
              <span>{t.badge}</span>
            </span>
            <span className="text-slate-950 font-medium hidden sm:inline">
              {t.text}
            </span>
            <span className="text-slate-950 font-medium sm:hidden text-center text-[10px]">
              {t.text}
            </span>
          </div>

          <button
            onClick={onDismiss}
            aria-label="Dispensar aviso"
            className="p-1 rounded-md text-slate-950 hover:bg-black/15 transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating Staging Badge (Always visible corner reminder) */}
      <div className="fixed bottom-4 left-4 z-40 pointer-events-none select-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/90 text-slate-950 text-[11px] font-bold shadow-lg backdrop-blur-md border border-amber-300/80 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
          <span>⚠️ {t.watermark}</span>
        </div>
      </div>
    </>
  );
}
