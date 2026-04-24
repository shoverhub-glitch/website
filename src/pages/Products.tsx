import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CreditCard,
  BookOpen,
  Rocket,
  CheckCircle2,
} from 'lucide-react';
import { SEO, GlassCard, ScrollReveal } from '../components';
import { products } from '../data/site';

const iconMap: Record<string, React.ElementType> = { Building2, CreditCard, BookOpen, Rocket };

const productDetails: Record<string, string[]> = {
  'hostel-manager': [
    'Property & tenant management',
    'Automated billing & invoicing',
    'Room allocation & tracking',
    'Staff roles & permissions',
    'Real-time analytics dashboard',
    'Multi-property support',
  ],
  'vcard': [
    'Customisable templates',
    'One-click sharing',
    'Mobile-optimised design',
    'Digital business cards',
    'Event invitations',
    'QR code generation',
  ],
  'blog': [
    'Tech & engineering insights',
    'Design thinking & process',
    'Product updates & launches',
    'Studio culture & remote work',
    'Industry analysis',
    'Community stories',
  ],
  'coming-soon': [
    'Mobile applications',
    'Web tools & platforms',
    'Developer utilities',
    'AI-powered products',
  ],
};

export default function Products() {
  return (
    <>
      <SEO title="Products" description="Explore ShoverHub's products — Hostel Manager, VCard, Blog, and more in the pipeline." />

      {/* Hero */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <p className="text-caption text-accent font-medium tracking-widest uppercase mb-4">Products</p>
            <h1 className="text-display-sm md:text-display font-bold tracking-tight max-w-3xl">
              Built by us,
              <br />
              <span className="text-gradient">used by many</span>
            </h1>
            <p className="mt-6 text-body-lg text-txt-secondary max-w-2xl leading-relaxed">
              We don't just build for clients — we build our own products too.
              Each one solves a real problem we've encountered firsthand.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products */}
      <section className="pb-20 md:pb-28">
        <div className="section-container space-y-8">
          {products.map((product, i) => {
            const Icon = iconMap[product.icon];
            const details = productDetails[product.id] || [];
            const isComingSoon = product.status === 'coming-soon';

            return (
              <ScrollReveal key={product.id} delay={i * 100}>
                <GlassCard padding="lg" className="group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `${product.color}10` }} />

                  <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left: Info */}
                    <div className="lg:w-1/2">
                      <div className="flex items-start justify-between mb-5">
                        <div className="p-4 rounded-2xl" style={{ background: `${product.color}12` }}>
                          {Icon && <Icon className="w-7 h-7" style={{ color: product.color }} />}
                        </div>
                        {isComingSoon ? (
                          <span className="px-3 py-1 rounded-full text-caption bg-amber-500/10 text-amber-500 font-medium">
                            Coming Soon
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full text-caption bg-green-500/10 text-green-500 font-medium">
                            Live
                          </span>
                        )}
                      </div>
                      <h2 className="text-heading-lg font-bold tracking-tight">{product.title}</h2>
                      <p className="mt-3 text-body text-txt-secondary leading-relaxed">{product.description}</p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {!isComingSoon && product.url && (
                          <a
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary gap-2"
                            style={{ background: product.color }}
                          >
                            Visit Product <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                        {isComingSoon && (
                          <Link to="/contact" className="btn-primary gap-2">
                            Get Notified <ArrowRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Right: Features */}
                    <div className="lg:w-1/2">
                      <h3 className="text-sm font-semibold text-txt-tertiary uppercase tracking-wider mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {details.map(feature => (
                          <li key={feature} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: product.color }} />
                            <span className="text-body-sm text-txt-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="text-heading-lg md:text-display-sm font-bold tracking-tight">
                  Have an idea for a product?
                </h2>
                <p className="mt-4 text-body-lg text-txt-secondary max-w-lg mx-auto">
                  We love turning ideas into reality. Let's build something together.
                </p>
                <Link to="/contact" className="btn-primary gap-2 mt-8 inline-flex">
                  Let's Talk <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
