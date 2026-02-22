import Link from "next/link";
import { Section } from "@/components/Section";
import { HijriTimeline } from "@/components/HijriTimeline";

export default function MonthlyBoxesPage() {
  return (
    <main id="main">
      <Section kicker="Monthly boxes" title="What’s inside a Hijri-month box?">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h3 className="font-display text-xl font-extrabold">The “open-and-go” mix</h3>
            <p className="mt-2 text-sm text-muted">
              Each box is designed to reduce parent planning time while keeping learning playful,
              hands-on, and authentic.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>📖 A short story booklet that matches the month’s theme</li>
              <li>🪪 Learning cards (dua, vocabulary, stories, manners)</li>
              <li>🎨 A craft kit with clear, kid-friendly steps</li>
              <li>🧩 A cooperative game or family activity</li>
              <li>🧠 Optional mini-quiz + badges via the digital companion</li>
              <li>👨‍👩‍👧‍👦 A parent guide (pacing, prompts, and discussion starters)</li>
            </ul>

            <div className="mt-5 rounded-xl border border-border bg-warning/25 p-4 text-sm text-muted">
              Safety note: components should be age-appropriate, with clear labeling for small parts.
              Parents/guardians should supervise craft activities.
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary no-underline">
                Join the waitlist
              </Link>
              <Link href="/digital" className="btn-ghost no-underline">
                See the digital companion
              </Link>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-display text-xl font-extrabold">A simple weekly rhythm</h3>
            <p className="mt-2 text-sm text-muted">
              Keep it flexible—this is one suggested cadence:
            </p>

            <ol className="mt-4 space-y-3 text-sm">
              <li className="rounded-xl border border-border bg-surface/70 p-4">
                <div className="font-semibold">Week 1: Story + conversation</div>
                <div className="text-muted">
                  Read the story, discuss one takeaway, start a small “habit” for the month.
                </div>
              </li>
              <li className="rounded-xl border border-border bg-surface/70 p-4">
                <div className="font-semibold">Week 2: Craft + vocabulary</div>
                <div className="text-muted">
                  Do the craft; use learning cards as a quick bedtime game.
                </div>
              </li>
              <li className="rounded-xl border border-border bg-surface/70 p-4">
                <div className="font-semibold">Week 3: Game night</div>
                <div className="text-muted">
                  Play the cooperative game—aim for connection over “perfect learning.”
                </div>
              </li>
              <li className="rounded-xl border border-border bg-surface/70 p-4">
                <div className="font-semibold">Week 4: Family challenge</div>
                <div className="text-muted">
                  Pick one tiny action: charity jar, gratitude habit, dua practice, helping at home.
                </div>
              </li>
            </ol>

            <p className="mt-4 text-xs text-muted">
              Tip: Ask Seedly for “ideas for my child’s age” to tailor activities.
            </p>
          </div>
        </div>
      </Section>

      <Section kicker="Themes" title="Hijri-month themes at a glance">
        <HijriTimeline />
      </Section>
    </main>
  );
}
