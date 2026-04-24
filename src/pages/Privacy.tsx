import { SEO, ScrollReveal } from '../components';
import { siteConfig } from '../data/site';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description={`Privacy Policy for ${siteConfig.name} — how we collect, use, and protect your data.`} />

      <section className="section-padding">
        <div className="section-container max-w-narrow">
          <ScrollReveal>
            <p className="text-caption text-accent font-medium tracking-widest uppercase mb-4">Legal</p>
            <h1 className="text-heading-lg md:text-display-sm font-bold tracking-tight">Privacy Policy</h1>
            <p className="mt-4 text-body-sm text-txt-tertiary">Last updated: January 1, 2025</p>
          </ScrollReveal>

          <div className="mt-12 space-y-10 text-body text-txt-secondary leading-relaxed">
            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">1. Information We Collect</h2>
                <p className="mb-3">We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and email address</li>
                  <li>Company name and job title</li>
                  <li>Project details and requirements</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">2. How We Use Your Information</h2>
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you updates and communications about our services</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">3. Information Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">4. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">5. Cookies</h2>
                <p>We use cookies and similar tracking technologies to enhance your experience on our website. See our Cookie Policy for more details.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">6. Your Rights</h2>
                <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">7. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us at <a href={`mailto:${siteConfig.email}`} className="text-accent hover:text-accent-hover transition-colors">{siteConfig.email}</a>.</p>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
