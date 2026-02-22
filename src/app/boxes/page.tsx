import Link from "next/link";
import { Section } from "@/components/Section";
import { PricingCards } from "@/components/PricingCards";

export default function BoxesPage() {
  return (
    <main id="main" className="bg-bg">
      <Section kicker="Subscription boxes" title="A box for every Hijri month">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h3 className="font-display text-xl font-extrabold">Monthly Hijri Boxes</h3>
            <p className="mt-2 text-sm text-muted">
              Each month brings a theme tied to the Hijri calendar—stories, crafts, games, and
              parent guides that make learning feel natural.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>📦 6–10 curated items (varies by month)</li>
              <li>📖 Story booklet + learning cards</li>
              <li>🎨 Craft kit + cooperative family game</li>
              <li>👨‍👩‍👧‍👦 Parent guide + pacing suggestions</li>
            </ul>
            <Link href="/boxes/monthly" className="btn-primary mt-6 inline-flex no-underline">
              See monthly details
            </Link>
          </div>

          <div className="card p-6">
            <h3 className="font-display text-xl font-extrabold">Eid Special Boxes</h3>
            <p className="mt-2 text-sm text-muted">
              Two extra-celebratory boxes each year—Eid al-Fitr and Eid al-Adha—designed for family
              traditions, gifting, and community joy.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>🎁 Gift-ready packaging and keepsakes</li>
              <li>🎉 Decor, activities, and family games</li>
              <li>🧁 Hosting and sharing ideas</li>
            </ul>
            <Link href="/boxes/eid" className="btn-secondary mt-6 inline-flex no-underline">
              Explore Eid boxes
            </Link>
          </div>
        </div>
      </Section>

      <Section kicker="Pricing" title="Plans for different families">
        <PricingCards />
      </Section>

      <Section kicker="Questions?" title="Ask Seedly">
        <div className="card p-6">
          <p className="text-sm text-muted">
            Look for the “Ask Seedly” button in the bottom-right corner to ask questions about box
            contents, Hijri themes, or learning ideas.
          </p>
        </div>
      </Section>
    </main>
  );
}
