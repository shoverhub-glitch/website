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

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-glass backdrop-blur-xl transition-all duration-300`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 h-20" aria-label="Main navigation">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="text-2xl font-bold tracking-tighter text-accent drop-shadow-glow font-display"
          aria-label={`${siteConfig.name} — Home`}
        >
          {siteConfig.name}
        </Link>

        <div className="hidden md:flex items-center gap-8 font-display tracking-tight">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-medium transition-all duration-300 ${
                location.pathname === link.href
                  ? 'text-accent border-b-2 border-accent pb-1'
                  : 'text-txt-secondary hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          <Link to="/contact" className="hidden md:inline-flex btn-primary">
            Start a Project
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
        className={`md:hidden fixed inset-0 z-[60] transition-all duration-300 ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
        <nav
          className={`relative bg-background border-l border-border h-full max-w-[300px] ml-auto flex flex-col transition-transform duration-300 shadow-2xl ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Mobile navigation"
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span className="text-xl font-bold tracking-tighter text-accent font-display">
              {siteConfig.name}
            </span>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 rounded-lg text-txt-secondary hover:text-accent hover:bg-surface-hover transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-1 p-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 ${
                  location.pathname === link.href
                    ? 'text-accent bg-accent-muted'
                    : 'text-txt hover:text-accent hover:bg-surface-hover'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto p-6 border-t border-border">
            <Link to="/contact" className="btn-primary w-full text-center">
              Start a Project
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
