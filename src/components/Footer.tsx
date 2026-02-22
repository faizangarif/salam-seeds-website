import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-bg">
      <div className="container-padded grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3 md:col-span-2">
          <div className="font-display text-lg font-extrabold">{site.name}</div>
          <p className="max-w-prose text-sm text-muted">
            {site.description}
          </p>
          <p className="text-xs text-muted">
            <a href={`mailto:${site.email}`} className="underline">{site.email}</a>
          </p>
          <p className="text-xs text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-bold">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/boxes">Boxes</Link></li>
            <li><Link href="/digital">Digital</Link></li>
            <li><Link href="/store">Store</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-bold">Legal</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/accessibility">Accessibility</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/30 py-3 text-center">
        <p className="text-xs text-muted opacity-40">
          <Link href="/admin/login">Owner</Link>
        </p>
      </div>
    </footer>
  );
}
