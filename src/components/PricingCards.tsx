import Link from "next/link";
import { pricingPlans } from "@/lib/pricing";

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricingPlans.map((plan) => (
        <div key={plan.name} className="card relative overflow-hidden p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface to-primary/10" />
          <div className="relative">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-display text-xl font-extrabold">{plan.name}</div>
                <div className="mt-1 text-sm text-muted">{plan.cadence}</div>
              </div>
              {plan.badge && <span className="tag">{plan.badge}</span>}
            </div>

            <div className="mt-4 flex items-end gap-2">
              <div className="text-4xl font-extrabold">{plan.price}</div>
              <div className="pb-1 text-sm text-muted">USD</div>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-muted">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span aria-hidden className="pt-0.5">✨</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link href={plan.cta.href} className="btn-primary mt-6 w-full no-underline">
              {plan.cta.label}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
