import Image from "next/image";
import Link from "next/link";
import { PastelBlob } from "@/components/PastelBlob";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg bg-noise">
      <PastelBlob />
      <div className="container-padded grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="pill w-fit">
            <span aria-hidden>🌙</span>
            Hijri-month learning • Screen-light • Hands-on
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {site.tagline}
          </h1>

          <p className="max-w-prose text-base text-muted sm:text-lg">
            Salaam Seeds delivers a playful, authentic learning ritual for Muslim families: a curated
            kids box every Hijri month, two special Eid boxes each year, plus a digital companion
            platform and an Islamic goods store.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/boxes" className="btn-primary no-underline">
              Explore the boxes
            </Link>
            <Link href="/digital" className="btn-secondary no-underline">
              See the digital companion
            </Link>
            <Link href="/contact" className="btn-ghost no-underline">
              Join the waitlist
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="card p-4">
              <div className="text-sm font-bold">Open-and-go</div>
              <div className="text-sm text-muted">
                Crafts, games, stories, and parent guides—ready when you are.
              </div>
            </div>
            <div className="card p-4">
              <div className="text-sm font-bold">Calendar-led</div>
              <div className="text-sm text-muted">
                Hijri-month theming builds anticipation, habits, and family rituals.
              </div>
            </div>
            <div className="card p-4">
              <div className="text-sm font-bold">Authentic</div>
              <div className="text-sm text-muted">
                Curriculum-led design with a scholar/educator review plan.
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="card relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/35 via-surface to-primary/25" />
            <div className="relative">
              <div className="flex items-center gap-4">
                <Image
                  src="/seedly.svg"
                  alt="Seedly, the Salaam Seeds companion"
                  width={92}
                  height={92}
                  className="animate-floaty"
                  priority
                />
                <div>
                  <div className="font-display text-xl font-extrabold">Meet Seedly</div>
                  <p className="text-sm text-muted">
                    Your playful companion—ask questions about our boxes, the Hijri months, or
                    parenting-friendly learning ideas.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-surface/70 p-4 text-sm shadow-soft">
                <div className="font-semibold">Try asking:</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                  <li>“What’s inside a monthly box?”</li>
                  <li>“What’s the theme for Rajab?”</li>
                  <li>“What are simple ways to make learning feel playful?”</li>
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="tag">Pastel + playful UI</span>
                <span className="tag">WCAG-friendly</span>
                <span className="tag">Cited answers</span>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-accent/40 blur-2xl"
          />
        </div>
      </div>
    </section>
  );
}
