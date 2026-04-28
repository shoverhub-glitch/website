import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/site';

const footerSections = [
  {
    title: 'Studio',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Products', href: '/products' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
  { icon: Github, href: siteConfig.social.github, label: 'GitHub' },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 pt-12 pb-8 bg-slate-950 relative z-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to="/" className="text-lg font-black text-white font-display uppercase tracking-widest">
          {siteConfig.name}
        </Link>
        <div className="flex flex-wrap justify-center gap-8 font-display text-sm">
          {socialLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="text-slate-500 font-display text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name} Studio.
        </p>
      </div>
    </footer>
  );
}
