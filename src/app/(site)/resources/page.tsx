import Link from "next/link";
import { Section } from "@/components/Section";

const resources = [
  {
    title: "How to build a monthly family learning ritual",
    desc: "A simple routine you can repeat each Hijri month—without overwhelm.",
    href: "#",
  },
  {
    title: "Play-based learning: what it is (and what it isn’t)",
    desc: "How kids learn best through hands-on exploration, stories, and games.",
    href: "#",
  },
  {
    title: "A parent-friendly guide to the Hijri months",
    desc: "Short explanations and conversation starters for each month.",
    href: "#",
  },
];

export default function ResourcesPage() {
  return (
    <main id="main">
      <Section kicker="Resources" title="Helpful guides for parents (starter)">
        <div className="card p-6">
          <p className="text-sm text-muted">
            This page is a starter library. As you publish articles, replace the placeholders below
            with real posts (MDX works great with Next.js). In the meantime, you can ask Seedly for
            cited summaries from accredited sources.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary no-underline">
              Suggest a topic
            </Link>
            <Link href="/faq" className="btn-ghost no-underline">
              FAQ
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {resources.map((r) => (
            <div key={r.title} className="card p-6">
              <div className="font-display text-lg font-extrabold">{r.title}</div>
              <p className="mt-2 text-sm text-muted">{r.desc}</p>
              <div className="mt-4">
                <span className="tag">coming soon</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 card p-6">
          <div className="font-semibold">Ask Seedly for cited answers</div>
          <p className="mt-1 text-sm text-muted">
            Seedly can use OpenAI’s web search tool and return clickable citations from accredited
            sources. Look for the “Ask Seedly” button in the bottom-right.
          </p>
        </div>
      </Section>
    </main>
  );
}
