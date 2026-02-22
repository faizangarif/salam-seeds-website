import Image from "next/image";
import { Section } from "@/components/Section";

export default function AboutPage() {
  return (
    <main id="main">
      <Section kicker="Our mission" title="Planting faith with joy">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="card p-6">
            <p className="text-sm text-muted">
              Salam Seeds exists to make Islamic learning feel joyful, consistent, and doable for
              modern families. We blend the Hijri calendar with play-based learning so kids can grow
              their identity through stories, hands-on activities, and family rituals—one month at a
              time.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface/70 p-4">
                <div className="text-sm font-extrabold">Authenticity</div>
                <p className="mt-1 text-sm text-muted">
                  Curriculum-led themes with educator/scholar review to keep learning trustworthy.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface/70 p-4">
                <div className="text-sm font-extrabold">Joy</div>
                <p className="mt-1 text-sm text-muted">
                  Playful design so learning feels like connection—not pressure.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface/70 p-4">
                <div className="text-sm font-extrabold">Community</div>
                <p className="mt-1 text-sm text-muted">
                  Activities that encourage sharing, kindness, and belonging.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface/70 p-4">
                <div className="text-sm font-extrabold">Inclusivity</div>
                <p className="mt-1 text-sm text-muted">
                  Welcoming design for diverse families and learning styles.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-warning/25 p-4 text-sm text-muted">
              Seedly (our mascot) is designed to feel gentle, playful, and parent-first. You’ll find
              Seedly in the corner of the website—ready to help with questions.
            </div>
          </div>

          <div className="card overflow-hidden p-6">
            <div className="flex items-center gap-4">
              <Image
                src="/seedly.svg"
                alt="Seedly, the Salam Seeds companion"
                width={110}
                height={110}
                className="animate-floaty"
              />
              <div>
                <div className="font-display text-xl font-extrabold">Meet Seedly 🌱</div>
                <p className="mt-1 text-sm text-muted">
                  A playful seedling companion that answers questions with citations when it looks
                  things up.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-surface/70 p-4">
              <div className="text-sm font-extrabold">Brand vibe</div>
              <ul className="mt-2 space-y-2 text-sm text-muted">
                <li>🎨 Light pastel palette</li>
                <li>✨ Gentle micro-interactions</li>
                <li>🧸 Kid-friendly without being childish</li>
                <li>♿ Accessible by default</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
