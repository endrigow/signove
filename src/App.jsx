import React, { useState, useEffect } from 'react';
import HomologationBanner from './components/HomologationBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BedTelemetryBar from './components/BedTelemetryBar';
import LiveSimulator from './components/LiveSimulator';
import SigHealthPlatform from './components/SigHealthPlatform';
import Solutions from './components/Solutions';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Governance from './components/Governance';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { translations } from './translations';
import { X, Send, CheckCircle2, Activity } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('signove_lang') || 'pt';
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('signove_theme') || 'dark';
  });

  const [bannerVisible, setBannerVisible] = useState(true);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    phone: '',
    org: '',
    solution: 'Plataforma SigHealth (RPM)'
  });

  const t = translations[lang] || translations.pt;

  // Handle Theme Change
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('signove_theme', theme);
  }, [theme]);

  // Handle Lang Change
  useEffect(() => {
    localStorage.setItem('signove_lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenDemo = () => {
    setDemoModalOpen(true);
    setDemoSubmitted(false);
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSubmitted(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#00D2D3', '#00A896', '#0284C7']
    });
    setTimeout(() => {
      setDemoModalOpen(false);
      setDemoSubmitted(false);
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative selection:bg-brand-500 selection:text-white">
      {/* Background medical ambient grid */}
      <div className="fixed inset-0 bg-[radial-gradient(#0284c715_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-40 dark:opacity-20" />

      {/* Global Homologation Notice */}
      {bannerVisible && (
        <HomologationBanner lang={lang} onDismiss={() => setBannerVisible(false)} />
      )}

      {/* Global Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        t={t}
        bannerVisible={bannerVisible}
        onOpenDemo={handleOpenDemo}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          t={t}
          onExplore={() => {
            const el = document.getElementById('platform');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenDemo={handleOpenDemo}
        />

        {/* Real-Time Connected Beds & Hospital Telemetry Bar (Logo Abaixo do Hero) */}
        <BedTelemetryBar t={t} onOpenDemo={handleOpenDemo} />

        {/* Real-time IoMT Interactive Simulator */}
        <LiveSimulator t={t} />

        {/* SigHealth Platform In-Depth */}
        <SigHealthPlatform t={t} onOpenDemo={handleOpenDemo} />

        {/* Solutions & Hospital/Homecare Ecosystem */}
        <Solutions t={t} onOpenDemo={handleOpenDemo} />

        {/* Standards, Certifications ISO & USPTO Patents */}
        <Certifications t={t} />

        {/* Hospital Deployments & Real Cases */}
        <Publications t={t} />

        {/* Data Governance & Legal Rights (DSAR/DPO/Whistleblowing) */}
        <Governance t={t} />

        {/* Enterprise Contact & Campina Grande HQ */}
        <ContactSection t={t} />
      </main>

      {/* Global Footer */}
      <Footer t={t} />

      {/* Demo Request Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel-elevated max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-2xl relative">
            <button
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {demoSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Solicitação de Demonstração Recebida!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Nossa equipe de engenharia e negócios entrará em contato para agendar uma apresentação personalizada da plataforma SigHealth.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                    <Activity className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Agendar Demonstração Técnica
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Signove Tecnologia • Campina Grande (PB)
                    </p>
                  </div>
                </div>

                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={demoForm.name}
                      onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      placeholder="Dr. João Silva"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        E-mail Institucional
                      </label>
                      <input
                        type="email"
                        required
                        value={demoForm.email}
                        onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                        placeholder="joao@hospital.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={demoForm.phone}
                        onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                        placeholder="(83) 99999-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Instituição / Empresa
                    </label>
                    <input
                      type="text"
                      required
                      value={demoForm.org}
                      onChange={(e) => setDemoForm({ ...demoForm, org: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      placeholder="Hospital, Operadora ou Fabricante de Equipamento"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Solução Desejada
                    </label>
                    <select
                      value={demoForm.solution}
                      onChange={(e) => setDemoForm({ ...demoForm, solution: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                    >
                      <option value="Plataforma SigHealth (RPM)">Plataforma SigHealth (RPM & Telemedicina)</option>
                      <option value="Central Lifeview para Leitos">Central Lifeview para Leitos Hospitalares</option>
                      <option value="Gateway IoMT / Conectividade BLE">Gateway IoMT / Conectividade BLE</option>
                      <option value="Consultoria Regulatório ISO 13485">Consultoria Regulatória ISO 13485 / MDR</option>
                    </select>
                  </div>

                  <div className="flex justify-end gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setDemoModalOpen(false)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="btn-bio-primary !py-2.5 !px-5 text-xs font-semibold"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Confirmar Agendamento</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
