import { SEO, ScrollReveal } from '../components';
import { siteConfig } from '../data/site';

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service" description={`Terms of Service for ${siteConfig.name} — the rules and guidelines for using our services.`} />

      <section className="section-padding">
        <div className="section-container max-w-narrow">
          <ScrollReveal>
            <p className="text-caption text-accent font-medium tracking-widest uppercase mb-4">Legal</p>
            <h1 className="text-heading-lg md:text-display-sm font-bold tracking-tight">Terms of Service</h1>
            <p className="mt-4 text-body-sm text-txt-tertiary">Last updated: January 1, 2025</p>
          </ScrollReveal>

          <div className="mt-12 space-y-10 text-body text-txt-secondary leading-relaxed">
            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">1. Acceptance of Terms</h2>
                <p>By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">2. Services</h2>
                <p>{siteConfig.name} provides digital product development services including app development, web development, product design, and branding. The specific scope of services will be outlined in individual project agreements.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">3. Client Responsibilities</h2>
                <p className="mb-3">As a client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information for project requirements</li>
                  <li>Respond to requests for feedback and approval in a timely manner</li>
                  <li>Ensure you have the right to use any content or materials you provide</li>
                  <li>Make payments according to the agreed schedule</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">4. Intellectual Property</h2>
                <p>Unless otherwise agreed in writing, all intellectual property created during a project belongs to the client upon full payment. {siteConfig.name} retains the right to showcase the work in our portfolio unless a non-disclosure agreement is in place.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">5. Limitation of Liability</h2>
                <p>{siteConfig.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, even if we have been advised of the possibility of such damages.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">6. Termination</h2>
                <p>Either party may terminate a project with written notice. The client shall pay for all work completed up to the date of termination, plus any non-cancellable commitments made on behalf of the project.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">7. Governing Law</h2>
                <p>These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-heading-sm font-semibold text-txt mb-4">8. Contact</h2>
                <p>For questions about these Terms, contact us at <a href={`mailto:${siteConfig.email}`} className="text-accent hover:text-accent-hover transition-colors">{siteConfig.email}</a>.</p>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
