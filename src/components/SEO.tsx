import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../data/site';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
}

export function SEO({ title, description, canonical, type = 'website', image }: SEOProps) {
  const location = useLocation();
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;
  const desc = description || siteConfig.description;
  const url = canonical || `${siteConfig.url}${location.pathname}`;
  const ogImage = image || `${siteConfig.url}/og-image.png`;

  useEffect(() => {
    document.title = fullTitle;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('description', desc);
    setMeta('keywords', 'digital product studio, app development, web development, UI/UX design, software development, React, Next.js, mobile apps, SaaS products');
    setMeta('robots', 'index, follow');
    setMeta('og:title', fullTitle);
    setMeta('og:description', desc);
    setMeta('og:url', url);
    setMeta('og:type', type);
    setMeta('og:image', ogImage);
    setMeta('og:site_name', siteConfig.name);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:site', '@shoverhub');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', desc);
    setMeta('twitter:image', ogImage);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;
  }, [fullTitle, desc, url, type, ogImage]);

  return null;
}
