import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Globe as Globe2, Shield, Users, Target, Heart } from 'lucide-react';
import { SEO, GlassCard, ScrollReveal } from '../components';

const values = [
  { icon: Target, title: 'Outcome Over Output', description: 'We measure success by the impact our products create, not the hours we bill.' },
  { icon: Zap, title: 'Move Fast, Stay Sharp', description: 'Speed without sloppiness. We ship quickly but never cut corners on quality.' },
  { icon: Shield, title: 'Built to Last', description: 'Every line of code, every design decision is made with long-term sustainability in mind.' },
  { icon: Globe2, title: 'Remote by Design', description: 'We embrace async communication and deep work. Less meetings, more momentum.' },
  { icon: Users, title: 'Partnership Mindset', description: 'We don\'t just build and disappear. We invest in your success as if it were our own.' },
  { icon: Heart, title: 'Craft Over Scale', description: 'We stay small on purpose. Craftsmanship requires focus, and focus requires restraint.' },
];

export default function About() {
  return (
    <>
      <SEO title="About" description="ShoverHub is a remote-first digital product studio building apps, websites, and tools that push beyond limits." />

      {/* Hero */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <p className="text-caption text-accent font-medium tracking-widest uppercase mb-4">About Us</p>
            <h1 className="text-display-sm md:text-display font-bold tracking-tight max-w-3xl">
              A studio that believes in
              <br />
              <span className="text-gradient">less, but better</span>
            </h1>
            <p className="mt-6 text-body-lg text-txt-secondary max-w-2xl leading-relaxed">
              ShoverHub was founded on a simple idea: great digital products don't require
              massive teams or bloated budgets. They require focused minds, clear thinking,
              and relentless attention to craft.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="pb-20 md:pb-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal>
              <div className="glass rounded-3xl p-8 md:p-10 h-full">
                <h2 className="text-heading-lg font-bold tracking-tight mb-6">Our Story</h2>
                <div className="space-y-4 text-body text-txt-secondary leading-relaxed">
                  <p>
                    We started ShoverHub because we saw too many projects weighed down by
                    unnecessary complexity — oversized teams, endless meetings, and products
                    that lost their soul somewhere between the pitch deck and the launch.
                  </p>
                  <p>
                    We chose a different path. A lean, remote-first team that values deep work
                    over busy work. A studio that ships real products — our own and our clients' —
                    with the kind of care and precision that only comes from genuine ownership.
                  </p>
                  <p>
                    Today, we serve clients globally from our distributed setup, building everything
                    from SaaS platforms to mobile apps to brand identities. We're small, and we
                    intend to stay that way. Because when it comes to craft, small is an advantage.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass rounded-3xl p-8 md:p-10 h-full">
                <h2 className="text-heading-lg font-bold tracking-tight mb-6">Our Approach</h2>
                <div className="space-y-4 text-body text-txt-secondary leading-relaxed">
                  <p>
                    We don't believe in one-size-fits-all methodologies. Every project has its own
                    rhythm, its own constraints, its own definition of success.
                  </p>
                  <p>
                    What stays constant is our commitment to understanding the problem before
                    reaching for a solution. We listen first, strategize second, and build third.
                    It's not the fastest approach — but it's the one that produces products people
                    actually want to use.
                  </p>
                  <p>
                    We work in focused sprints, keep communication tight, and make decisions based
                    on evidence, not assumptions. And we always, always ship.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <p className="text-caption text-accent font-medium tracking-widest uppercase mb-3">Values</p>
            <h2 className="text-heading-lg md:text-display-sm font-bold tracking-tight mb-12">
              What guides us
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 80}>
                <GlassCard padding="md" className="h-full group">
                  <div className="p-2.5 rounded-lg bg-accent-muted text-accent w-fit mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-heading-sm font-semibold mb-2">{value.title}</h3>
                  <p className="text-body-sm text-txt-secondary leading-relaxed">{value.description}</p>
                </GlassCard>
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
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="text-heading-lg md:text-display-sm font-bold tracking-tight">
                  Want to work together?
                </h2>
                <p className="mt-4 text-body-lg text-txt-secondary max-w-lg mx-auto">
                  We'd love to hear about your project. Let's start a conversation.
                </p>
                <Link to="/contact" className="btn-primary gap-2 mt-8 inline-flex">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
