import Link from "next/link";
import { BadgeDemo } from "@/components/BadgeDemo";
import { FeatureCard } from "@/components/FeatureCard";
import { Section } from "@/components/Section";
import { Clock, Download, LayoutDashboard, Sparkles } from "lucide-react";

export default function DigitalPage() {
  return (
    <main id="main">
      <Section kicker="Digital companion" title="Screen-light learning that boosts the box">
        <div className="grid gap-6 lg:grid-cols-3">
          <FeatureCard icon={<Clock className="h-5 w-5" aria-hidden />} title="Short micro-lessons">
            5–8 minute lessons that fit real life—perfect before bed, after school, or on weekends.
          </FeatureCard>
          <FeatureCard
            icon={<LayoutDashboard className="h-5 w-5" aria-hidden />}
            title="Parent dashboard"
          >
            Track modules, download printables, and choose pacing that matches your family rhythm.
          </FeatureCard>
          <FeatureCard icon={<Download className="h-5 w-5" aria-hidden />} title="Printables + extras">
            Activity sheets, checklists, dua cards, and bonus crafts—designed to be printer-friendly.
          </FeatureCard>
        </div>

        <div className="mt-8 card p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-extrabold">Try a tiny demo</h3>
              <p className="mt-1 text-sm text-muted">
                Below is a miniature example of how the platform can feel: short lessons, a quiz,
                and a badge—without turning into “more screen time.”
              </p>
            </div>
            <span className="tag">
              <Sparkles className="h-4 w-4" aria-hidden />
              interactive
            </span>
          </div>
          <div className="mt-6">
            <BadgeDemo />
          </div>

          <div className="mt-8 rounded-xl border border-border bg-warning/25 p-4 text-sm text-muted">
            Privacy-first note: we recommend parent-managed accounts, minimal child data, and clear
            consent flows. See our <Link href="/privacy">privacy page</Link>.
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary no-underline">
            Join the waitlist
          </Link>
          <Link href="/boxes" className="btn-ghost no-underline">
            Back to boxes
          </Link>
        </div>
      </Section>
    </main>
  );
}
