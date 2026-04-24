import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
}

export function Layout({ children, isDark, toggleTheme }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="flex-1 pt-16 md:pt-18" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
