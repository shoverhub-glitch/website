import { SEO, ScrollReveal } from '../components';
import { siteConfig } from '../data/site';

export default function Cookies() {
  return (
    <>
      <SEO title="Cookie Policy" description={`Cookie Policy for ${siteConfig.name} — how we use cookies and tracking technologies.`} />

      <section className="section-padding">
        <div className="section-container max-w-narrow">
          <ScrollReveal>
            <p className="text-caption text-accent font-medium tracking-widest uppercase mb-4">Legal</p>
            <h1 className="text-heading-lg md:text-display-sm font-bold tracking-tight">Cookie Policy</h1>
            <p className="mt-4 text-body-sm text-txt-tertiary">Last updated: January 1, 2025</p>
          </ScrollReveal>

          <div className="mt-12 space-y-10 text-body text-txt-secondary leading-relaxed">
            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">1. What Are Cookies</h2>
                <p>Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, understand how you use our site, and improve your experience.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">2. Types of Cookies We Use</h2>
                <div className="space-y-4 mt-4">
                  <div className="glass rounded-xl p-4">
                    <h3 className="text-body font-semibold text-txt mb-1">Essential Cookies</h3>
                    <p className="text-body-sm">Required for the website to function properly. These cannot be disabled.</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h3 className="text-body font-semibold text-txt mb-1">Analytics Cookies</h3>
                    <p className="text-body-sm">Help us understand how visitors interact with our website by collecting anonymous data.</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h3 className="text-body font-semibold text-txt mb-1">Preference Cookies</h3>
                    <p className="text-body-sm">Remember your settings and preferences, such as theme selection and language.</p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">3. Managing Cookies</h2>
                <p>You can control and manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain sites. Note that disabling cookies may affect the functionality of our website.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">4. Third-Party Cookies</h2>
                <p>We may use third-party services that place their own cookies on your device. These are subject to the respective third party's privacy policy.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">5. Updates</h2>
                <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">6. Contact</h2>
                <p>For questions about our use of cookies, contact us at <a href={`mailto:${siteConfig.email}`} className="text-accent hover:text-accent-hover transition-colors">{siteConfig.email}</a>.</p>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
