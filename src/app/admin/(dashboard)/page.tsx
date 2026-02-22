import Link from "next/link";
import {
  Globe,
  Users,
  ShoppingBag,
  Mail,
  ExternalLink,
  Github,
  BarChart2,
  AlertCircle,
} from "lucide-react";

// ── Stat card ────────────────────────────────────────────────────────────────
function StatCard({
  icon: Icon,
  label,
  value,
  note,
  href,
  iconColor,
}: {
  icon: React.ElementType;
  label: string;
  value: React.ReactNode;
  note: string;
  href?: string;
  iconColor: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">{label}</span>
        <span className={`rounded-lg p-1.5 ${iconColor}`}>
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <div className="mb-1 text-2xl font-bold text-gray-900">{value}</div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-emerald-600 hover:underline"
        >
          {note} <ExternalLink className="h-3 w-3" />
        </a>
      ) : (
        <p className="text-xs text-gray-400">{note}</p>
      )}
    </div>
  );
}

// ── Mock bar chart (7-day) ───────────────────────────────────────────────────
const mockTraffic = [
  { day: "Mon", visits: 38 },
  { day: "Tue", visits: 52 },
  { day: "Wed", visits: 47 },
  { day: "Thu", visits: 61 },
  { day: "Fri", visits: 55 },
  { day: "Sat", visits: 43 },
  { day: "Sun", visits: 30 },
];
const maxVisits = Math.max(...mockTraffic.map((d) => d.visits));

// ── All public pages ─────────────────────────────────────────────────────────
const publicPages = [
  { label: "Home", path: "/" },
  { label: "Boxes", path: "/boxes" },
  { label: "Digital", path: "/digital" },
  { label: "Store", path: "/store" },
  { label: "Resources", path: "/resources" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "FAQ", path: "/faq" },
  { label: "Privacy", path: "/privacy" },
  { label: "Terms", path: "/terms" },
  { label: "Accessibility", path: "/accessibility" },
  { label: "Not Found", path: "/404" },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://salam-seeds-website.vercel.app";

// ── Quick links ──────────────────────────────────────────────────────────────
const quickLinks = [
  {
    label: "GitHub Repo",
    href: "https://github.com/faizangarif/salam-seeds-website",
    icon: Github,
    desc: "Source code",
  },
  {
    label: "Vercel Dashboard",
    href: "https://vercel.com/faizangarif-4473s-projects/salam-seeds-website",
    icon: BarChart2,
    desc: "Deployments & logs",
  },
  {
    label: "Live Site",
    href: siteUrl,
    icon: Globe,
    desc: "Production",
  },
  {
    label: "Contact Page",
    href: `${siteUrl}/contact`,
    icon: Mail,
    desc: "Public contact form",
  },
  {
    label: "Vercel Analytics",
    href: "https://vercel.com/faizangarif-4473s-projects/salam-seeds-website/analytics",
    icon: BarChart2,
    desc: "Enable real traffic data",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Overview of your Salam Seeds website.</p>
      </div>

      {/* Row 1 — Stat cards */}
      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
          At a Glance
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={Globe}
            label="Site Status"
            value={<span className="text-emerald-600">🟢 Live</span>}
            note="View live site"
            href={siteUrl}
            iconColor="bg-emerald-50 text-emerald-600"
          />
          <StatCard
            icon={Users}
            label="Waitlist / Subscribers"
            value="—"
            note="Coming soon"
            iconColor="bg-purple-50 text-purple-500"
          />
          <StatCard
            icon={ShoppingBag}
            label="Store Orders"
            value="0"
            note="Pre-launch"
            iconColor="bg-blue-50 text-blue-500"
          />
          <StatCard
            icon={Mail}
            label="Contact Submissions"
            value="—"
            note="Connect email provider"
            iconColor="bg-pink-50 text-pink-500"
          />
        </div>
      </section>

      {/* Row 2 — Traffic overview */}
      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
          Traffic Overview (Mock)
        </h2>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          {/* Bar chart */}
          <div className="mb-4 flex items-end justify-around gap-2 h-32">
            {mockTraffic.map(({ day, visits }) => (
              <div key={day} className="flex flex-1 flex-col items-center gap-1">
                <span className="text-xs font-medium text-gray-500">{visits}</span>
                <div
                  className="w-full rounded-t-md bg-emerald-300"
                  style={{ height: `${(visits / maxVisits) * 100}%` }}
                />
                <span className="text-xs text-gray-400">{day}</span>
              </div>
            ))}
          </div>
          {/* Callout */}
          <div className="flex items-start gap-2 rounded-lg bg-amber-50 px-4 py-3">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
            <p className="text-sm text-amber-700">
              This is placeholder data.{" "}
              <a
                href="https://vercel.com/faizangarif-4473s-projects/salam-seeds-website/analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline"
              >
                Enable Vercel Analytics
              </a>{" "}
              to see real traffic data.
            </p>
          </div>
        </div>
      </section>

      {/* Row 3 — Pages directory */}
      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
          Pages Directory
        </h2>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {publicPages.map(({ label, path }) => (
            <a
              key={path}
              href={`${siteUrl}${path}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
            >
              {label}
              <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
            </a>
          ))}
        </div>
      </section>

      {/* Row 4 — Quick links */}
      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
          Quick Links
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map(({ label, href, icon: Icon, desc }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
            >
              <span className="rounded-lg bg-gray-100 p-2">
                <Icon className="h-4 w-4 text-gray-600" />
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-800">{label}</p>
                <p className="text-xs text-gray-400">{desc}</p>
              </div>
              <ExternalLink className="ml-auto h-3.5 w-3.5 shrink-0 text-gray-300" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
