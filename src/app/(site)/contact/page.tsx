import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <main id="main">
      <Section kicker="Contact" title="Join the waitlist or ask a question">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <ContactForm />

          <div className="card p-6">
            <div className="font-display text-xl font-extrabold">What to include</div>
            <p className="mt-2 text-sm text-muted">
              The more context you share (without sensitive personal info), the better we can help.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>👧 Child age range (approx.)</li>
              <li>🏠 Your family routine (weekends vs weekdays)</li>
              <li>🎨 Interests (stories, crafts, games)</li>
              <li>🌍 Location (for shipping feedback)</li>
            </ul>

            <div className="mt-6 rounded-xl border border-border bg-surface/70 p-4 text-sm text-muted">
              <div className="font-semibold text-text">Prefer email?</div>
              <p className="mt-1">
                Reach us directly at{" "}
                <a href={`mailto:${site.email}`} className="text-text underline">
                  {site.email}
                </a>
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-border bg-warning/25 p-4 text-sm text-muted">
              Privacy reminder: please don’t share sensitive information or anything about a child
              that you wouldn’t want stored. This site is parent-first.
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
