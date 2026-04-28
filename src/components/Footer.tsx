import { Link } from 'react-router-dom';
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
  { href: siteConfig.social.instagram, label: 'Instagram' },
  { href: `mailto:${siteConfig.email}`, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 pt-12 pb-8 bg-slate-950 relative z-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-display font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-slate-500 hover:text-white transition-colors font-display text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
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
              className="text-slate-500 hover:text-white transition-colors font-display text-sm"
            >
              {label}
            </a>
          ))}
          </div>
          <p className="text-slate-500 font-display text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name} Studio.
          </p>
        </div>
      </div>
    </footer>
  );
}
