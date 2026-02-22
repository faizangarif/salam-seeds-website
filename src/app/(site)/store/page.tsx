import Link from "next/link";
import { Section } from "@/components/Section";

const categories = [
  {
    name: "Books & story sets",
    desc: "Kid-friendly titles for bedtime, Qur’an connection, and family learning.",
    emoji: "📚",
  },
  {
    name: "Prayer & worship",
    desc: "Prayer rugs, beads, dua cards, and gentle habit-building tools.",
    emoji: "🕌",
  },
  {
    name: "Modest fashion",
    desc: "Kufis, hijabs, and everyday modest essentials (starter preview).",
    emoji: "🧕",
  },
  {
    name: "Jewelry & keepsakes",
    desc: "Authentic silver pieces and meaningful gifts for special moments.",
    emoji: "💍",
  },
  {
    name: "Seasonal decor",
    desc: "Ramadan and Eid décor designed to feel warm, modern, and joyful.",
    emoji: "🎉",
  },
  {
    name: "Gifts & bundles",
    desc: "Care packages, classroom bundles, and family celebration essentials.",
    emoji: "🎁",
  },
];

export default function StorePage() {
  return (
    <main id="main">
      <Section kicker="eCommerce" title="A curated Islamic store (preview)">
        <div className="card p-6">
          <p className="text-sm text-muted">
            Salam Seeds is designed to grow into a thoughtful Islamic goods store—so families can
            find box-adjacent items in one joyful place. This page is a starter preview; you can
            connect it to Shopify (or another storefront) when you’re ready.
          </p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {categories.map((c) => (
            <div key={c.name} className="card p-6">
              <div className="text-3xl" aria-hidden>
                {c.emoji}
              </div>
              <div className="mt-3 font-display text-xl font-extrabold">{c.name}</div>
              <p className="mt-2 text-sm text-muted">{c.desc}</p>
              <div className="mt-4">
                <span className="tag">coming soon</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 card p-6">
          <div className="font-semibold">Want early access to the store?</div>
          <p className="mt-1 text-sm text-muted">
            Join the waitlist and we’ll share seasonal drops and subscriber perks.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary no-underline">
              Join the waitlist
            </Link>
            <Link href="/boxes" className="btn-ghost no-underline">
              Explore boxes
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
