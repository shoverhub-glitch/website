import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '../data/site';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-glass' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-18" aria-label="Main navigation">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-txt hover:opacity-80 transition-opacity"
          aria-label={`${siteConfig.name} — Home`}
        >
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span>{siteConfig.name}</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.href
                  ? 'text-accent bg-accent-muted'
                  : 'text-txt-secondary hover:text-txt hover:bg-surface-hover'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          <Link to="/contact" className="hidden md:inline-flex btn-primary text-sm">
            Get in Touch
          </Link>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-lg text-txt-secondary hover:text-txt hover:bg-surface-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-bg/80 backdrop-blur-xl" onClick={() => setIsMobileOpen(false)} />
        <nav
          className={`relative glass-strong h-full max-w-sm ml-auto flex flex-col p-6 transition-transform duration-300 ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  location.pathname === link.href
                    ? 'text-accent bg-accent-muted'
                    : 'text-txt-secondary hover:text-txt hover:bg-surface-hover'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <Link to="/contact" className="btn-primary w-full text-center">
              Get in Touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
