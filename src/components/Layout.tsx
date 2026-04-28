import { ReactNode, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
}

export function Layout({ children, isDark, toggleTheme }: LayoutProps) {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.pageYOffset}`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="bg-mesh-dynamic" id="mesh-bg"></div>
      <div className="grain-overlay"></div>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="flex-1 pt-20" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
