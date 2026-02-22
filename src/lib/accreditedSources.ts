const DEFAULT_ALLOWED_HOSTS = new Set<string>([
  // OpenAI official
  "openai.com",
  "www.openai.com",
  "platform.openai.com",
  "developers.openai.com",
]);

const DEFAULT_ALLOWED_TLDS = [
  ".gov",
  ".edu",
  ".org",
  ".ac.uk",
  ".int",
];

/**
 * Parse a comma-separated allowlist of hostnames from an env var.
 */
export function getExtraAllowedHosts(): string[] {
  const raw = process.env.CHAT_EXTRA_ALLOWED_DOMAINS || "";
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function hostnameFromUrl(url: string): string | null {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return null;
  }
}

export function isAccreditedUrl(url: string, extraAllowedHosts: string[] = []): boolean {
  const host = hostnameFromUrl(url);
  if (!host) return false;

  if (DEFAULT_ALLOWED_HOSTS.has(host)) return true;

  // Allow specific additional hosts (exact match or subdomain match).
  for (const allowed of extraAllowedHosts) {
    const a = allowed.toLowerCase();
    if (host === a) return true;
    if (host.endsWith("." + a)) return true;
  }

  // Allow common accredited top-level domains.
  for (const tld of DEFAULT_ALLOWED_TLDS) {
    if (host.endsWith(tld)) return true;
  }

  return false;
}
