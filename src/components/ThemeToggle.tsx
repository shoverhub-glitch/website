import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

export function ThemeToggle({ isDark, toggle }: ThemeToggleProps) {
  return (
    <button
      onClick={toggle}
      className="relative p-2 rounded-xl glass glass-hover transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-accent/50"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 w-5 h-5 text-amber-400 transition-all duration-300 ${
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 text-blue-300 transition-all duration-300 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          }`}
        />
      </div>
    </button>
  );
}
