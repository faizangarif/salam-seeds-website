export type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  badge?: string;
  features: string[];
  cta: { label: string; href: string };
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Monthly Subscription",
    price: "$45",
    cadence: "per month (US shipping included)",
    badge: "Most popular",
    features: [
      "One themed box every Hijri month",
      "Digital companion access (videos, quizzes, printables)",
      "Parent guide with pacing + discussion prompts",
      "Subscriber perks for seasonal drops",
    ],
    cta: { label: "Start monthly", href: "/contact" },
  },
  {
    name: "Annual Prepay",
    price: "$468",
    cadence: "per year ($39/mo equivalent)",
    badge: "Best value",
    features: [
      "12 Hijri-month boxes (12-month journey)",
      "Lower effective monthly price",
      "Great for gifting + commitment",
      "Digital companion included",
    ],
    cta: { label: "Choose annual", href: "/contact" },
  },
  {
    name: "Digital-Only",
    price: "$7.99",
    cadence: "per month",
    badge: "Global friendly",
    features: [
      "Monthly module aligned to Hijri theme",
      "Short micro-lessons (5–8 minutes)",
      "Quizzes + badges + printables",
      "Parent dashboard experience (starter)",
    ],
    cta: { label: "Explore digital", href: "/digital" },
  },
];
