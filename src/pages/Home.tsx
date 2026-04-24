import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Smartphone, Globe, Palette, PenTool, Zap, Layers, Shield, Globe as Globe2, Eye, Lightbulb, Building2, CreditCard, BookOpen, Rocket, ChevronRight } from 'lucide-react';
import { SEO, GlassCard, ScrollReveal } from '../components';
import { services, products, processSteps, whyReasons, blogPosts, siteConfig } from '../data/site';

const iconMap: Record<string, React.ElementType> = {
  Smartphone, Globe, Palette, PenTool, Zap, Layers, Shield, Globe2, Eye, Lightbulb,
  Building2, CreditCard, BookOpen, Rocket,
};

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/2 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-caption text-txt-secondary mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-soft" />
              Remote-First Digital Studio
            </div>
          </div>

          <h1 className="text-display-lg md:text-7xl lg:text-display-lg font-bold tracking-tight leading-[1.05] animate-fade-in-up">
            We build digital
            <br />
            products that
            <br />
            <span className="text-gradient">push beyond</span>
          </h1>

          <p className="mt-8 text-body-lg text-txt-secondary max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            ShoverHub is a lean, focused studio crafting apps, websites, and tools
            for clients worldwide. No fluff — just exceptional products.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/services" className="btn-primary gap-2">
              Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/products" className="btn-secondary gap-2">
              View Products
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StudioIntro() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="section-container">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-caption text-accent font-medium tracking-widest uppercase mb-4">About the Studio</p>
            <h2 className="text-heading-lg md:text-display-sm font-bold tracking-tight">
              Small studio. Big ambitions.
            </h2>
            <p className="mt-6 text-body-lg text-txt-secondary leading-relaxed">
              We're a remote-first team that believes great products come from focused minds,
              not crowded rooms. We partner with founders, startups, and businesses who want
              more than just another vendor — they want a team that cares about the outcome
              as much as they do.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '4+', label: 'Products Shipped' },
            { value: '3+', label: 'Countries' },
            { value: '100%', label: 'Remote Team' },
            { value: '24/7', label: 'Global Coverage' },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <GlassCard padding="md" className="text-center">
                <p className="text-heading-lg md:text-display font-bold text-accent">{stat.value}</p>
                <p className="mt-1 text-body-sm text-txt-secondary">{stat.label}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-caption text-accent font-medium tracking-widest uppercase mb-3">Products</p>
              <h2 className="text-heading-lg md:text-display-sm font-bold tracking-tight">
                What we've built
              </h2>
            </div>
            <Link to="/products" className="hidden sm:inline-flex btn-ghost gap-1.5">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.slice(0, 3).map((product, i) => {
            const Icon = iconMap[product.icon];
            return (
              <ScrollReveal key={product.id} delay={i * 100} className={i === 2 ? 'md:col-span-2' : ''}>
                <GlassCard padding="lg" className="group h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `${product.color}15` }} />
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl" style={{ background: `${product.color}15` }}>
                      {Icon && <Icon className="w-6 h-6" style={{ color: product.color }} />}
                    </div>
                    {product.status === 'live' && product.url && (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-txt-tertiary hover:text-accent hover:bg-surface-hover transition-all"
                        aria-label={`Visit ${product.title}`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-heading-sm font-semibold">{product.title}</h3>
                  <p className="mt-2 text-body-sm text-txt-secondary leading-relaxed flex-1">{product.description}</p>
                  {product.status === 'live' && product.url && (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                    >
                      Visit product <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {product.status === 'coming-soon' && (
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-txt-tertiary">
                      <Rocket className="w-3.5 h-3.5" /> In development
                    </span>
                  )}
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="section-container">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-caption text-accent font-medium tracking-widest uppercase mb-3">Services</p>
            <h2 className="text-heading-lg md:text-display-sm font-bold tracking-tight">
              What we do best
            </h2>
            <p className="mt-4 text-body-lg text-txt-secondary">
              From concept to launch, we cover the full spectrum of digital product development.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.id} delay={i * 100}>
                <GlassCard padding="lg" className="group h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-accent-muted text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {Icon && <Icon className="w-6 h-6" />}
                    </div>
                    <h3 className="text-heading-sm font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-body-sm text-txt-secondary leading-relaxed mb-5">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map(feature => (
                      <span key={feature} className="px-3 py-1 rounded-full text-caption bg-bg-tertiary text-txt-secondary">
                        {feature}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-secondary gap-2">
              Explore all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhyShoverHub() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-caption text-accent font-medium tracking-widest uppercase mb-3">Why Us</p>
            <h2 className="text-heading-lg md:text-display-sm font-bold tracking-tight">
              Why ShoverHub
            </h2>
            <p className="mt-4 text-body-lg text-txt-secondary">
              We're not the biggest studio. We don't want to be. Here's what makes us different.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyReasons.map((reason, i) => {
            const Icon = iconMap[reason.icon];
            return (
              <ScrollReveal key={reason.title} delay={i * 80}>
                <GlassCard padding="md" className="h-full group">
                  <div className="p-2.5 rounded-lg bg-accent-muted text-accent w-fit mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <h3 className="text-heading-sm font-semibold mb-2">{reason.title}</h3>
                  <p className="text-body-sm text-txt-secondary leading-relaxed">{reason.description}</p>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="section-container">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-caption text-accent font-medium tracking-widest uppercase mb-3">Process</p>
            <h2 className="text-heading-lg md:text-display-sm font-bold tracking-tight">
              How we work
            </h2>
            <p className="mt-4 text-body-lg text-txt-secondary">
              A clear, repeatable process that keeps projects on track and outcomes predictable.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-[2.25rem] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 100}>
                <div className="flex gap-6 items-start">
                  <div className="hidden lg:flex flex-shrink-0 w-[4.5rem] justify-center">
                    <div className="w-9 h-9 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center text-sm font-bold text-accent z-10">
                      {step.step}
                    </div>
                  </div>
                  <GlassCard padding="md" className="flex-1 group">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="lg:hidden text-sm font-bold text-accent">{step.step}</span>
                      <h3 className="text-heading-sm font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-body-sm text-txt-secondary leading-relaxed">{step.description}</p>
                  </GlassCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-caption text-accent font-medium tracking-widest uppercase mb-3">Blog</p>
              <h2 className="text-heading-lg md:text-display-sm font-bold tracking-tight">
                Latest from the studio
              </h2>
            </div>
            <Link to="/blog" className="hidden sm:inline-flex btn-ghost gap-1.5">
              All posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 100}>
              <GlassCard padding="md" className="group h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-caption bg-accent-muted text-accent font-medium">
                    {post.category}
                  </span>
                  <span className="text-caption text-txt-tertiary">{post.readTime}</span>
                </div>
                <h3 className="text-heading-sm font-semibold mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-body-sm text-txt-secondary leading-relaxed flex-1">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between">
                  <time className="text-caption text-txt-tertiary" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </time>
                  <Link to="/blog" className="text-sm font-medium text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1">
                    Read <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="section-container">
        <ScrollReveal>
          <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/3 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-heading-lg md:text-display-sm font-bold tracking-tight">
                Ready to build something great?
              </h2>
              <p className="mt-4 text-body-lg text-txt-secondary max-w-lg mx-auto">
                Let's talk about your next project. No pitch decks required — just a conversation.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary gap-2">
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`mailto:${siteConfig.email}`} className="btn-secondary gap-2">
                  {siteConfig.email} <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <StudioIntro />
      <FeaturedProducts />
      <ServicesSection />
      <WhyShoverHub />
      <ProcessSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}
