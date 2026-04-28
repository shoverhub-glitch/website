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
    <section className="relative pt-32 pb-xl px-8 max-w-7xl mx-auto z-10">
      <header className="mb-lg space-y-4 parallax-layer" data-speed="0.05">
        <div className="flex items-center gap-3">
          <span className="w-12 h-[1px] bg-accent"></span>
          <span className="font-label-caps text-label-caps text-accent uppercase tracking-widest">Excellence in Motion</span>
        </div>
        <h1 className="font-display-lg text-display-lg text-txt">We build digital products that <span className="text-glow text-accent">push beyond.</span></h1>
        <p className="font-body-lg text-body-lg text-txt-secondary max-w-2xl leading-relaxed">
          ShoverHub is a curation of digital products engineered with precision and designed for the next generation of global interfaces.
        </p>
      </header>
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
              <p className="font-label-caps text-label-caps text-accent uppercase tracking-widest mb-3">Selected Works</p>
              <h2 className="text-heading-lg md:text-display-sm font-bold tracking-tight text-txt">
                Curation of digital products
              </h2>
            </div>
            <Link to="/products" className="hidden sm:inline-flex btn-ghost gap-1.5">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="perspective-container grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {products.slice(0, 4).map((product, i) => {
            const isLarge = i === 0;
            return (
              <ScrollReveal 
                key={product.id} 
                delay={i * 100} 
                className={isLarge ? 'md:col-span-8' : 'md:col-span-4'}
              >
                <GlassCard padding="none" className="group relative overflow-hidden h-full">
                  <div className={`w-full relative overflow-hidden ${isLarge ? 'aspect-[16/9]' : 'aspect-square md:aspect-[4/3]'}`}>
                    <img 
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      src={product.image} 
                      alt={product.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(product as any).tags?.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 font-label-caps text-[10px] text-accent uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className={`font-display font-bold text-white mb-2 ${isLarge ? 'text-3xl' : 'text-xl'}`}>
                      {product.title}
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    {product.url && (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 flex items-center gap-2 text-accent font-button text-sm transition-all duration-300"
                      >
                        View Project <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
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
