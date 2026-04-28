import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Globe, Palette, PenTool, Code2, Database, Figma, BarChart3, LayoutGrid as Layout, FileText, Megaphone } from 'lucide-react';
import { SEO, GlassCard, ScrollReveal } from '../components';
import { services, processSteps } from '../data/site';

const iconMap: Record<string, React.ElementType> = { Smartphone, Globe, Palette, PenTool };

const serviceDetails = [
  {
    ...services[0],
    details: [
      { icon: Code2, label: 'Native iOS & Android' },
      { icon: Smartphone, label: 'Cross-Platform (React Native)' },
      { icon: Database, label: 'Backend & API Development' },
      { icon: BarChart3, label: 'Analytics & Monitoring' },
    ],
  },
  {
    ...services[1],
    details: [
      { icon: Globe, label: 'React & Next.js' },
      { icon: Code2, label: 'Full-Stack Development' },
      { icon: Layout, label: 'Progressive Web Apps' },
      { icon: Database, label: 'Database & Infrastructure' },
    ],
  },
  {
    ...services[2],
    details: [
      { icon: Figma, label: 'UI/UX Design' },
      { icon: Layout, label: 'Prototyping & Wireframing' },
      { icon: Palette, label: 'Design Systems' },
      { icon: BarChart3, label: 'User Research & Testing' },
    ],
  },
  {
    ...services[3],
    details: [
      { icon: FileText, label: 'Brand Strategy & Identity' },
      { icon: Megaphone, label: 'Content Strategy' },
      { icon: PenTool, label: 'Copywriting & Messaging' },
      { icon: Palette, label: 'Visual Assets & Graphics' },
    ],
  },
];

export default function Services() {
  return (
    <>
      <SEO title="Services" description="App development, web development, product design, and branding services from ShoverHub — a digital product studio." />

      {/* Hero */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <p className="text-caption text-accent font-medium tracking-widest uppercase mb-4">Services</p>
            <h1 className="text-display-sm md:text-display font-bold tracking-tight max-w-3xl">
              End-to-end product
              <br />
              <span className="text-gradient">development</span>
            </h1>
            <p className="mt-6 text-body-lg text-txt-secondary max-w-2xl leading-relaxed">
              From strategy to launch, we cover the full spectrum of digital product creation.
              Every service is designed to work together — or stand on its own.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-20 md:pb-28">
        <div className="section-container">
          <div className="space-y-8">
            {serviceDetails.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <ScrollReveal key={service.id} delay={i * 100}>
                  <GlassCard padding="lg" className="group">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                      <div className="lg:w-1/3">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-xl bg-accent-muted text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                            {Icon && <Icon className="w-6 h-6" />}
                          </div>
                          <h2 className="text-heading-sm font-semibold">{service.title}</h2>
                        </div>
                        <p className="text-body text-txt-secondary leading-relaxed">{service.description}</p>
                      </div>
                      <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.details.map(detail => (
                          <div key={detail.label} className="flex items-center gap-3 p-4 rounded-xl bg-bg-tertiary/50 hover:bg-bg-tertiary transition-colors">
                            <detail.icon className="w-5 h-5 text-accent flex-shrink-0" />
                            <span className="text-body-sm font-medium">{detail.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <p className="text-caption text-accent font-medium tracking-widest uppercase mb-3">Process</p>
            <h2 className="text-heading-lg md:text-display-sm font-bold tracking-tight mb-12">
              How we deliver
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 80}>
                <div className="glass rounded-2xl p-6 h-full text-center group hover:bg-accent-muted/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-heading-sm font-semibold mb-2">{step.title}</h3>
                  <p className="text-body-sm text-txt-secondary leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="text-heading-lg md:text-display-sm font-bold tracking-tight">
                  Have a project in mind?
                </h2>
                <p className="mt-4 text-body-lg text-txt-secondary max-w-lg mx-auto">
                  Let's discuss how we can help bring your vision to life.
                </p>
                <Link to="/contact" className="btn-primary gap-2 mt-8 inline-flex">
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
