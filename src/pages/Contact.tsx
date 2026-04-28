import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Clock, Send, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SEO, GlassCard, ScrollReveal } from '../components';
import { siteConfig } from '../data/site';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO title="Contact" description="Get in touch with ShoverHub — we'd love to hear about your project." />

      {/* Hero */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <p className="text-caption text-accent font-medium tracking-widest uppercase mb-4">Contact</p>
            <h1 className="text-display-sm md:text-display font-bold tracking-tight max-w-3xl">
              Let's build
              <br />
              <span className="text-gradient">something great</span>
            </h1>
            <p className="mt-6 text-body-lg text-txt-secondary max-w-2xl leading-relaxed">
              Have a project in mind? Want to explore working together? We'd love to hear from you.
              No pitch decks required — just a conversation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 md:pb-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <GlassCard padding="md">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent-muted text-accent">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-body-sm text-txt-tertiary">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-body font-medium text-txt hover:text-accent transition-colors inline-flex items-center gap-1">
                        {siteConfig.email} <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <GlassCard padding="md">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent-muted text-accent">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-body-sm text-txt-tertiary">Location</p>
                      <p className="text-body font-medium text-txt">Remote-First, Global</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <GlassCard padding="md">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent-muted text-accent">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-body-sm text-txt-tertiary">Response Time</p>
                      <p className="text-body font-medium text-txt">Within 24 hours</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-heading-sm font-semibold mb-3">What happens next?</h3>
                  <ol className="space-y-3 text-body-sm text-txt-secondary">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <span>We review your message and understand your needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <span>We schedule a call to discuss your project in detail</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      <span>We send a proposal with scope, timeline, and investment</span>
                    </li>
                  </ol>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={100}>
                <GlassCard padding="lg">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-heading-sm font-semibold mb-2">Message sent!</h3>
                      <p className="text-body text-txt-secondary">We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-body-sm font-medium text-txt mb-2">Name</label>
                          <input
                            id="name"
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-bg-tertiary/50 border border-border text-txt text-body placeholder:text-txt-tertiary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-body-sm font-medium text-txt mb-2">Email</label>
                          <input
                            id="email"
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-bg-tertiary/50 border border-border text-txt text-body placeholder:text-txt-tertiary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-body-sm font-medium text-txt mb-2">Subject</label>
                        <select
                          id="subject"
                          className="w-full px-4 py-3 rounded-xl bg-bg-tertiary/50 border border-border text-txt text-body focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        >
                          <option>New Project</option>
                          <option>App Development</option>
                          <option>Web Development</option>
                          <option>Product Design</option>
                          <option>Branding & Content</option>
                          <option>Partnership</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-body-sm font-medium text-txt mb-2">Message</label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-bg-tertiary/50 border border-border text-txt text-body placeholder:text-txt-tertiary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                      <button type="submit" className="btn-primary gap-2 w-full">
                        Send Message <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
