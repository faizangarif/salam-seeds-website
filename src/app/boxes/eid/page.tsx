import Link from "next/link";
import { Section } from "@/components/Section";

export default function EidBoxesPage() {
  return (
    <main id="main">
      <Section kicker="Eid specials" title="Two extra-joyful boxes each year">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h3 className="font-display text-xl font-extrabold">Eid al-Fitr Box</h3>
            <p className="mt-2 text-sm text-muted">
              Celebrate the end of Ramadan with gratitude, community, and family traditions.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>🎉 Decor + family activity set</li>
              <li>🎁 Gift-ready elements for sharing</li>
              <li>🌙 Eid sunnahs + gratitude prompts</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-display text-xl font-extrabold">Eid al-Adha Box</h3>
            <p className="mt-2 text-sm text-muted">
              Explore the story of Prophet Ibrahim (AS), meaning of sacrifice, and caring generosity.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>🐑 Hands-on activities and storytelling</li>
              <li>🤝 Charity + sharing challenge</li>
              <li>🧩 A family game designed for connection</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 card p-6">
          <div className="font-semibold">Want Eid reminders?</div>
          <p className="mt-1 text-sm text-muted">
            Join the waitlist and we’ll notify you before seasonal launches.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary no-underline">
              Join the waitlist
            </Link>
            <Link href="/faq" className="btn-ghost no-underline">
              Read FAQ
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
