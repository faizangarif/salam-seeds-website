import Link from "next/link";
import { BookOpen, Gift, Layers, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { HijriTimeline } from "@/components/HijriTimeline";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/Section";

export default function Page() {
  return (
    <main id="main">
      <Hero />

      <Section kicker="What we build" title="A multi-layered learning experience">
        <div className="grid gap-6 lg:grid-cols-3">
          <FeatureCard icon={<Gift className="h-5 w-5" aria-hidden />} title="Monthly boxes">
            A curated box each Hijri month: stories, crafts, games, learning cards, and a parent guide.
          </FeatureCard>
          <FeatureCard icon={<Layers className="h-5 w-5" aria-hidden />} title="Digital companion">
            Screen-light micro-lessons (5–8 min), quizzes, badges, printables—aligned to the box theme.
          </FeatureCard>
          <FeatureCard icon={<BookOpen className="h-5 w-5" aria-hidden />} title="Resources">
            Parent-friendly tips, activity ideas, and a growing library of short guides.
          </FeatureCard>
          <FeatureCard icon={<Sparkles className="h-5 w-5" aria-hidden />} title="Eid specials">
            Two extra-celebratory boxes per year: Eid al-Fitr and Eid al-Adha.
          </FeatureCard>
          <FeatureCard icon={<ShieldCheck className="h-5 w-5" aria-hidden />} title="Safety-first">
            Age-appropriate components, clear labeling, and parent-managed accounts.
          </FeatureCard>
          <FeatureCard icon={<Leaf className="h-5 w-5" aria-hidden />} title="Playful identity-building">
            A gentle, joyful way for kids to connect with Islam through routines and family rituals.
          </FeatureCard>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/boxes" className="btn-primary no-underline">
            See boxes
          </Link>
          <Link href="/digital" className="btn-secondary no-underline">
            Try digital demo
          </Link>
          <Link href="/about" className="btn-ghost no-underline">
            Our mission
          </Link>
        </div>
      </Section>

      <Section kicker="The calendar is the curriculum" title="Hijri themes, month by month">
        <HijriTimeline />
      </Section>

      <Section kicker="Pricing" title="Choose your family’s rhythm">
        <PricingCards />
        <p className="mt-6 max-w-prose text-sm text-muted">
          Looking for gifting options, classroom bundles, or international shipping? Send us a note
          and we’ll help you find the best fit.
        </p>
      </Section>

      <Section kicker="Next step" title="Join the waitlist">
        <div className="card overflow-hidden p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-extrabold">Bring the Hijri months home.</h3>
              <p className="mt-2 max-w-prose text-sm text-muted">
                We’re building a joyful learning ritual for families—one month at a time. Join the
                waitlist to get launch updates and early subscriber perks.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary no-underline">
                  Join the waitlist
                </Link>
                <Link href="/faq" className="btn-ghost no-underline">
                  Read FAQ
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/30 via-surface to-primary/20 p-6">
              <div className="text-sm font-extrabold">Seedly’s promise</div>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>🌱 Playful, kind, and parent-first</li>
                <li>🔎 Cited answers when I search the web</li>
                <li>🧸 Screen-light and age-appropriate</li>
                <li>🧩 Designed for real-life schedules</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
