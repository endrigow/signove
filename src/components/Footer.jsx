import React from 'react';
import Logo from './Logo';
import { ArrowUp } from 'lucide-react';

export default function Footer({ t }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100 dark:border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Pioneira em pesquisa e desenvolvimento de software médico de alta complexidade para saúde conectada, IoMT e monitoramento remoto de pacientes.
            </p>
            <div className="text-xs text-slate-400 dark:text-slate-500">
              Rua Dom Pedro II, 675, Prata • Campina Grande - PB, Brasil
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/signove/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-600 hover:border-brand-500/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-600 hover:border-brand-500/40 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-600 hover:border-brand-500/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links: Produtos & Soluções */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Soluções & Produtos
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a href="#platform" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Plataforma SigHealth
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Monitoramento Remoto (RPM)
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Central Lifeview Hospitalar
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Gateway IoMT Bluetooth LE
                </a>
              </li>
            </ul>
          </div>

          {/* Links: A Empresa */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a href="#certifications" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Certificações ISO & Qualidade
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Patente USPTO (EUA)
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Publicações e Casos Clínicos
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Governança & Integridade
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Privacidade & Direitos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Privacidade & LGPD
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a href="#governance" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Acesso aos Dados (DSAR)
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Encarregado de Dados (DPO)
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Canal de Denúncias
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Aviso de Privacidade & Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2009 - 2026 {t.footer.rights}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400 hidden lg:inline">
              {t.footer.legalNotice}
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Voltar ao Topo"
              className="p-2 rounded-xl glass-panel text-slate-600 dark:text-slate-300 hover:text-brand-600 hover:border-brand-500/40 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
