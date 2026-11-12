import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, Menu, X, Activity } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ lang, setLang, theme, toggleTheme, t, bannerVisible, onOpenDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger glass mode when scrolled more than 15px
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#platform", label: t.nav.platform },
    { href: "#simulator", label: t.hero.ctaSecondary },
    { href: "#solutions", label: t.nav.solutions },
    { href: "#certifications", label: t.nav.certifications },
    { href: "#cases", label: t.nav.cases },
    { href: "#governance", label: t.nav.governance },
  ];

  return (
    <header className={`fixed left-0 right-0 z-40 transition-all duration-300 px-3 sm:px-6 lg:px-8 ${bannerVisible ? 'top-8 sm:top-9 pt-2.5 sm:pt-3' : 'top-0 pt-3 sm:pt-4'}`}>
      <div
        className={`max-w-7xl mx-auto rounded-3xl transition-all duration-500 ${
          isScrolled
            ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl backdrop-saturate-150 border border-white/60 dark:border-white/10 shadow-[0_12px_40px_-10px_rgba(0,180,216,0.18),0_1px_2px_0_rgba(255,255,255,0.7)_inset] dark:shadow-[0_16px_50px_-10px_rgba(0,0,0,0.7),0_1px_1px_0_rgba(255,255,255,0.12)_inset] py-2.5 px-5'
            : 'bg-white/35 dark:bg-slate-900/35 backdrop-blur-md border border-white/30 dark:border-white/5 py-4 px-6 shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Official Signove Logo */}
          <a href="#" className="flex items-center">
            <Logo className="h-7 sm:h-8" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 rounded-full transition-all duration-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 hover:backdrop-blur-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Lang, Theme & Demo CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Selector Capsule */}
            <div className="flex items-center p-1 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold shadow-inner">
              <button
                onClick={() => setLang('pt')}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  lang === 'pt'
                    ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-300 shadow-sm font-bold'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-300 shadow-sm font-bold'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Dark/Light Mode Glass Pill */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 transition-all duration-300 hover:scale-105 cursor-pointer shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            {/* Creative Bio CTA Button */}
            <button
              onClick={onOpenDemo}
              className="btn-bio-primary !py-2 !px-5 !text-xs !gap-2 tracking-wide font-medium cursor-pointer"
            >
              <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-300" />
              <span>{t.nav.demoButton}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800/80"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-3 pb-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-500" />
                <button
                  onClick={() => setLang('pt')}
                  className={`text-xs px-2.5 py-1 rounded font-bold ${lang === 'pt' ? 'text-brand-600 bg-brand-50 dark:bg-slate-800' : 'text-slate-500'}`}
                >
                  Português
                </button>
                <span className="text-slate-400">|</span>
                <button
                  onClick={() => setLang('en')}
                  className={`text-xs px-2.5 py-1 rounded font-bold ${lang === 'en' ? 'text-brand-600 bg-brand-50 dark:bg-slate-800' : 'text-slate-500'}`}
                >
                  English
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="btn-bio-primary w-full mt-2 !py-2.5 !text-sm"
            >
              <Activity className="w-4 h-4 animate-pulse" />
              <span>{t.nav.demoButton}</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
